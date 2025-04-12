import axios from "axios";

// {status: 200, message: 'success', data: {…}}
// data
// :
// {task_id: '81c513ee-d01e-4ff5-b2a8-c1d55ba0e6cc'}
// message
// :
// "success"
// status
// :
// 200

const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);
const BASE_URL_OF_API_APP = import.meta.env.VITE_BASEURL_OF_API;

export const enhancedImageApi = async (file) => {
  const taskId = await uploadImage(file);
  console.log(`Image uploaded successfully with task id: ${taskId}`);

  const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log(enhancedImageData);
    console.log(`Enhanced Image data: ${enhancedImageData}`);
  return enhancedImageData.image;
};

const uploadImage = async (file) => {
  const formData = new FormData();

  formData.append("image_file", file);
  console.log("form data is");
  console.log(formData);
  const { data } = await axios.post(
    `${BASE_URL_OF_API_APP}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data?.task_id) {
    throw new Error("Failed to upload the image!, task id not found");
  }

  console.log(data.data.task_id);
  //call the api and then upload that image and get the task id and return id
  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL_OF_API_APP}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data) {
    throw new Error(`Unable to get the enhanced image!`);
  }
  return data.data;
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  console.log(`Entered inside polling ${retries}`);
  const result = await fetchEnhancedImage(taskId);
  if (result.state !== 1) {
    console.log(`Image is being processed please wait for sometime`);
    if (retries >= 10) {
      console.log(`Max limit reached please try again later`);
    }

    //wait for 2 second before retrying
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return pollForEnhancedImage(taskId, retries + 1);
  } else {
    return result
  }
};

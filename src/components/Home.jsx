import { useState } from "react";
import { ImagePreview } from "./ImagePreview";
import { ImageUpload } from "./ImageUpload";
import { enhancedImageApi } from "../../utils/enhancedImageAPI";

export const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file) => {
    /*
        in this function we need to do two things
        1. save this image in the uploaded image section so that it can visible in the ui
        2. call the api and send this image to the api and enhance it 

    */
    // we setted the image object url to the setUploadImage var so that we can show it on the frontend
    console.log(URL.createObjectURL(file))
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    // call the api for enhancing the image
    try {
      console.log(file);
        const enhancedImageUrl = await enhancedImageApi(file);
        console.log(enhancedImageUrl);
        setEnhancedImage(enhancedImageUrl);
        setLoading(false);
    } catch (error) {
        console.log(error);
        alert(`Error occured while enhancing the image please try again later`)
        setLoading(false);
    }
  };

  return (
    <>
      <ImageUpload handleImageUpload={handleImageUpload} />
      <ImagePreview
        loading={loading}
        upload={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

import { Loading } from "./Loading";

export const ImagePreview = ({ loading, upload, enhanced }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* original image */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold text-center text-white bg-gray-800 py-2">
          Original Image
        </h2>
        {upload ? (
          <img
            src={upload}
            alt="uploadedImage"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No image selected
          </div>
        )}
      </div>
      {/* preview image */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-lg font-semibold text-center text-white bg-blue-800 py-2">
          Enhanced Image
        </h2>
        {enhanced && !loading && (
          <img src={enhanced} alt="" className="w-full h-full object-cover" />
        )}

        {loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No enhanced image
          </div>
        )}
      </div>
    </div>
  );
};

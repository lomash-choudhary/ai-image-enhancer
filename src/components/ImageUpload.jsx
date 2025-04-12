export const ImageUpload = ({handleImageUpload}) => {

    const ShowImageHandler = (e) => {
        const file = e.target.files[0]
        handleImageUpload(file)
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl">
            {/* with w-full it can take the full width of it parent container */}
            <label htmlFor="fileInput" className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-all">
                <input  type="file" id="fileInput" className="hidden" onChange={ShowImageHandler}/> 
                {/* this hidden class hides the element but it does not remove the functionality of the element and the elements also takes the space it just that the element is not visible any more */}
                <span className="text-lg font-medium text-gray-500">Click or drag to upload your image</span>
            </label>
        </div>
    )
}
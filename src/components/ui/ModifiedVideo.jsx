/* eslint-disable react/prop-types */

const ModifiedVideo = ({videoFile,handleReset}) => {
    return (
        <>
            <video 
                src={videoFile} 
                controls 
                className="xs:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]"
            ></video>
            <button 
                onClick={handleReset} 
                className="bg-[#01B0F1] xs:px-3 py-[0.35rem] text-[1.12rem] text-white border border-transparent shadow-sm rounded-md"
            >
                Upload another video
            </button>
        </>
    )
}

export default ModifiedVideo
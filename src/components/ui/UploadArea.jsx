/* eslint-disable react/prop-types */
import upload_image from '/src/assets/upload.jpg'
import uploaded_image from '/src/assets/uploaded.png'

const UploadArea = ({uploaded, setUploaded, setVideoFile, notify}) => {

    const handleChangeVideo = (e) => {
        const file = e.target.files[0]
        if (file.size <= 200000000) {
            setUploaded(true)
            setVideoFile(file)
        }
        else {
            setUploaded(false)
            notify('info','warning','File size is more than 200mb so try again with another video')
        }
    }

    return (
        <main className={`grid justify-items-center border-blue-200/50 border-4 pt-2 pb-6 relative xs:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] border-dashed`}> 
            <img 
                src={uploaded === true ? uploaded_image : upload_image} 
                alt="upload_status_image" 
                width={uploaded === true ? 100 : 150} 
            />
            <h1 className="xs:text-[1.1rem] lg:text-[1.4rem]">{ uploaded === false ? "Click to upload the video" : "Uploaded" }</h1>
            <p className={` ${uploaded === true ? "hidden" : "block"} xs:text-[0.9rem] lg:text-[1.1rem] text-gray-400 mt-[0.2%]`}>Maximum file size is 200mb</p>
            <input 
                type="file" 
                accept="video/*" 
                onChange={handleChangeVideo}
                className={` ${uploaded === true ? "hidden" : "inline-block"} absolute top-0 bottom-0 right-0 left-0 w-[100%] h-[100%] cursor-pointer opacity-0`}
            />
        </main>
    )
}

export default UploadArea
import Process from "./Process"

const Validation = (uploaded,text,x,y,time,duration,fontSize,notify,setStartProcess,setLoader,videoFile,setVideoFile) => {
    
    if(
        uploaded === true && text !== "" && x !== "" && 
        y !== "" && time !== "" && duration !== "" && 
        fontSize !== ""
    ) {
        Process(text,x,y,time,duration,fontSize,setStartProcess,setLoader,videoFile,setVideoFile)
    }

    else {
        uploaded === false ? notify('info','Warning','You have to upload a video') : null
        text === "" ? notify('info','Warning','you have not let text empty') : null
        x === "" || y === "" || time === "" || duration === "" || fontSize === "" ?
            notify('info','Warning','You have to fill all parameters under the text') 
            :            
            null
    }
    
}

export default Validation
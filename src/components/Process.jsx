import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import font_of_text from '/src/assets/OpenSans-ExtraBold.ttf'

const Process = async (text,x,y,time,duration,fontSize,setStartProcess,setLoader,videoFile,setVideoFile) => {
    
    const ffmpeg = createFFmpeg({
        log: true,
    })

    setStartProcess(true)
    setLoader(true)
    await ffmpeg.load()
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(videoFile))
    ffmpeg.FS('writeFile', 'OpenSans.ttf', await fetchFile(font_of_text))
    await ffmpeg.run(
        '-i',
        'input.mp4',
        '-vf',
        `drawtext=fontfile=/OpenSans.ttf:text='${text}':x=${x}:y=${y}:fontsize=${fontSize}:fontcolor=white:enable='between(t,${time},${time+duration})'`,
        'output.mp4',
    )
    const data = ffmpeg.FS('readFile', 'output.mp4')
    setVideoFile(URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'})))
    setLoader(false)

}

export default Process
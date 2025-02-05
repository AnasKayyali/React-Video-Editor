/* eslint-disable react/prop-types */

import { Tooltip } from "antd"

const Parameter = ({value,handle,label,notify}) => {

    const handleParameter = (e) => {
        const value = e.target.value
        value !== "" ? 
        isNaN(Number(value)) ? 
            notify('info','warning','You have to enter a valid integer number') 
            : 
            handle(parseInt(value)) 
        : 
        handle(value)
    }

    const Title = (label) => {
        switch (label) {
            case "x":
                return "The x axis of the frame"
            case "y":
                return "The y axis of the frame"
            case "t":
                return "The time in seconds when the text will appear in the video"
            case "d":
                return "Duration of the text apperance on the video"
            case "s":
                return "Font size of the text"
        }       
    }

    return (
        <Tooltip title={Title(label)}>
            <main className="flex max-lg:basis-[33.3%] justify-center items-center gap-x-2">
                <h1 className="lg:text-lg">{label}</h1>
                <input type="text" value={value} onChange={handleParameter} className="border w-14 text-center shadow-sm rounded-md py-1" /> 
            </main>
        </Tooltip>
    )
}

export default Parameter
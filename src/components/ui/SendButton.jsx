/* eslint-disable react/prop-types */

const SendButton = ({handleSend}) => {
    return (
        <button 
            className="xs:p-1 xs:w-[30%] md:w-[20%] lg:w-[15%] xl:w-[12%] bg-[#01B0F1] text-white text-lg border border-transparent shadow-md rounded-md mt-2"
            onClick={handleSend}  
        >
            Send
        </button>
    )
}

export default SendButton
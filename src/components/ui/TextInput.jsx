/* eslint-disable react/prop-types */

const TextInput = ({text,setText}) => {
    return (
        <main className="flex items-center gap-2 xs:w-[70%] md:w-[45%] lg:w-[35%] xl:w-[27%]">
            <h1 className="xs:text-lg">text</h1>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                className="border xs:py-1 lg:py-[0.4rem] px-3 shadow-sm rounded-md w-full xs:text-[1.1rem] lg:text-[1.2rem]" 
            />
        </main>
    )
}

export default TextInput
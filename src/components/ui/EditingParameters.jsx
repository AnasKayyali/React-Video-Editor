/* eslint-disable react/prop-types */

import Parameter from "./Parameter"

const EditingParameters = ({x,y,t,d,s,handleX,handleY,handleT,handleD,handleS,notify}) => {
    return (
        <main className="flex flex-row flex-wrap justify-center gap-y-6 lg:gap-x-6 xl:gap-x-8">
            <Parameter value={x} handle={handleX} label="x" notify={notify} />
            <Parameter value={y} handle={handleY} label="y" notify={notify} />
            <Parameter value={t} handle={handleT} label="t" notify={notify} />
            <Parameter value={d} handle={handleD} label="d" notify={notify} />
            <Parameter value={s} handle={handleS} label="s" notify={notify} />
        </main>
    )
}

export default EditingParameters
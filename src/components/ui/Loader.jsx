import { Spin } from 'antd'

const Loader = () => {
    return (
        <>
            <Spin size='large' />
            <h1>This will take some time...</h1>
        </>
    )
}

export default Loader

import Logo from '/src/assets/logo.png'

const Navbar = () => {
    
    return (
        <main className="flex justify-between items-center pl-[4%] sticky top-0 z-50 shadow-md backdrop-blur-md xs:py-1 md:py-2">
            <div className="flex items-center gap-x-1">
                <img src={Logo} alt="logo" width={50} />
                <h1 className="xs:text-[1.1rem] lg:text-[1.25rem] font-semibold">video overlay</h1>
            </div>
        </main>
    )
}

export default Navbar
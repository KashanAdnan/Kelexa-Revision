const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-24 py-4 max-sm:px-6">
            <p className="text-2xl">Kelexa.io</p>
            <a href="/contact" className="bg-[#DA0101] px-10 py-2
            rounded-full text-white hover:bg-white hover:text-[#DA0101] border-2 border-[#DA0101] font-medium transition-all duration-150 uppercase text-[14px] max-sm:px-7
            ">Contact Us</a>
        </nav>
    )
}

export default Navbar

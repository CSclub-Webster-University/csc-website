export default function Navbar() {
    return (
        <header className="fixed w-full top-0 z-50 bg-black border-b-2 border-white backdrop-blur-none">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="text-2xl font-black text-white tracking-widest uppercase">
                    CS_CLUB<span className="text-[#00ff00] animate-pulse">_</span>
                </div>
                <nav className="hidden md:flex gap-8 font-bold uppercase text-sm">
                    <a href="#hero" className="text-white hover:text-black hover:bg-[#00ff00] px-2 py-1 transition-none">Home</a>
                    <a href="#about" className="text-white hover:text-black hover:bg-[#00ff00] px-2 py-1 transition-none">About</a>
                    <a href="#events" className="text-white hover:text-black hover:bg-[#00ff00] px-2 py-1 transition-none">Events</a>
                    <a href="#projects" className="text-white hover:text-black hover:bg-[#00ff00] px-2 py-1 transition-none">Projects</a>
                    <a href="#contact" className="text-white hover:text-black hover:bg-[#00ff00] px-2 py-1 transition-none">Contact</a>
                </nav>
                <button className="md:hidden text-white brutal-border px-2 py-1 hover:bg-[#00ff00] hover:text-black">
                    [MENU]
                </button>
            </div>
        </header>
    )
}

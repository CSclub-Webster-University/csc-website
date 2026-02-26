export default function Navbar() {
    return (
        <header className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="text-2xl font-black text-emerald-400 tracking-tighter">
                    <span className="text-slate-100">CS</span>CLUB.
                </div>
                <nav className="hidden md:flex gap-8 font-medium">
                    <a href="#hero" className="text-slate-300 hover:text-emerald-400 transition-colors">Home</a>
                    <a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</a>
                    <a href="#events" className="text-slate-300 hover:text-emerald-400 transition-colors">Events</a>
                    <a href="#projects" className="text-slate-300 hover:text-emerald-400 transition-colors">Projects</a>
                    <a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Contact</a>
                </nav>
                <button className="md:hidden text-slate-300 hover:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    )
}

export default function Footer() {
    return (
        <footer className="py-12 border-t-4 border-white bg-black mt-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
                    <div>
                        <div className="text-2xl font-black text-white tracking-widest uppercase mb-4">
                            CS_CLUB<span className="text-[#00ff00]">_</span>
                        </div>
                        <p className="text-[#cccccc] font-mono text-sm max-w-xs mx-auto md:mx-0 font-bold">
                            &gt; Empowering students through technology, collaboration, and continuous learning.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-[#00ff00] uppercase mb-4">
                            [ DIRECTORY ]
                        </h3>
                        <ul className="space-y-2 font-bold font-mono text-sm">
                            <li><a href="#about" className="hover:text-black hover:bg-[#00ff00] transition-none px-1">./ABOUT_US</a></li>
                            <li><a href="#events" className="hover:text-black hover:bg-[#00ff00] transition-none px-1">./EVENTS</a></li>
                            <li><a href="#projects" className="hover:text-black hover:bg-[#00ff00] transition-none px-1">./PROJECTS</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-[#00ff00] uppercase mb-4">
                            [ NETWORK ]
                        </h3>
                        <ul className="space-y-2 font-bold font-mono text-sm">
                            <li><a href="#" className="hover:text-black hover:bg-[#00ff00] transition-none px-1 text-white">DISCORD.exe</a></li>
                            <li><a href="#" className="hover:text-black hover:bg-[#00ff00] transition-none px-1 text-white">GITHUB.sh</a></li>
                            <li><a href="#" className="hover:text-black hover:bg-[#00ff00] transition-none px-1 text-white">INSTAGRAM.bat</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-[#666666] pt-8 border-t-2 border-[#1a1a1a] font-mono text-xs font-bold uppercase">
                    <p>SYSTEM.HALT(); // &copy; {new Date().getFullYear()} COMPUTER SCIENCE CLUB. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    )
}

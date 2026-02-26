export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative bg-black">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 text-center z-10">
                <div className="inline-block mb-8 px-4 py-2 brutal-border-green text-[#00ff00] font-bold uppercase tracking-widest text-sm bg-black brutal-shadow-green">
                    System.out.println("Webster_University");
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase tracking-tighter leading-none text-white drop-shadow-[4px_4px_0_rgba(0,255,0,1)]">
                    &lt;CODE&gt;<br />CREATE<br />CONNECT /&gt;
                </h1>
                <p className="text-lg md:text-xl text-[#cccccc] max-w-3xl mx-auto mb-12 font-mono border-l-4 border-[#00ff00] pl-6 text-left bg-black/50 p-4">
                    <span className="text-[#00ff00]">&gt;</span> Initialize Computer Science Club.<br />
                    <span className="text-[#00ff00]">&gt;</span> Loading developers, hackers, and creators...<br />
                    <span className="text-[#00ff00]">&gt;</span> Status: Ready to build the future.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="#contact" className="brutal-button brutal-shadow-hover w-full sm:w-auto text-center">
                        [ JOIN_THE_CLUB ]
                    </a>
                    <a href="#events" className="px-6 py-3 bg-black text-white font-bold uppercase tracking-widest brutal-border hover:bg-white hover:text-black transition-none brutal-shadow-hover w-full sm:w-auto text-center">
                        ./UPCOMING_EVENTS
                    </a>
                </div>
            </div>
        </section>
    )
}

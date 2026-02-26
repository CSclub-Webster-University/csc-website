export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden pb-20">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 text-center z-10">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide">
                    Webster University
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
                    Code. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Create.</span> Connect.
                </h1>
                <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12">
                    Join the Computer Science Club. We are a community of passionate developers, hackers, and creators building the future together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] text-lg">
                        Join The Club
                    </a>
                    <a href="#events" className="bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold py-4 px-8 rounded-full transition-all text-lg">
                        Upcoming Events
                    </a>
                </div>
            </div>
        </section>
    )
}

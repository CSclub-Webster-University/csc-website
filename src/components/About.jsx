export default function About() {
    return (
        <section id="about" className="py-24 border-b border-slate-800 bg-slate-900/30">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-emerald-400">Our Club</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800 rounded-2xl p-8 aspect-square flex flex-col justify-center items-center text-center border border-slate-700/50">
                                <div className="text-6xl mb-4">💻</div>
                                <h3 className="text-2xl font-bold text-slate-100 mb-2">Our Mission</h3>
                                <p className="text-slate-400">N/A</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-colors">
                                <h3 className="text-xl font-bold text-emerald-400 mb-2">N/A</h3>
                                <p className="text-slate-400">N/A</p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-colors">
                                <h3 className="text-xl font-bold text-cyan-400 mb-2">N/A</h3>
                                <p className="text-slate-400">N/A</p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-colors">
                                <h3 className="text-xl font-bold text-emerald-400 mb-2">N/A</h3>
                                <p className="text-slate-400">N/A</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

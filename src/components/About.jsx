import SectionHeader from './ui/SectionHeader'

export default function About() {
    return (
        <section id="about" className="py-24 border-b-2 border-white bg-black">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <SectionHeader title="About_Us" subtitle="[System Information]" />

                    <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
                        {/* Mission Block */}
                        <div className="brutal-border brutal-shadow bg-black p-8 h-full flex flex-col justify-center">
                            <div className="text-4xl font-black mb-6 text-[#00ff00]">
                                &gt; ./MISSION.EXE_
                            </div>
                            <p className="text-xl font-bold text-white uppercase leading-relaxed tracking-wide">
                                N/A
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                            <div className="brutal-border p-6 hover:bg-white hover:text-black transition-none group cursor-pointer brutal-shadow-hover">
                                <h3 className="text-xl font-black uppercase mb-2 group-hover:text-black text-[#00ff00]">
                                    [+] N/A
                                </h3>
                                <p className="font-bold">N/A</p>
                            </div>

                            <div className="brutal-border p-6 hover:bg-white hover:text-black transition-none group cursor-pointer brutal-shadow-hover">
                                <h3 className="text-xl font-black uppercase mb-2 group-hover:text-black text-[#00ff00]">
                                    [+] N/A
                                </h3>
                                <p className="font-bold">N/A</p>
                            </div>

                            <div className="brutal-border p-6 hover:bg-white hover:text-black transition-none group cursor-pointer brutal-shadow-hover">
                                <h3 className="text-xl font-black uppercase mb-2 group-hover:text-black text-[#00ff00]">
                                    [+] N/A
                                </h3>
                                <p className="font-bold">N/A</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

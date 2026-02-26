export default function SectionHeader({ title, subtitle, color = "white" }) {
    const isGreen = color === "green";
    return (
        <div className="mb-16 border-b-4 border-white pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
                <h2 className={`text-4xl md:text-6xl font-black uppercase ${isGreen ? 'text-[#00ff00]' : 'text-white'}`}>
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-2 text-xl font-bold uppercase tracking-widest">
                        {subtitle}
                    </p>
                )}
            </div>
            <div className={`hidden md:block text-6xl font-black ${isGreen ? 'text-[#00ff00]' : 'text-white'}`}>
                *
            </div>
        </div>
    )
}

export default function EventCard({ event }) {
    return (
        <div className="brutal-border brutal-shadow-green bg-black hover:bg-white hover:text-black group transition-none flex flex-col h-full cursor-pointer">
            <div className="p-6 flex-grow border-b-2 border-white group-hover:border-black">
                <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-2 py-1 bg-[#00ff00] text-black text-xs font-black uppercase tracking-widest border-2 border-[#00ff00] group-hover:bg-black group-hover:text-[#00ff00]">
                        [{event.type}]
                    </span>
                    <div className="text-right font-mono text-sm font-bold">
                        <div className="text-[#00ff00] group-hover:text-black">{event.date !== "N/A" ? new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "TBD"}</div>
                        <div>{event.time}</div>
                    </div>
                </div>

                <h3 className="text-2xl font-black uppercase mb-4 leading-tight">
                    {event.title}
                </h3>

                <div className="font-mono text-sm mb-4 flex items-start gap-2 text-[#cccccc] group-hover:text-black font-bold">
                    <span className="text-[#00ff00] group-hover:text-black">&gt;</span>
                    {event.location}
                </div>

                <p className="text-sm font-bold leading-relaxed">
                    {event.description}
                </p>
            </div>

            <div className="px-6 py-4 flex flex-wrap gap-2 bg-[#1a1a1a] group-hover:bg-[#cccccc]">
                {event.tags && event.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono font-bold uppercase before:content-['#'] before:text-[#00ff00] group-hover:before:text-black">
                        {tag}
                    </span>
                ))}
                {(!event.tags || event.tags.length === 0) && (
                    <span className="text-xs font-mono font-bold uppercase opacity-50">NO_TAGS</span>
                )}
            </div>
        </div>
    )
}

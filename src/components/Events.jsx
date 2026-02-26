import { useState, useEffect } from 'react'
import eventsData from '../data/events.json'

export default function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        // Simulating data fetch setup, though it's a local JSON
        setEvents(eventsData)
    }, [])

    return (
        <section id="events" className="py-24 border-b border-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming <span className="text-emerald-400">Events</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
                        Join us for workshops, hackathons, and networking sessions. Expand your skill set and meet fellow tech enthusiasts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {events.map(event => (
                        <div key={event.id} className="bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] flex flex-col">
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">
                                        {event.type}
                                    </span>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-slate-200">{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                                        <div className="text-xs text-slate-400">{event.time}</div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-100 mb-2">{event.title}</h3>
                                <div className="flex items-center text-sm text-slate-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    {event.location}
                                </div>
                                <p className="text-slate-300 text-sm mb-6 line-clamp-3">
                                    {event.description}
                                </p>
                            </div>
                            <div className="px-6 py-4 bg-slate-800/80 border-t border-slate-700/50 flex flex-wrap gap-2">
                                {event.tags.map(tag => (
                                    <span key={tag} className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 font-bold py-3 px-8 rounded-full transition-all">
                        View All Events
                    </button>
                </div>
            </div>
        </section>
    )
}

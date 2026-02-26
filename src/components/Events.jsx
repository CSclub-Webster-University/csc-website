import { useState, useEffect } from 'react'
import eventsData from '../data/events.json'
import SectionHeader from './ui/SectionHeader'
import EventCard from './ui/EventCard'

export default function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        setEvents(eventsData)
    }, [])

    return (
        <section id="events" className="py-24 border-b-2 border-white bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader title="Runtime_Events" subtitle="[Schedule]" color="green" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {events.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <button className="brutal-button brutal-shadow-hover">
                            &gt; LOAD_MORE_EVENTS
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

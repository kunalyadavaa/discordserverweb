import React from 'react';
import { Calendar } from 'lucide-react';

const upcomingEvents = [
  {
    title: 'Game Night',
    date: 'Every Friday',
    time: '8:00 PM EST',
    description: 'Join us for multiplayer gaming sessions'
  },
  {
    title: 'Movie Night',
    date: 'Every Saturday',
    time: '9:00 PM EST',
    description: 'Watch and discuss movies together'
  },
  {
    title: 'Community Meeting',
    date: 'First Sunday',
    time: '3:00 PM EST',
    description: 'Monthly updates and feedback session'
  }
];

export function EventsSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Never miss out on the fun - join our regular community events
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <div
            key={event.title}
            className="p-6 rounded-lg bg-white/10 backdrop-blur-lg hover:transform hover:-translate-y-1 transition-transform"
          >
            <Calendar className="h-6 w-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <div className="space-y-1 mb-4">
              <p className="text-sm opacity-90">{event.date}</p>
              <p className="text-sm opacity-90">{event.time}</p>
            </div>
            <p className="opacity-80">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
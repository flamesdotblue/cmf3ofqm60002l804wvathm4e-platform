import React from 'react'
import { Calendar, MapPin } from 'lucide-react'

const events = [
  {
    day: 'Friday',
    title: 'Welcome Aperitivo',
    time: '6:00 PM',
    location: 'Bellagio Lakeside Bar',
    details: 'Join us for an informal welcome drink by the lake to kick off the weekend.'
  },
  {
    day: 'Saturday',
    title: 'Ceremony',
    time: '4:00 PM',
    location: 'Villa del Balbianello',
    details: 'A short boat ride brings us to the villa for our ceremony in the terraced gardens.'
  },
  {
    day: 'Saturday',
    title: 'Reception',
    time: '6:00 PM - Late',
    location: 'Villa del Balbianello',
    details: 'Cocktails at sunset followed by dinner and dancing under the stars.'
  },
  {
    day: 'Sunday',
    title: 'Farewell Brunch & Boat Day',
    time: '11:00 AM',
    location: 'Varenna Dock',
    details: 'Casual brunch and optional boat cruise to explore the lakeside villages.'
  }
]

export default function ScheduleSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Wedding Weekend Schedule</h2>
        <p className="mt-3 text-slate-600">We can’t wait to celebrate with you across a weekend of la dolce vita on the lake.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {events.map((e, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white/70">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">{e.day}</p>
                <h3 className="mt-1 font-semibold text-lg text-slate-900">{e.title}</h3>
              </div>
              <Calendar className="h-5 w-5 text-rose-500" />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{e.time}</span>
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{e.location}</span>
            </div>
            <p className="mt-3 text-slate-600">{e.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

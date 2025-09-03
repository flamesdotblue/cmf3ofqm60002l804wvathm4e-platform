import React from 'react'
import { Plane, BedDouble, MapPin } from 'lucide-react'

export default function TravelStaySection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Travel & Stay</h2>
        <p className="mt-3 text-slate-600">Tips for getting to Lake Como and making the most of your stay.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-6 bg-white/70">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <Plane className="h-5 w-5 text-rose-500" /> Getting There
          </div>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li>Fly into Milan (MXP, LIN) or Bergamo (BGY).</li>
            <li>Trains from Milano Centrale to Varenna-Esino take ~1 hour.</li>
            <li>Taxis and ferries connect towns around the lake.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 bg-white/70">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <BedDouble className="h-5 w-5 text-rose-500" /> Where to Stay
          </div>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li>Bellagio: central, iconic views, lively dining.</li>
            <li>Varenna: charming, walkable, easy train access.</li>
            <li>Tremezzo/Lenno: close to the venue, quieter vibe.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 bg-white/70">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <MapPin className="h-5 w-5 text-rose-500" /> Helpful Notes
          </div>
          <ul className="mt-3 space-y-2 text-slate-600 text-sm">
            <li>Ferries: check Navigazione Laghi schedules in advance.</li>
            <li>Attire: cocktail for welcome, formal for ceremony/reception.</li>
            <li>Weather: warm days, cool evenings—bring a light layer.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070&auto=format&fit=crop"
          alt="Lake Como ferry and villas"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>
    </div>
  )
}

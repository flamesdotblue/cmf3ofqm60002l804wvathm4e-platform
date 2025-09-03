import React from 'react'
import { Calendar, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2070&auto=format&fit=crop"
          alt="Lake Como Italy"
          className="h-[80vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white" />
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-[70vh] flex-col items-center justify-center text-center text-white">
          <p className="tracking-widest uppercase text-sm/relaxed text-white/90">You're invited to the wedding of</p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">Ava & Luca</h1>
          <div className="mt-6 flex flex-col items-center gap-3 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>September 20, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Lake Como, Italy</span>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <a href="#rsvp" className="inline-flex items-center rounded-full bg-rose-500 px-6 py-3 text-white shadow-lg shadow-rose-500/30 hover:bg-rose-600 transition">RSVP</a>
            <a href="#travel" className="inline-flex items-center rounded-full bg-white/90 text-slate-900 px-6 py-3 hover:bg-white">Travel & Stay</a>
          </div>
        </div>
      </div>
    </div>
  )
}

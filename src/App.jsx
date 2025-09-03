import React from 'react'
import { Heart } from 'lucide-react'
import HeroSection from './components/HeroSection'
import ScheduleSection from './components/ScheduleSection'
import TravelStaySection from './components/TravelStaySection'
import RSVPSection from './components/RSVPSection'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="font-semibold tracking-wide text-slate-900 flex items-center gap-2">
              <Heart className="h-5 w-5 text-rose-500" /> Lake Como Wedding
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#schedule" className="hover:text-slate-900 text-slate-600">Schedule</a>
              <a href="#travel" className="hover:text-slate-900 text-slate-600">Travel & Stay</a>
              <a href="#rsvp" className="inline-flex items-center rounded-full bg-rose-500 px-4 py-2 text-white hover:bg-rose-600 transition">RSVP</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="schedule" className="scroll-mt-20">
          <ScheduleSection />
        </section>
        <section id="travel" className="scroll-mt-20">
          <TravelStaySection />
        </section>
        <section id="rsvp" className="scroll-mt-20">
          <RSVPSection />
        </section>
      </main>

      <footer className="border-t border-slate-200 mt-16">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ava & Luca — Lake Como, Italy</p>
        </div>
      </footer>
    </div>
  )
}

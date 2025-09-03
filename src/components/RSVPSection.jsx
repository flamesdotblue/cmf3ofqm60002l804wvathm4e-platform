import React, { useState } from 'react'
import { Mail } from 'lucide-react'

export default function RSVPSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: 'Yes',
    guests: '1',
    dietary: ''
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Kindly RSVP</h2>
        <p className="mt-3 text-slate-600">Please let us know by June 1, 2026.</p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
        {submitted ? (
          <div className="text-center py-10">
            <p className="text-lg font-semibold text-slate-900">Grazie mille!</p>
            <p className="mt-2 text-slate-600">We’ve received your RSVP. We’ll be in touch with more details soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Attending</label>
                <select
                  name="attending"
                  value={form.attending}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Number of Guests</label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Dietary Needs</label>
                <input
                  type="text"
                  name="dietary"
                  value={form.dietary}
                  onChange={handleChange}
                  placeholder="e.g., vegetarian, gluten-free"
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-rose-500 px-5 py-3 font-medium text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-200"
            >
              <Mail className="h-5 w-5" /> Submit RSVP
            </button>
            <p className="text-xs text-slate-500">By submitting, you consent to be contacted with wedding updates and logistics.</p>
          </form>
        )}
      </div>
    </div>
  )
}

'use client';
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Ticket,
  ArrowRight,
  LayoutGrid
} from 'lucide-react';

/**
 * Komponen Agenda (Permikomnas Wilayah XIV)
 * Desain: Single Card Carousel, Compact & Elegant
 */

export default function Agenda() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      title: "Rapat Koordinasi Wilayah XIV",
      date: "15 Feb 2024",
      time: "09:00 WITA",
      location: "Kendari, Sultra",
      image: "https://images.unsplash.com/photo-1540575861501-7ad05823c283?q=80&w=2070&auto=format&fit=crop",
      category: "Organisasi",
      tagline: "Sinergi Himpunan Se-Sultra"
    },
    {
      id: 2,
      title: "Workshop Web Dev & AI",
      date: "22 Feb 2024",
      time: "13:00 WITA",
      location: "Hybrid / Zoom",
      image: "https://images.unsplash.com/photo-1591115765373-520b7a21726f?q=80&w=2070&auto=format&fit=crop",
      category: "Teknologi",
      tagline: "Eksplorasi Teknologi Masa Depan"
    },
    {
      id: 3,
      title: "Seminar Karir IT Sultra",
      date: "05 Mar 2024",
      time: "08:30 WITA",
      location: "Aula Universitas",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
      category: "Karir",
      tagline: "Membangun Portofolio Profesional"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white dark:bg-slate-950 py-16 px-6 overflow-hidden relative">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Header Section (Minimalis) --- */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Sparkles size={14} />
              Featured Event
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              Agenda <span className="text-blue-600">Terdekat.</span>
            </h2>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all active:scale-90"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all active:scale-90"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* --- Single Card Carousel --- */}
        <div className="relative group">
          <div className="relative h-[380px] md:h-[320px] bg-slate-100 dark:bg-white/5 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-white/10 shadow-2xl shadow-blue-500/5">
            
            {events.map((event, index) => (
              <div 
                key={event.id}
                className={`absolute inset-0 flex flex-col md:flex-row transition-all duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
                }`}
              >
                {/* Image Section */}
                <div className="h-40 md:h-full md:w-5/12 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                    alt={event.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 md:from-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 md:top-6 md:left-6">
                    <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase rounded-lg shadow-lg">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium italic italic">
                      "{event.tagline}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-600">
                        <Calendar size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase font-bold text-slate-400">Tanggal</span>
                        <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">{event.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600">
                        <MapPin size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase font-bold text-slate-400">Lokasi</span>
                        <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <button className="flex-1 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all active:scale-95 shadow-lg">
                      Daftar Sekarang
                    </button>
                    <a href="/agenda" className="p-3 bg-slate-100 dark:bg-white/10 text-slate-400 rounded-xl hover:text-blue-600 transition-colors">
                      <LayoutGrid size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {events.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- Footer Link --- */}
        <div className="mt-12 text-center">
          <a href="/web/agenda" className="group text-slate-400 hover:text-blue-600 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
            Lihat Arsip Agenda Lengkap
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
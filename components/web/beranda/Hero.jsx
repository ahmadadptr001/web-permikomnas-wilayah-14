'use client';
import React from 'react';
import { ArrowRight, Code2, Users2, Cpu, Globe2, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

/**
 * Catatan: Mengikuti struktur desain asli namun dengan penyesuaian ukuran yang lebih ringkas (small).
 * Menerapkan tema Dark Neon dengan aksen pendaran (glow) yang lebih tajam.
 * Menjaga responsivitas untuk Tablet dan Mobile.
 */

export default function Hero() {
  const router = useRouter();
  return (
    <section className="min-h-screen relative flex  overflow-hidden bg-slate-950 transition-colors duration-500">
      {/* Dasar Hero dengan Background Image & Overlay Neon */}
      <div className="absolute inset-0 z-0">
        <img 
          className="object-cover w-full h-full absolute inset-0 opacity-30 animate-slow-zoom" 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="IT Networking & Tech" 
        />
        
        {/* Neon Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-blue-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
        {/* Glow effect tambahan untuk nuansa neon */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center text-center lg:text-left">
          
          {/* Sisi Kiri: Konten Teks (Lebih Ringkas/Small) */}
          <div className="space-y-5 md:space-y-6 animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md mx-auto lg:mx-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Sparkles size={14} className="text-blue-400 animate-pulse" />
              <span className="text-blue-400 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em]">
                Wilayah XIV Sulawesi Tenggara
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter shadow-blue-500/10">
              KOLABORASI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
                TANPA BATAS.
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
              Menyatukan ribuan ide mahasiswa komputer Sulawesi Tenggara untuk menciptakan inovasi teknologi yang berdampak bagi masyarakat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button onClick={() => router.push('/web/kontribusi')} className="w-full sm:w-auto group px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3">
                Mulai Berkontribusi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md rounded-xl font-bold transition-all">
                Lihat Agenda
              </button>
            </div>

            {/* Statistik Cepat (Small Version) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 pt-6">
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-black text-white tracking-tight">14</p>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Kabupaten</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10"></div>
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-black text-white tracking-tight">25+</p>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Himpunan</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10"></div>
              <div className="text-center lg:text-left">
                <p className="text-2xl md:text-3xl font-black text-white tracking-tight">1K+</p>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Talenta IT</p>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Visual Card Neon (Small & Glow) */}
          <div className="hidden md:block relative animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="grid grid-cols-2 gap-4 max-w-[480px] mx-auto">
              <div className="space-y-4 translate-y-6">
                <div className="p-5 bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group">
                  <Code2 size={28} className="text-blue-400 mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  <h3 className="text-white font-bold text-base mb-1">Dev Corner</h3>
                  <p className="text-slate-500 text-xs leading-snug">Review kode dan diskusi arsitektur terkini.</p>
                </div>
                <div className="p-5 bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all group">
                  <Globe2 size={28} className="text-indigo-400 mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                  <h3 className="text-white font-bold text-base mb-1">Social Impact</h3>
                  <p className="text-slate-500 text-xs leading-snug">Implementasi teknologi untuk desa digital Sultra.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group">
                  <Users2 size={28} className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  <h3 className="text-white font-bold text-base mb-1">Meetups</h3>
                  <p className="text-slate-500 text-xs leading-snug">Kumpul rutin bulanan pengurus wilayah.</p>
                </div>
                <div className="p-5 bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all group">
                  <Cpu size={28} className="text-purple-400 mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                  <h3 className="text-white font-bold text-base mb-1">IOT Lab</h3>
                  <p className="text-slate-500 text-xs leading-snug">Eksperimentasi hardware dan otomasi industri.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Style untuk animasi background */}
      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
} 
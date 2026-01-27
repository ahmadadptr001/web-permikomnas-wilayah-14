'use client';
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Lightbulb, 
  Rocket, 
  BrainCircuit, 
  Compass, 
  Sparkles,
  MessageSquare,
  Cpu,
  Trophy,
  Users,
  Globe,
  Heart
} from 'lucide-react';

/**
 * Halaman Salurkan Ide & Inovasi (Skala Masyarakat Luas)
 * Fokus: Mengarahkan seluruh lapisan masyarakat Sultra untuk mengajukan ide inovasi.
 * Tema: Dark Neon & Futuristic High-Impact.
 */

export default function FormKontribusi() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      icon: <Globe className="text-cyan-400" />,
      title: "Layanan Publik",
      desc: "Ide digitalisasi untuk mempermudah urusan warga dan administrasi daerah.",
      glow: "shadow-[0_0_15px_rgba(34,211,238,0.3)]"
    },
    {
      icon: <BrainCircuit className="text-purple-400" />,
      title: "Teknologi Tepat Guna",
      desc: "Inovasi fisik atau sistem untuk membantu petani, nelayan, dan UMKM lokal.",
      glow: "shadow-[0_0_15px_rgba(192,132,252,0.3)]"
    },
    {
      icon: <Heart className="text-rose-400" />,
      title: "Solusi Sosial",
      desc: "Gagasan teknologi untuk pendidikan, kesehatan, dan kesejahteraan warga Sultra.",
      glow: "shadow-[0_0_15px_rgba(251,113,133,0.3)]"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Background Neon Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-cyan-600/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-12">
        {/* Navigation */}
        <button 
          className="group flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-all mb-10"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Kembali</span>
        </button>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Header & Visual Info (Left) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-2">
                <Sparkles size={12} className="text-cyan-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Suara Rakyat Sultra</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                DARI WARGA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                  UNTUK DAERAH.
                </span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Siapapun Anda—pelajar, pekerja, petani, hingga pengusaha—setiap ide kecil dapat menjadi perubahan besar bagi Sulawesi Tenggara. Bagikan visi Anda sekarang.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid gap-4">
              {[
                { icon: <Compass size={20} />, text: "Pendampingan dari konsep hingga implementasi nyata." },
                { icon: <Users size={20} />, text: "Kolaborasi dengan pakar IT dan pemangku kepentingan." },
                { icon: <MessageSquare size={20} />, text: "Wadah resmi aspirasi digital untuk kemajuan bersama." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-sm font-medium text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                
                {/* User Identity */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Nama / Inisiator</label>
                    <input 
                      type="text" 
                      placeholder="Nama Anda atau Komunitas"
                      className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Asal Daerah (Kota/Kab)</label>
                    <input 
                      type="text" 
                      placeholder="Contoh: Kendari / Kolaka"
                      className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-700"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1 text-center block">Pilih Cakupan Masalah</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories.map((cat, i) => (
                      <label key={i} className="cursor-pointer group">
                        <input 
                          type="radio" 
                          name="ide_type" 
                          className="peer hidden" 
                          defaultChecked={i === 0} 
                          onChange={() => setActiveCategory(i)}
                        />
                        <div className={`h-full p-5 rounded-3xl border border-white/5 bg-slate-950/30 peer-checked:border-cyan-500/50 peer-checked:bg-cyan-500/5 transition-all group-hover:border-white/20 text-center ${cat.glow}`}>
                          <div className="mb-3 flex justify-center">{cat.icon}</div>
                          <p className="text-xs font-black text-white uppercase tracking-wider mb-1">{cat.title}</p>
                          <p className="text-[10px] text-slate-500 leading-tight">{cat.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pitch Section */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Deskripsi Masalah & Solusi</label>
                  <textarea 
                    rows="5"
                    placeholder="Ceritakan masalah apa yang Anda temui di masyarakat dan bagaimana teknologi bisa membantu memperbaikinya..."
                    className="w-full bg-slate-950/50 border border-white/5 rounded-3xl px-6 py-5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-700 resize-none leading-relaxed"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button className="w-full group relative overflow-hidden px-8 py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Kirim Aspirasi <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  <p className="text-center text-slate-600 text-[10px] mt-4 font-bold tracking-widest uppercase">
                    Terbuka untuk seluruh warga Sulawesi Tenggara tanpa terkecuali.
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
'use client';
import React from 'react';
import { 
  Users2, 
  MapPin, 
  Flag, 
  Globe, 
  Milestone, 
  FileText,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';

/**
 * Komponen: HistorySection
 * Deskripsi: Menampilkan linimasa perjalanan terbentuknya Permikomnas Wilayah XIV Sultra.
 * Desain: Modern Dark Neon dengan layout selang-seling (Z-pattern).
 */

export default function Sejarah() {
  const historyTimeline = [
    {
      phase: "Latar Belakang & Inisiasi",
      event: "Pertemuan Kolektif Mahasiswa IT Sultra",
      desc: "Mahasiswa Informatika dari berbagai kampus di Sulawesi Tenggara mulai membangun komunikasi intensif untuk bergabung dalam wadah nasional guna memperkuat solidaritas akademik dan profesi.",
      date: "2018 - 2019",
      location: "Kendari, Sulawesi Tenggara",
      icon: <Users2 size={24} />,
      color: "blue"
    },
    {
      phase: "Konsolidasi Wilayah",
      event: "Pra-Muswil & Pembentukan Koordinator",
      desc: "Pelaksanaan diskusi terpumpun (FGD) untuk menyatukan visi. Pada tahap ini, Sultra masih berada di bawah koordinasi wilayah lain hingga diputuskan untuk berdiri mandiri.",
      date: "12 Januari 2020",
      location: "Kendari, Sultra",
      icon: <Milestone size={24} />,
      color: "cyan"
    },
    {
      phase: "Deklarasi & Peresmian",
      event: "Munas & Pengukuhan Wilayah XIV",
      desc: "Melalui Musyawarah Nasional (MUNAS) Permikomnas, Sulawesi Tenggara secara resmi dimekarkan dan disahkan menjadi Wilayah XIV. Momen ini menandai kemandirian organisasi.",
      date: "September 2021",
      location: "Forum Nasional",
      icon: <Flag size={24} />,
      color: "indigo"
    },
    {
      phase: "Legalitas & Struktur",
      event: "Musyawarah Wilayah (MUSWIL) I",
      desc: "Pemilihan Ketua Wilayah definitif pertama dan penyusunan struktur kepengurusan perdana Wilayah XIV untuk menjalankan roda organisasi secara formal.",
      date: "November 2021",
      location: "Kampus Sultra",
      icon: <FileText size={24} />,
      color: "purple"
    },
    {
      phase: "Eksistensi Digital",
      event: "Transformasi & Kolaborasi Aktif",
      desc: "Wilayah XIV mulai aktif dalam kegiatan nasional, pengabdian masyarakat berbasis IT, dan pengembangan infrastruktur digital internal.",
      date: "2022 - Sekarang",
      location: "Provinsi Sultra",
      icon: <Globe size={24} />,
      color: "sky"
    }
  ];

  return (
    <section className="bg-[#030816] py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Clock size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Jejak Langkah</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            SEJARAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">WILAYAH XIV.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Perjalanan panjang transformasi mahasiswa IT Sulawesi Tenggara menuju kemandirian organisasi.
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative">
          {/* Vertical Line Center */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-indigo-500/50 to-transparent border-l border-dashed border-blue-500/30"></div>

          <div className="space-y-12 md:space-y-0">
            {historyTimeline.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="ml-12 md:ml-0 md:w-[45%] group">
                  <div className="relative p-8 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,58,138,0.2)]">
                    
                    {/* Icon Container */}
                    <div className="absolute -top-6 left-6 md:left-auto md:right-auto p-4 bg-slate-950 border border-white/10 rounded-2xl text-blue-400 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
                         style={{ left: index % 2 === 0 ? 'auto' : '24px', right: index % 2 === 0 ? '24px' : 'auto' }}>
                      {item.icon}
                    </div>

                    <div className={`mt-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`flex items-center gap-2 mb-2 text-xs font-black uppercase tracking-widest text-blue-500 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Sparkles size={12} />
                        {item.phase}
                      </div>
                      <h4 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">{item.event}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm mb-6">{item.desc}</p>
                      
                      <div className={`flex flex-wrap items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full">
                          <MapPin size={10} className="text-blue-500" /> {item.location}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 group-hover:scale-150 transition-transform"></div>

                {/* Empty Side (Desktop Only) */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-2xl text-slate-400 hover:text-white transition-all flex items-center gap-3 mx-auto group">
            <span className="text-xs font-bold uppercase tracking-widest">Lihat Arsip Munas Lengkap</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
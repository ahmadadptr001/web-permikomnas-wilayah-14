'use client';
import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Award, 
  ShieldCheck, 
  Users2, 
  Cpu
} from 'lucide-react';

/**
 * Komponen Struktur Organisasi (Leadership Permikomnas Wilayah XIV)
 * Desain: Modern Cards dengan tema Deep Light Blue (Biru Tua Elegan)
 */

export default function Leadership() {
  const leaders = [
    {
      id: 1,
      name: "Andi Saputra",
      role: "Ketua Wilayah XIV",
      campus: "Universitas Halu Oleo",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
      icon: <ShieldCheck className="text-sky-500" size={16} />
    },
    {
      id: 2,
      name: "Siti Rahma",
      role: "Sekretaris Wilayah",
      campus: "Universitas Muhammadiyah Kendari",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      icon: <Award className="text-sky-500" size={16} />
    },
    {
      id: 3,
      name: "Rizky Ramadhan",
      role: "Bendahara Wilayah",
      campus: "IAIN Kendari",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      icon: <Users2 className="text-sky-500" size={16} />
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "Kabid IPTEK",
      campus: "STMIK Bina Bangsa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      icon: <Cpu className="text-sky-500" size={16} />
    }
  ];

  return (
    <section className="bg-[#f0f7ff] dark:bg-[#050b1a] py-24 px-6 relative overflow-hidden transition-colors duration-500">
      {/* Glow Decorative - Menggunakan warna biru muda transparan di atas latar gelap */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/10 blur-[120px] rounded-full -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-700 dark:text-sky-400">Executive Board</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#0f172a] dark:text-white uppercase tracking-tighter">
            Penggerak <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Wilayah XIV.</span>
          </h3>
          <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
            Sinergi kepemimpinan mahasiswa komputer se-Sultra dalam balutan profesionalitas dan inovasi tanpa batas.
          </p>
        </div>

        {/* Grid Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div key={leader.id} className="group relative">
              {/* Card Container - Border lebih gelap dan shadow biru tua */}
              <div className="relative bg-white dark:bg-[#0a1124] rounded-[2.5rem] p-4 border border-blue-100 dark:border-blue-900/30 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-900/20 hover:border-sky-400/50">
                
                {/* Photo */}
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  {/* Overlay gradasi biru tua saat hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1124]/90 via-[#0a1124]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <a href="#" className="p-2.5 bg-sky-500/20 backdrop-blur-md rounded-full text-white hover:bg-sky-500 transition-colors border border-sky-400/30"><Instagram size={18}/></a>
                      <a href="#" className="p-2.5 bg-sky-500/20 backdrop-blur-md rounded-full text-white hover:bg-sky-500 transition-colors border border-sky-400/30"><Linkedin size={18}/></a>
                      <a href="#" className="p-2.5 bg-sky-500/20 backdrop-blur-md rounded-full text-white hover:bg-sky-500 transition-colors border border-sky-400/30"><Twitter size={18}/></a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-2 pb-2">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="p-1.5 bg-blue-50 dark:bg-sky-500/10 rounded-lg">
                      {leader.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase text-blue-800 dark:text-sky-400 tracking-widest">{leader.role}</span>
                  </div>
                  <h4 className="text-lg font-black text-[#0f172a] dark:text-white leading-tight">{leader.name}</h4>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-tighter">{leader.campus}</p>
                </div>

              </div>

              {/* Decorative Glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-sky-400 rounded-[2.7rem] blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-[#0f172a] dark:bg-sky-500 text-white dark:text-[#0a1124] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-800 dark:hover:bg-white transition-all shadow-lg shadow-blue-900/20 active:scale-95">
            Lihat Seluruh Pengurus
          </button>
        </div>

      </div>
    </section>
  );
}
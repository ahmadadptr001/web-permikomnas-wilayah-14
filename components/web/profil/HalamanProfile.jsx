import React, { useState, useEffect } from 'react';
import {
  Instagram,
  Linkedin,
  Mail,
  Globe,
  Shield,
  Zap,
  ArrowUpRight,
  Fingerprint,
  Search,
  Hash,
  LayoutGrid,
} from 'lucide-react';

/**
 * RE-DESAIN: PAPAN PENGURUS MODERN & KREATIF
 * Konsep: Dark Mode, Tipografi Eksperimental, Animasi Hover Halus.
 */

const HalamanProfil = () => {
  const [activeDivisi, setActiveDivisi] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const divisiList = [
    'Semua',
    'BPH',
    'Kominfo',
    'Pendidikan',
    'Internal',
    'Eksternal',
    'Kewirausahaan',
  ];

  const pengurusData = [
    {
      id: 1,
      nama: 'Rifki Muhammad',
      jabatan: 'Ketua Wilayah XIV',
      divisi: 'BPH',
      univ: 'Universitas Halu Oleo',
      motto: 'Inovasi tanpa batas, kolaborasi tanpa sekat.',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
      keahlian: ['Kepemimpinan', 'Arsitektur Sistem'],
    },
    {
      id: 2,
      nama: 'Sarah Amalia',
      jabatan: 'Sekretaris Wilayah',
      divisi: 'BPH',
      univ: 'Universitas Negeri Makassar',
      motto: 'Administrasi rapi, organisasi berlari.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
      keahlian: ['Manajemen', 'Kebijakan Publik'],
    },
    {
      id: 3,
      nama: 'Fajar Ramadhan',
      jabatan: 'Kabid Kominfo',
      divisi: 'Kominfo',
      univ: 'Universitas Tadulako',
      motto: 'Sampaikan pesan lewat visual dan teknologi.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      keahlian: ['Desain Grafis', 'Jaringan'],
    },
    {
      id: 4,
      nama: 'Dinda Lestari',
      jabatan: 'Kabid Pendidikan',
      divisi: 'Pendidikan',
      univ: 'Universitas Dayanu Ikhsanuddin',
      motto: 'Mencerdaskan mahasiswa IT di setiap pelosok wilayah.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      keahlian: ['Edukasi', 'Riset Teknologi'],
    },
  ];

  const dataFilter = pengurusData.filter(
    (p) =>
      (activeDivisi === 'Semua' || p.divisi === activeDivisi) &&
      (p.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.univ.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Dekorasi Latar Belakang */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50" />
      </div>

      {/* Bagian Hero */}
      <header className="relative pt-30 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-10 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md">
            <Fingerprint size={14} className="text-blue-500" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-400">
              Dewan Pengurus Resmi
            </span>
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] tracking-tighter mb-10">
            PROFIL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
              ORGANISASI
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic">
            "Membangun sinergi teknologi informasi demi mewujudkan kolaborasi
            mahasiswa IT yang progresif di wilayah Timur Indonesia."
          </p>
        </div>
      </header>

      {/* Filter & Pencarian */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-2 rounded-[2.5rem] backdrop-blur-3xl flex flex-col md:flex-row gap-4 items-center shadow-2xl">
          <div className="flex-1 w-full relative group">
            <Search
              className="absolute left-7 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Cari nama pengurus atau kampus..."
              className="w-full bg-transparent py-5 pl-16 pr-8 rounded-3xl outline-none text-white font-medium placeholder:text-slate-600"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 p-1 overflow-x-auto hide-scrollbar max-w-full md:max-w-lg">
            {divisiList.map((div) => (
              <button
                key={div}
                onClick={() => setActiveDivisi(div)}
                className={`px-7 py-4 rounded-2xl text-[10px] font-black uppercase transition-all whitespace-nowrap tracking-widest ${activeDivisi === div ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'}`}
              >
                {div}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Profil Pengurus */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataFilter.map((p, index) => (
            <div
              key={p.id}
              className={`group relative h-[550px] rounded-[3rem] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-700 shadow-2xl ${index % 3 === 1 ? 'lg:translate-y-16' : ''}`}
            >
              {/* Foto Profil */}
              <img
                src={p.img}
                alt={p.nama}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
              />

              {/* Overlay Gradien */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity" />

              {/* Detail Bagian Atas */}
              <div className="absolute top-10 left-10 right-10 flex justify-between items-start">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl group-hover:bg-blue-600 transition-colors duration-500">
                  {p.divisi === 'BPH' ? (
                    <Shield size={24} />
                  ) : (
                    <Zap size={24} />
                  )}
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500 mb-1">
                    Divisi
                  </div>
                  <div className="text-sm font-black tracking-tighter uppercase">
                    {p.divisi}
                  </div>
                </div>
              </div>

              {/* Detail Bagian Bawah */}
              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-3 flex items-center gap-2">
                  <Hash size={16} className="text-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {p.jabatan}
                  </span>
                </div>
                <h3 className="text-3xl font-black mb-1 group-hover:text-blue-400 transition-colors leading-none tracking-tight">
                  {p.nama}
                </h3>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-tight mb-6">
                  {p.univ}
                </p>

                {/* Keahlian / Tagar */}
                <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0">
                  {p.keahlian.map((k) => (
                    <span
                      key={k}
                      className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-[9px] font-black uppercase border border-white/10"
                    >
                      {k}
                    </span>
                  ))}
                </div>

                {/* Footer Interaksi */}
                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <div className="flex gap-5">
                    <Instagram
                      size={20}
                      className="text-slate-400 hover:text-pink-500 transition-colors cursor-pointer"
                    />
                    <Linkedin
                      size={20}
                      className="text-slate-400 hover:text-blue-500 transition-colors cursor-pointer"
                    />
                    <Mail
                      size={20}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                    />
                  </div>
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-xl -rotate-45 group-hover:rotate-0">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Branding & Statistik */}
      <footer className="relative z-10 bg-[#080808] border-t border-white/10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
            <div>
              <div className="text-7xl font-black text-blue-600 mb-6 italic tracking-tighter">
                14.
              </div>
              <h4 className="text-xl font-black uppercase tracking-tighter mb-4">
                Wilayah Koordinasi
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Mengawal aspirasi mahasiswa informatika di seluruh pelosok
                Sulawesi dan Gorontalo.
              </p>
            </div>
            <div>
              <div className="text-7xl font-black mb-6 tracking-tighter">
                50+
              </div>
              <h4 className="text-xl font-black uppercase tracking-tighter mb-4">
                Kampus Terdaftar
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Beranggotakan berbagai Universitas, Institut, dan Politeknik
                terbaik di Wilayah XIV.
              </p>
            </div>
            <div>
              <div className="text-7xl font-black mb-6 tracking-tighter">
                2025
              </div>
              <h4 className="text-xl font-black uppercase tracking-tighter mb-4">
                Visi Berkelanjutan
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Berfokus pada pengembangan talenta digital dan kontribusi nyata
                bagi masyarakat.
              </p>
            </div>
          </div>

          <div className="mt-20 flex justify-center gap-4 opacity-30 grayscale">
            <Globe size={24} />
            <span className="text-[10px] font-bold uppercase tracking-widest pt-1">
              Satu Tekad, Satu Tujuan, Satu Teknologi
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HalamanProfil;

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const GaleriParallax = () => {
  const [zoomId, setZoomId] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (zoomId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [zoomId]);

  const activities = [
    {
      id: 1,
      title: 'Musyawarah Wilayah XIV',
      desc: 'Konsolidasi akbar mahasiswa IT Sulawesi Tenggara untuk merancang arah organisasi ke depan.',
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Workshop Cloud Tech',
      desc: 'Bedah tuntas infrastruktur cloud modern bersama para ahli industri digital nasional.',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Inaugurasi Malam Puncak',
      desc: 'Perayaan solidaritas dan kreativitas tanpa batas bagi anggota baru Permikomnas.',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Seminar Karir Global',
      desc: 'Persiapan matang talenta lokal Bumi Anoa untuk bersaing di panggung teknologi dunia.',
      image:
        'https://images.unsplash.com/photo-1524178232363-1fb28f74b581?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const handleImageClick = (id) => {
    if (zoomId === id) {
      setZoomId(null);
    }
  };

  return (
    <main className="bg-black font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Bagian Intro */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        <div className="text-center z-10 px-6">
          <span className="text-xs font-black uppercase tracking-[0.8em] text-blue-600 mb-6 block">
            Permikomnas Wilayah XIV
          </span>
          <h1 className="text-6xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter text-slate-900 leading-[0.75]">
            ARSIP <br />
            <span className="italic text-slate-300">VISUAL.</span>
          </h1>
        </div>
      </section>

      {/* Bagian Galeri Sticky */}
      <div className="relative">
        {activities.map((item, index) => (
          <section
            key={item.id}
            className="sticky top-0 h-screen w-full flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            {/* Latar Belakang Gambar - Klik untuk menutup saat zoom */}
            <div
              onClick={() => handleImageClick(item.id)}
              className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                zoomId === item.id
                  ? 'fixed z-[100] top-0 left-0 w-full h-full cursor-zoom-out'
                  : 'w-full h-full cursor-default'
              }`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out pointer-events-none ${
                    zoomId === item.id ? 'scale-100' : 'scale-110'
                  }`}
                  style={{
                    transform:
                      zoomId === item.id
                        ? 'scale(1)'
                        : `scale(1.15) translateY(${(scrollY * 0.03) % 40}px)`,
                  }}
                />
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    zoomId === item.id
                      ? 'bg-transparent'
                      : 'bg-black/40 backdrop-grayscale-[0.5]'
                  }`}
                />
              </div>
            </div>

            {/* Konten Kartu Layer */}
            <div
              className={`relative z-10 w-full max-w-7xl px-6 transition-all duration-500 delay-100 ${
                zoomId === item.id
                  ? 'opacity-0 scale-95 translate-y-10 pointer-events-none'
                  : 'opacity-100 scale-100 translate-y-0'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-white/5">
                {/* Panel Info */}
                <div className="md:col-span-8 p-8 md:p-20 bg-slate-950/80 backdrop-blur-xl border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-blue-500 font-black text-2xl tracking-tighter">
                      #0{item.id}
                    </span>
                    <div className="h-[1px] w-16 md:w-20 bg-white/20"></div>
                  </div>

                  <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.8] mb-8 uppercase italic">
                    {item.title}
                  </h2>

                  <div className="flex mt-10">
                    <button
                      onClick={() => setZoomId(item.id)}
                      className="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 group shadow-xl"
                    >
                      Lihat Gambar{' '}
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>

                {/* Panel Samping Estetik */}
                <div className="md:col-span-4 bg-white hidden md:flex flex-col items-center justify-center p-12">
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 mb-8">
                    PERMIKOMNAS WILAYAH XIV
                  </div>
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200 rotate-12 hover:rotate-0 transition-transform duration-500">
                    <ArrowUpRight size={40} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Footer Navigasi Akhir */}
      <section className="relative z-[18] bg-white pt-32 pb-42 sm:pb-52 md:pb-62 px-6 rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 md:-mt-20 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
            <div>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8 uppercase">
                TELUSURI <br />{' '}
                <span className="text-blue-600 italic">ARSIP.</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl max-w-md mb-8 leading-relaxed font-medium">
                Dapatkan akses penuh ke seluruh dokumentasi dan laporan kegiatan
                resmi kami.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-6">
              <Link
                href="/web/dokumentasi"
                className="group relative inline-flex items-center gap-4 bg-slate-900 text-white px-8 md:px-12 py-6 md:py-8 rounded-full md:rounded-[2.5rem] overflow-hidden transition-all hover:bg-blue-600 shadow-2xl"
              >
                <span className="relative z-10 text-lg font-black uppercase tracking-widest">
                  Menuju Dokumentasi
                </span>
                <ArrowUpRight
                  className="relative z-10 group-hover:rotate-45 transition-transform duration-500"
                  size={32}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GaleriParallax;

import React, { useState, useMemo } from 'react';
import { X, Download, Info } from 'lucide-react';

/**
 * Pinterest Documentation - Update:
 * 1. Menghapus bar pencarian "Cari dokumentasi kegiatan".
 * 2. Header dibuat lebih bersih dan minimalis.
 * 3. Tetap mempertahankan kategori wrap (tanpa scroll horizontal).
 */

const HalamanDokumentasi = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('Semua');

  // Konfigurasi Warna
  const colors = {
    primary: 'bg-[#FAFAFA]', // Light
    accent: 'bg-[#1A1A1A]',  // Dark
    secondary: 'bg-[#2563EB]', // Blue
    textDark: 'text-[#1A1A1A]',
    textLight: 'text-white',
    border: 'border-[#E5E7EB]'
  };

  const galleryData = [
    { id: 1, title: "Rapat Koordinasi Wilayah", category: "Internal", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[3/4]" },
    { id: 2, title: "Workshop Desain UI/UX", category: "Edukasi", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[1/1]" },
    { id: 3, title: "Malam Keakraban Anggota", category: "Sosial", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[4/5]" },
    { id: 4, title: "Seminar Nasional Teknologi", category: "Edukasi", image: "https://images.unsplash.com/photo-1475721027785-f74dea327912?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[3/2]" },
    { id: 5, title: "Kunjungan Industri Digital", category: "Eksternal", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[4/3]" },
    { id: 6, title: "Peluncuran Aplikasi Wilayah", category: "Teknis", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[3/5]" },
    { id: 7, title: "Diskusi Panel Masa Depan IT", category: "Edukasi", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[1/1]" },
    { id: 8, title: "Gathering Akhir Tahun", category: "Sosial", image: "https://images.unsplash.com/photo-1514525253344-48568341e04f?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[2/3]" },
    { id: 9, title: "Pelatihan Keamanan Siber", category: "Teknis", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[4/5]" },
    { id: 10, title: "Penyusunan AD/ART Baru", category: "Internal", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[3/2]" },
  ];

  const categories = ['Semua', 'Internal', 'Edukasi', 'Sosial', 'Eksternal', 'Teknis'];

  const filteredData = useMemo(() => {
    return galleryData.filter(item => filter === 'Semua' || item.category === filter);
  }, [filter]);

  return (
    <div className={`min-h-screen ${colors.primary} font-sans pb-20`}>
      {/* Header Tanpa Search Bar */}
      <header className={`sticky top-0 z-40 ${colors.accent} ${colors.textLight} px-6 py-5 shadow-xl`}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-center">
          <div className="flex items-center flex-wrap justify-center gap-3">
            <div className={`px-10 h-10 rounded-xl ${colors.secondary} flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/20`}>
              Permikomnas Wilayah XIV
            </div>
            <h1 className="font-bold text-xl tracking-tight">Dokumentasi<span className="text-blue-400">Kegiatan</span></h1>
          </div>
        </div>
      </header>

      {/* Filter Bar - Wrapped (No Horizontal Scroll) */}
      <div className="max-w-[1600px] mx-auto px-6 py-8 flex flex-wrap justify-center items-center gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
              filter === cat 
                ? `${colors.secondary} text-white shadow-md shadow-blue-500/20` 
                : `bg-white ${colors.textDark} border ${colors.border} hover:border-blue-300 hover:shadow-sm`
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Grid Content */}
      <main className="max-w-[1600px] mx-auto px-6">
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
          {filteredData.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid group cursor-zoom-in relative rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className={`w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 ${item.aspect}`}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[10px] text-blue-400 font-black uppercase tracking-tighter mb-1">{item.category}</span>
                    <p className="text-white text-sm font-bold truncate leading-tight">{item.title}</p>
                  </div>
                  <div className={`${colors.secondary} p-2.5 rounded-xl text-white shadow-lg shrink-0`}>
                    <Download size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Detail */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-sm" />
          
          <div 
            className="relative w-full max-w-5xl h-fit max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-3/5 bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="md:w-2/5 p-8 flex flex-col">
              <div className="flex justify-end mb-6">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="p-3 rounded-full hover:bg-slate-100 transition-colors text-slate-400"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-1.5 h-5 bg-blue-600 rounded-full" />
                   <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                    {selectedImage.category}
                  </span>
                </div>
                
                <h2 className={`text-2xl font-black leading-tight mb-4 ${colors.textDark}`}>
                  {selectedImage.title}
                </h2>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Dokumentasi arsip resmi wilayah. Visual ini disediakan untuk keperluan publikasi dan dokumentasi sejarah kegiatan organisasi.
                </p>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-8">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <Info size={14} className="text-blue-500" />
                    <span>Metadata: High Resolution Archive</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <button className={`w-full ${colors.secondary} py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all`}>
                  <Download size={18} />
                  Download Foto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HalamanDokumentasi;
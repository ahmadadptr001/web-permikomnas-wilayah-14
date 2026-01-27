'use client';
import React, { useState } from 'react';
import { 
  Newspaper, 
  Clock, 
  ArrowUpRight, 
  ChevronRight, 
  TrendingUp, 
  BookOpen,
  Hash,
  Share2,
  Bookmark
} from 'lucide-react';

/**
 * Komponen Berita (News & Blog Section)
 * Desain: Modern, Kompleks, namun Ringkas (Small Card Style)
 * Fitur: Berita Terbaru & Link ke Blog Utama
 */

export default function Blog() {
  const [activeTab, setActiveTab] = useState('Terbaru');

  const newsData = [
    {
      id: 1,
      title: "Transformasi Digital Sulawesi Tenggara: Peluang Mahasiswa IT",
      excerpt: "Bagaimana peran mahasiswa komputer dalam mendukung percepatan ekonomi digital di pelosok Sultra...",
      date: "2 jam yang lalu",
      category: "Teknologi",
      author: "Admin Wilayah",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      tag: "Trending"
    },
    {
      id: 2,
      title: "Persiapan Rakorwil XIV: Sinergi Himpunan Se-Sultra",
      excerpt: "Pertemuan koordinasi antara ketua himpunan mahasiswa komputer untuk menyusun program kerja tahunan...",
      date: "5 jam yang lalu",
      category: "Organisasi",
      author: "Sekretaris",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      tag: "Penting"
    },
    {
      id: 3,
      title: "Mengenal AI Agent: Masa Depan Pengembangan Perangkat Lunak",
      excerpt: "Eksplorasi penggunaan AI dalam workflow pengembangan aplikasi modern bagi pemula...",
      date: "1 hari yang lalu",
      category: "Edukasi",
      author: "Dev Team",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      tag: "Wawasan"
    }
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-20 px-6 md:px-12 font-sans border-t border-slate-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest border border-indigo-100 dark:border-indigo-500/20">
              <TrendingUp size={14} />
              Info Terkini
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Kabar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Permikomnas.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
              Update berita terbaru seputar dunia IT, kegiatan organisasi, dan pencapaian mahasiswa di Wilayah XIV.
            </p>
          </div>

          <div className="flex items-center gap-4">
             <a 
              href="/blog" 
              className="group flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-xs font-bold transition-all hover:shadow-xl active:scale-95"
            >
              Jelajahi Blog Utama
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* --- Featured News (Kiri - Ukuran Menengah) --- */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {newsData.slice(0, 2).map((news) => (
              <div key={news.id} className="group flex flex-col bg-slate-50 dark:bg-white/5 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase text-blue-600">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    <div className="flex items-center gap-2">
                      <Clock size={12} />
                      {news.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Hash size={12} className="text-blue-500" />
                      {news.tag}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2">
                    {news.excerpt}
                  </p>
                  
                  <div className="pt-4 mt-auto flex items-center justify-between border-t border-slate-200 dark:border-white/5">
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">By {news.author}</span>
                    <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                      <Bookmark size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- Sidebar News (Kanan - List Style Ringkas) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform">
                <Newspaper size={120} />
              </div>
              <h4 className="text-lg font-black mb-2 relative z-10 uppercase tracking-tighter">Berlangganan Newsletter</h4>
              <p className="text-blue-100 text-[10px] mb-4 relative z-10 leading-relaxed">Dapatkan ringkasan berita IT Sultra langsung ke email kamu setiap minggu.</p>
              <div className="flex gap-2 relative z-10">
                <input 
                  type="text" 
                  placeholder="Email..." 
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-xs w-full outline-none focus:bg-white/20" 
                />
                <button className="p-2 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                <BookOpen size={14} /> Berita Lainnya
              </h4>
              {newsData.slice(2, 3).map((item) => (
                <div key={item.id} className="group p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl flex gap-4 hover:border-blue-500/30 transition-all cursor-pointer">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={item.image} className="w-full h-full object-cover" alt="Thumb" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">{item.category}</p>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600">
                      {item.title}
                    </h5>
                    <p className="text-[10px] text-slate-400">{item.date}</p>
                  </div>
                </div>
              ))}
              
              <a 
                href="/blog" 
                className="flex items-center justify-between w-full p-4 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest">Lihat Semua Tulisan</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* --- Footer Note / Hyperlink --- */}
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 font-medium italic">
              "Menulis adalah cara terbaik untuk mendokumentasikan inovasi."
            </p>
          </div>
          
          <div className="flex items-center gap-4">
             <button className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 hover:text-blue-600 transition-colors">
               <Share2 size={16} />
             </button>
             <p className="text-xs text-slate-500">
               Ingin berkontribusi artikel? <a href="/kontak" className="text-blue-600 font-bold hover:underline">Hubungi Redaksi</a>
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
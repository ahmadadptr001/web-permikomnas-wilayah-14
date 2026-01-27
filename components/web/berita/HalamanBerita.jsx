import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  ArrowRight, 
  ChevronRight,
  Clock,
  Tag, 
  Share2, 
  Bookmark, 
  TrendingUp, 
  MessageSquare, 
  X 
} from 'lucide-react';

/**
 * HalamanBerita Component - Permikomnas Wilayah XIV
 * Versi Responsif: Mengoptimalkan tata letak kartu agar lebih seimbang di semua perangkat.
 */

const HalamanBerita = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Teknologi', 'Organisasi', 'Event', 'Pendidikan', 'Opini'];
  
  const newsData = [
    {
      id: 1,
      title: "Rapat Kerja Wilayah XIV Permikomnas di Kendari",
      excerpt: "Pembahasan mendalam mengenai program kerja setahun ke depan untuk memajukan potensi mahasiswa IT di Bumi Anoa agar lebih kompetitif secara nasional.",
      category: "Organisasi",
      author: "Admin P14",
      date: "25 Jan 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      featured: true,
      comments: 12
    },
    {
      id: 2,
      title: "Tren AI di Tahun 2026: Apa yang Harus Dipelajari Mahasiswa?",
      excerpt: "Eksplorasi mendalam mengenai perkembangan kecerdasan buatan, Large Language Models, dan dampaknya bagi kurikulum informatika di Sultra.",
      category: "Teknologi",
      author: "Budi Santoso",
      date: "24 Jan 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      featured: false,
      comments: 8
    },
    {
      id: 3,
      title: "Workshop Cyber Security bagi Pemula",
      excerpt: "Permikomnas bekerja sama dengan praktisi keamanan siber untuk mengadakan pelatihan intensif mengenai Ethical Hacking dan pertahanan data.",
      category: "Event",
      author: "Tim Event",
      date: "22 Jan 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      featured: false,
      comments: 5
    },
    {
      id: 4,
      title: "Lomba Coding Nasional: Pendaftaran Dibuka",
      excerpt: "Ajang bergengsi bagi pengembang muda untuk menunjukkan bakat dalam memecahkan masalah kompleks menggunakan teknologi terkini.",
      category: "Event",
      author: "Sekretariat",
      date: "20 Jan 2026",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
      featured: false,
      comments: 15
    },
    {
      id: 5,
      title: "Beasiswa S2 Luar Negeri untuk Lulusan IT Sultra",
      excerpt: "Informasi lengkap mengenai persyaratan, tips esai, dan strategi lolos seleksi beasiswa khusus rumpun informatika untuk universitas top dunia.",
      category: "Pendidikan",
      author: "Divisi Pendidikan",
      date: "18 Jan 2026",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=800",
      featured: false,
      comments: 20
    }
  ];

  const filteredNews = useMemo(() => {
    return newsData.filter(news => {
      const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'Semua' || news.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20 selection:bg-blue-100 selection:text-blue-700">
      {/* Header Responsif */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest overflow-x-auto whitespace-nowrap pb-1 sm:pb-0">
              <a href="/web" className="hover:text-blue-600 transition-colors">Beranda</a>
              <ChevronRight size={10} className="opacity-50" />
              <span className="text-blue-600">Berita</span>
            </nav>
            
            <div className="relative group w-full sm:w-[320px] md:w-[400px]">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="text-slate-400 group-focus-within:text-blue-600 transition-colors" size={16} />
              </div>
              <input 
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 rounded-xl outline-none transition-all text-sm font-medium"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mt-8 lg:mt-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <div className="flex-1 min-w-0">
            {/* Kategori Horizontal Scroll pada Mobile */}
            <div className="mb-8 overflow-x-auto no-scrollbar pb-2">
              <div className="flex items-center gap-2 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      activeCategory === cat 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-600" />
                {activeCategory === 'Semua' ? 'Terbaru' : activeCategory}
              </h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{filteredNews.length} Artikel</p>
            </div>

            {/* Grid Kartu Berita */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredNews.length > 0 ? (
                filteredNews.map((news, index) => {
                  const isFirst = index === 0;
                  return (
                    <article 
                      key={news.id} 
                      className={`group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${
                        isFirst ? 'md:col-span-2 md:flex-row' : ''
                      }`}
                    >
                      {/* Container Gambar yang diperkecil proporsinya */}
                      <div className={`relative overflow-hidden shrink-0 ${
                        isFirst ? 'h-56 sm:h-64 md:h-auto md:w-2/5 lg:w-1/3' : 'h-48 sm:h-56'
                      }`}>
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                        <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md text-blue-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-white/50">
                          {news.category}
                        </span>
                      </div>
                      
                      <div className={`p-6 flex flex-col flex-1 ${isFirst ? 'md:p-8 lg:p-10 justify-center' : ''}`}>
                        <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-slate-400 uppercase">
                          <span className="flex items-center gap-1"><User size={12} className="text-blue-500" /> {news.author}</span>
                          <span className="text-slate-200">•</span>
                          <span>{news.date}</span>
                        </div>
                        
                        <h3 className={`${isFirst ? 'text-xl md:text-2xl' : 'text-lg'} font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight`}>
                          {news.title}
                        </h3>
                        
                        <p className={`text-slate-500 font-medium leading-relaxed mb-6 ${isFirst ? 'text-sm md:text-base line-clamp-2 md:line-clamp-3' : 'text-xs line-clamp-2'}`}>
                          {news.excerpt}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 text-slate-400">
                             <div className="flex items-center gap-1 text-[10px] font-black uppercase">
                               <MessageSquare size={14} className="text-slate-300" /> {news.comments}
                             </div>
                             <div className="h-3 w-[1px] bg-slate-100"></div>
                             <button className="hover:text-blue-600 transition-colors"><Bookmark size={16} /></button>
                          </div>
                          <button className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-wider group/btn">
                            Selengkapnya <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Tidak ada hasil ditemukan</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar yang juga responsif */}
          <aside className="lg:w-[320px] xl:w-[360px] space-y-8">
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl shadow-slate-900/10">
              <div className="relative z-10">
                <h3 className="text-xl font-black mb-3">Newsletter</h3>
                <p className="text-slate-400 text-xs font-medium mb-6">Info IT mingguan langsung ke email Anda.</p>
                <div className="flex flex-col gap-3">
                  <input type="email" placeholder="Email Anda" className="px-4 py-3 bg-white/10 border border-white/10 rounded-xl outline-none text-xs" />
                  <button className="w-full py-3 bg-blue-600 text-white font-black rounded-xl text-xs hover:bg-blue-500">DAFTAR</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-6 border border-slate-200">
              <h3 className="text-sm font-black text-slate-900 mb-6 uppercase tracking-wider">Populer</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-center">
                    <div className="w-16 h-16 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden">
                      <img src={`https://picsum.photos/id/${i+10}/100/100`} alt="thumb" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                        {i === 1 ? "Tips Coding Efektif untuk Mahasiswa Baru" : i === 2 ? "Roadmap Menjadi DevOps di Tahun 2026" : "Eksplorasi Framework Modern"}
                      </h4>
                      <span className="text-[9px] text-slate-400 font-bold uppercase mt-1 block">2 Jam Lalu</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HalamanBerita;
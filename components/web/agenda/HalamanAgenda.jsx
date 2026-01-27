import React, { useState, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  Users, 
  Search, 
  ArrowUpRight,
  AlertCircle,
  LayoutGrid,
  List
} from 'lucide-react';
import { routerServerGlobal } from 'next/dist/server/lib/router-utils/router-server-context';
import { useRouter } from 'next/navigation';

/**
 * HalamanAgenda Component - Permikomnas Wilayah XIV
 * Refactor: Small UI/UX Version.
 * Fokus pada efisiensi ruang, tipografi yang proporsional, dan elemen yang lebih ringkas.
 */

const HalamanAgenda = () => {
  const router = useRouter();
  const [viewType, setViewType] = useState('grid'); 
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const statusOptions = ['Semua', 'Akan Datang', 'Sedang Berlangsung', 'Selesai'];

  const agendaData = [
    {
      id: 1,
      title: "Musyawarah Wilayah XIV",
      description: "Pertemuan tahunan pemilihan koordinator wilayah baru dan penyusunan GBHO.",
      date: "12 Feb 2026",
      time: "08:00 WITA",
      location: "UHO, Kendari",
      status: "Akan Datang",
      category: "Organisasi",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Workshop Cloud & DevOps",
      description: "Latihan intensif infrastruktur AWS dan implementasi CI/CD.",
      date: "28 Jan 2026",
      time: "09:00 WITA",
      location: "Lab Terpadu",
      status: "Sedang Berlangsung",
      category: "Akademik",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Seminar Karir Software Engineer",
      description: "Sesi sharing pakar industri mengenai persiapan karir dan trend IT.",
      date: "05 Feb 2026",
      time: "13:30 WITA",
      location: "Zoom Meeting",
      status: "Akan Datang",
      category: "Seminar",
      image: "https://images.unsplash.com/photo-1475721027187-402ad75d1e20?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "E-Sport Mobile Legends P14",
      description: "Ajang silaturahmi mahasiswa IT se-wilayah XIV melalui kompetisi game.",
      date: "20 Jan 2026",
      time: "10:00 WITA",
      location: "Gedung Pemuda",
      status: "Selesai",
      category: "Hiburan",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredAgenda = useMemo(() => {
    return agendaData.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'Semua' || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Akan Datang': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Sedang Berlangsung': return 'bg-emerald-50 text-emerald-600 border-emerald-100 animate-pulse';
      case 'Selesai': return 'bg-slate-50 text-slate-500 border-slate-100';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-12">
      {/* Small Hero Section */}
      <div className="relative pt-12 pb-24 px-4 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600" 
            alt="Hero Tech" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Agenda <span className="text-blue-500">Permikomnas Wilayah XIV</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto font-medium">
            Jadwal kegiatan strategis Wilayah XIV.
          </p>
        </div>
      </div>

      {/* Compact Control Panel */}
      <div className="container mx-auto max-w-5xl px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-4 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Cari kegiatan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/10 border border-transparent focus:border-blue-500/20 transition-all text-sm font-medium"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex bg-slate-100 p-1 rounded-xl overflow-x-auto no-scrollbar flex-1">
              {statusOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => setStatusFilter(opt)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${
                    statusFilter === opt ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
              <button onClick={() => setViewType('grid')} className={`p-1.5 rounded-lg ${viewType === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}>
                <LayoutGrid size={16} />
              </button>
              <button onClick={() => setViewType('list')} className={`p-1.5 rounded-lg ${viewType === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}>
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Grid */}
      <div className="container mx-auto max-w-5xl px-4 mt-12">
        <div className={`grid gap-5 ${viewType === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredAgenda.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all flex flex-col ${
                viewType === 'list' ? 'md:flex-row h-auto' : ''
              }`}
            >
              <div className={`relative shrink-0 ${viewType === 'list' ? 'md:w-56' : 'h-44'}`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider border backdrop-blur-md ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="text-[9px] font-black uppercase text-blue-600 tracking-tighter bg-blue-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">{item.title}</h3>
                <p className="text-slate-500 text-xs font-medium mb-4 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                    <CalendarIcon size={14} className="text-blue-500" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                    <MapPin size={14} className="text-blue-500" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${item.id}${i}`} alt="u" />
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-900 hover:text-blue-600 transition-colors">
                    Detail <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAgenda.length === 0 && (
          <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200">
            <AlertCircle size={32} className="mx-auto text-slate-300 mb-4" />
            <p className="text-slate-500 text-sm font-bold">Tidak ada agenda ditemukan.</p>
          </div>
        )}
      </div>

      {/* Small Footer CTA */}
      <div className="container mx-auto max-w-5xl px-4 mt-16 text-center">
        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-xl font-black mb-2">Ingin Kolaborasi?</h2>
          <p className="text-blue-100 text-xs mb-6 opacity-80">Hubungi kami untuk ide kegiatan IT lainnya.</p>
          <button onClick={() => router.push('/web/kontak')} className="px-6 py-2.5 bg-white text-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-slate-50 transition-all">
            Kontak Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default HalamanAgenda;
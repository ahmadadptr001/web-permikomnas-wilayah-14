'use client'
import React, { useState, useMemo } from 'react';
import { 
  CheckCheck, 
  Trash2, 
  Info, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  MoreHorizontal, 
  Search,
  ArrowLeft,
  Settings,
  Star,
  X,
  BellOff,
  BellRing,
  History,
  Download,
  ShieldAlert
} from 'lucide-react';

/**
 * HalamanNotifikasi Component
 * Perbaikan: Menghapus potensi referensi variabel yang tidak terdefinisi
 * dan memastikan kompatibilitas dengan lingkungan runtime.
 */

const HalamanNotifikasi = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  // Data dummy notifikasi
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'Info',
      title: 'Muswil XIV Dimulai Besok',
      message: 'Persiapkan diri Anda untuk Musyawarah Wilayah XIV yang akan diadakan di UHO Kendari pukul 08:00 WITA.',
      time: '10 Menit yang lalu',
      isRead: false,
      isPinned: true,
      category: 'Kegiatan'
    },
    {
      id: 2,
      type: 'Peringatan',
      title: 'Deadline Pendaftaran Workshop',
      message: 'Pendaftaran Workshop Cloud & DevOps akan ditutup dalam 3 jam. Segera selesaikan pembayaran Anda.',
      time: '2 Jam yang lalu',
      isRead: false,
      isPinned: false,
      category: 'Penting'
    },
    {
      id: 3,
      type: 'Sukses',
      title: 'Pembayaran Dikonfirmasi',
      message: 'Pembayaran untuk Seminar Karir Software Engineer telah berhasil dikonfirmasi. Tiket dikirim ke email.',
      time: '5 Jam yang lalu',
      isRead: true,
      isPinned: false,
      category: 'Transaksi'
    },
    {
      id: 4,
      type: 'Info',
      title: 'Update Anggaran Divisi',
      message: 'Bendahara Wilayah telah mengunggah laporan keuangan terbaru untuk bulan Januari 2026.',
      time: '1 Hari yang lalu',
      isRead: true,
      isPinned: false,
      category: 'Internal'
    }
  ]);

  const filteredNotifications = useMemo(() => {
    return notifications.filter(n => {
      const searchLower = searchQuery.toLowerCase();
      return n.title.toLowerCase().includes(searchLower) || 
             n.message.toLowerCase().includes(searchLower);
    });
  }, [notifications, searchQuery]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    setIsSidebarOpen(false);
  };

  const deleteAllNotifications = () => {
    // Menggunakan UI internal jika memungkinkan, namun window.confirm tetap bisa digunakan di luar iframe
    if (typeof window !== 'undefined' && window.confirm("Apakah Anda yakin ingin menghapus semua notifikasi?")) {
      setNotifications([]);
      setIsSidebarOpen(false);
    }
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const toggleRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isRead: !n.isRead } : n
    ));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'Sukses': return <CheckCircle2 className="text-emerald-500" size={18} />;
      case 'Peringatan': return <AlertCircle className="text-amber-500" size={18} />;
      default: return <Info className="text-blue-500" size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-12 transition-all overflow-x-hidden">
      
      {/* Overlay Sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Pengaturan */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out p-6 flex flex-col ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-black uppercase tracking-tight">Pengaturan</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-8 flex-1 overflow-y-auto">
          <section>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4 ml-1">Kontrol Notifikasi</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-1">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl transition-colors ${isMuted ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                    {isMuted ? <BellOff size={18} /> : <BellRing size={18} />}
                  </div>
                  <div>
                    <p className="text-xs font-bold">Bisukan Notifikasi</p>
                    <p className="text-[10px] text-slate-400 font-medium">Jangan munculkan pop-up</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className={`w-10 h-5 rounded-full transition-colors relative ${isMuted ? 'bg-blue-600' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 ${isMuted ? 'left-[60%]' : 'left-1'}`}></div>
                </button>
              </div>

              <button 
                onClick={deleteAllNotifications}
                className="w-full flex items-center gap-3 p-3.5 bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-red-600 rounded-2xl transition-all text-sm font-bold border border-transparent hover:border-red-100"
              >
                <Trash2 size={18} /> Bersihkan Riwayat
              </button>
            </div>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4 ml-1">Fungsi Lainnya</p>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-2xl transition-all text-sm font-bold border border-transparent">
                <div className="flex items-center gap-3">
                  <Download size={18} className="text-slate-400" />
                  <span>Ekspor Data Pesan</span>
                </div>
                <span className="text-[10px] text-slate-400 font-black">CSV</span>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-2xl transition-all text-sm font-bold border border-transparent">
                <ShieldAlert size={18} className="text-slate-400" />
                <span>Lapor Masalah Sistem</span>
              </button>
            </div>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <button 
            onClick={markAllAsRead}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <CheckCheck size={14} /> Tandai Semua Dibaca
          </button>
        </div>
      </div>

      {/* Header Utama */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto max-w-3xl px-4 py-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => typeof onBack === 'function' ? onBack() : window.history.back()}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-xl font-black tracking-tight">Notifikasi</h1>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500"
            >
              <Settings size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Cari dalam pesan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-blue-500/20 rounded-2xl outline-none text-sm font-semibold transition-all"
              />
            </div>
            
            <div className="flex justify-between items-center px-1">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                {filteredNotifications.length} Pesan ditemukan
              </p>
              <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest">
                {isMuted ? 'Mode Senyap Aktif' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* List Notifikasi */}
      <div className="container mx-auto max-w-3xl px-4 mt-6 sm:mt-8">
        <div className="space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((n) => (
              <div 
                key={n.id}
                className={`group relative bg-white rounded-[2rem] sm:rounded-3xl p-4 sm:p-5 border transition-all hover:shadow-md sm:hover:shadow-lg ${
                  !n.isRead ? 'border-blue-100 bg-blue-50/20 shadow-sm' : 'border-slate-100 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                  <div className="flex items-center sm:items-start justify-between sm:justify-start">
                    <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center ${
                      !n.isRead ? 'bg-white shadow-inner border border-blue-50' : 'bg-slate-50'
                    }`}>
                      {getIcon(n.type)}
                    </div>
                    <span className="sm:hidden text-[9px] font-bold text-slate-400 flex items-center gap-1">
                      <Clock size={10} /> {n.time}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2 min-w-0 pr-6 sm:pr-0">
                        <h3 className={`text-sm font-bold truncate ${!n.isRead ? 'text-slate-900' : 'text-slate-600'}`}>
                          {n.title}
                        </h3>
                        {n.isPinned && <Star size={12} className="text-amber-400 fill-amber-400 shrink-0" />}
                      </div>
                      <span className="hidden sm:flex text-[10px] font-bold text-slate-400 whitespace-nowrap items-center gap-1">
                        <Clock size={10} /> {n.time}
                      </span>
                    </div>
                    
                    <p className={`text-[12px] sm:text-[13px] leading-relaxed mb-4 ${!n.isRead ? 'text-slate-700 font-semibold' : 'text-slate-500 font-medium'}`}>
                      {n.message}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-500 rounded-lg text-[9px] font-black uppercase tracking-wider">
                        {n.category}
                      </span>
                      
                      <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => toggleRead(n.id)}
                          className="p-2 bg-slate-50 sm:bg-transparent hover:bg-blue-50 rounded-xl text-slate-400 hover:text-blue-600 transition-colors"
                        >
                          <CheckCheck size={18} />
                        </button>
                        <button 
                          onClick={() => deleteNotification(n.id)}
                          className="p-2 bg-slate-50 sm:bg-transparent hover:bg-red-50 rounded-xl text-slate-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                        <button className="p-2 bg-slate-50 sm:bg-transparent hover:bg-slate-100 rounded-xl text-slate-400 transition-colors">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {!n.isRead && (
                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-blue-600 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="py-20 sm:py-24 text-center bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-dashed border-slate-200 px-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                <Search size={28} />
              </div>
              <h3 className="text-slate-900 font-bold">Pesan tidak ditemukan</h3>
              <p className="text-slate-500 text-sm font-medium">Coba gunakan kata kunci lain.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HalamanNotifikasi;
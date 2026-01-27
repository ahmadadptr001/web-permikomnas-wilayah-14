'use client'
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  User, 
  ArrowLeft,
  MapPin,
  Globe
} from 'lucide-react';

/**
 * HalamanKontak Component
 * Sebuah file mandiri (standalone) untuk halaman kontak Permikomnas Wilayah XIV.
 * Memiliki fitur feedback pengiriman pesan dan desain yang small/compact.
 */

const HalamanKontak = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman data
    console.log("Pesan dikirim:", formData);
    setSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 font-sans">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 text-center max-w-md w-full transition-all animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Send size={32} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Pesan Terkirim!</h2>
          <p className="text-slate-500 mb-8 text-sm font-medium leading-relaxed">
            Terima kasih telah menghubungi kami. Tim Permikomnas P14 akan segera menanggapi melalui email Anda.
          </p>
          <button 
            onClick={() => typeof onBack === 'function' ? onBack() : window.history.back()}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-12 transition-all">
      {/* Small Header Section */}
      <div className="bg-slate-900 pt-12 pb-24 px-4 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <button 
            onClick={() => typeof onBack === 'function' ? onBack() : window.history.back()}
            className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={14} /> Kembali
          </button>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">
            Hubungi <span className="text-blue-500">Kami</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-lg font-medium leading-relaxed">
            Punya pertanyaan seputar agenda atau ingin berkolaborasi? Kami siap membantu Anda.
          </p>
        </div>
      </div>

      {/* Form & Info Section */}
      <div className="container mx-auto max-w-4xl px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Sidebar Info (Lg: 4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-6 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 group hover:border-blue-500/30 transition-all">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <h3 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-1">Email Resmi</h3>
              <p className="text-slate-500 text-[13px] font-semibold break-all">p14@permikomnas.org</p>
            </div>

            <div className="bg-white p-6 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 group hover:border-indigo-500/30 transition-all">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <h3 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-1">WhatsApp</h3>
              <p className="text-slate-500 text-[13px] font-semibold">+62 812-4000-xxxx</p>
            </div>

            <div className="bg-white p-6 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 group hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe size={18} />
              </div>
              <h3 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-1">Wilayah Kerja</h3>
              <p className="text-slate-500 text-[13px] font-semibold">Sulawesi Tenggara</p>
            </div>
          </div>

          {/* Main Contact Form (Lg: 8 columns) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.15em] ml-1">Nama Lengkap</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={16} />
                      <input 
                        required 
                        name="nama"
                        type="text" 
                        value={formData.nama}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border-transparent border-2 focus:border-blue-500/20 focus:bg-white rounded-2xl outline-none transition-all text-sm font-semibold" 
                        placeholder="Nama Anda" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.15em] ml-1">Email Aktif</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={16} />
                      <input 
                        required 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border-transparent border-2 focus:border-blue-500/20 focus:bg-white rounded-2xl outline-none transition-all text-sm font-semibold" 
                        placeholder="email@contoh.com" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.15em] ml-1">Pesan / Kolaborasi</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <textarea 
                      required 
                      name="pesan"
                      rows="5" 
                      value={formData.pesan}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border-transparent border-2 focus:border-blue-500/20 focus:bg-white rounded-2xl outline-none transition-all text-sm font-semibold resize-none" 
                      placeholder="Apa yang bisa kami bantu?"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 active:scale-95 mt-4"
                >
                  Kirim Sekarang <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanKontak;
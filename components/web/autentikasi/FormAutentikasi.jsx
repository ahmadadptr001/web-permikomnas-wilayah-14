'use client';
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Rocket, 
  Mail, 
  Lock, 
  User, 
  Sparkles,
  Chrome,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';

/**
 * Halaman Autentikasi Split-Screen Fullscreen (V2)
 * Fokus: Visual gambar murni di kiri, form ultra-clean di kanan.
 * Responsivitas: Dioptimalkan untuk semua ukuran layar.
 */

export default function AuthPage() {
  const searchParams = useSearchParams()
  const isLoginParams = searchParams.get('isLogin') ?? false
  const [isLogin, setIsLogin] = useState(isLoginParams);

  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* --- SECTION KIRI: Visual & Branding (Gambar Dominan) --- */}
      <div className="relative hidden md:flex md:w-[55%] min-h-screen overflow-hidden">
        {/* Background Image - Gambar Mahasiswa/Teknologi yang Relevan */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
            alt="Kolaborasi Inovasi" 
            className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
          />
          {/* Overlay Gradient Halus - Menjaga keterbacaan teks tanpa mencolok */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col gap-20 p-16 ">
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-white/80 hover:text-white transition-all w-fit "
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Beranda</span>
          </button>

          <div className="max-w-xl space-y-6 animate-in slide-in-from-left duration-1000">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <span className="text-sm font-black text-white tracking-[0.3em] uppercase">Permikomnas Wilayah XIV</span>
            </div>
            
            <h1 className="text-7xl font-black text-white leading-[0.9] tracking-tighter">
              SATUKAN <br />
              <span className="text-blue-500">INOVASI.</span>
            </h1>
            
            <p className="text-xl text-slate-200 leading-relaxed font-medium">
              Bergabunglah dengan ribuan mahasiswa informatika Sulawesi Tenggara dalam membangun ekosistem digital yang berkelanjutan.
            </p>

            <div className="flex gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-black text-white">14</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Wilayah Sultra</p>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-white">2.5k+</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Anggota Aktif</p>
              </div>
            </div>
          </div>
          
          <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.5em]">
            Digital Transformation • Collaboration • Innovation
          </div>
        </div>
      </div>

      {/* --- SECTION KANAN: Form (Clean & Minimalist) --- */}
      <div className="flex-1 min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-8 md:p-16 relative">
        
        {/* Tombol Toggle Mobile */}
        <div className="md:hidden absolute top-8 right-8 z-20 bg-white/90">
          <button 
            onClick={toggleAuth}
            className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400"
          >
            {isLogin ? 'Daftar' : 'Masuk'}
          </button>
        </div>

        <div className="w-full max-w-sm space-y-12 animate-in fade-in zoom-in-95 duration-700">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              {isLogin ? 'Selamat Datang' : 'Buat Akun'}
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              {isLogin 
                ? 'Portal Inovasi PERMIKOMNAS Wilayah XIV. Silakan masuk untuk melanjutkan.' 
                : 'Mulailah perjalanan Anda sebagai bagian dari inovator digital Sultra.'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-5">
              {!isLogin && (
                <div className="space-y-1.5 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Contoh: Muhammad Inovator"
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input 
                    type="email" 
                    placeholder="nama@email.com"
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-[10px] font-black text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest">Lupa Password?</button>
              </div>
            )}

            <button className="w-full group relative overflow-hidden px-8 py-4.5 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:scale-[1.02] active:scale-95 shadow-xl flex items-center justify-center gap-3">
              {isLogin ? 'Masuk Portal' : 'Bergabung Sekarang'} 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Social Sign In */}
          <div className="space-y-4 pt-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100 dark:border-white/5"></div></div>
              <span className="relative px-4 bg-white dark:bg-slate-950 text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Social Login</span>
            </div>

            <button className="w-full flex items-center justify-center gap-4 px-8 py-4 bg-white border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl text-slate-900 dark:text-white text-xs font-black transition-all transform active:scale-95 shadow-sm">
              <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" width={18} alt="Google" />
              Lanjut dengan Google
            </button>
          </div>

          {/* Footer Toggle */}
          <div className="text-center">
            <p className="text-xs text-slate-500 font-medium">
              {isLogin ? 'Belum punya akun?' : 'Sudah terdaftar?'} {' '}
              <button 
                onClick={toggleAuth}
                className="text-blue-600 font-black uppercase tracking-widest hover:underline ml-1"
              >
                {isLogin ? 'Daftar' : 'Masuk'}
              </button>
            </p>
          </div>
        </div>

        {/* Info Bawah */}
        <div className="mt-4 text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em] flex items-center gap-4">
          <span>Permikomnas XIV</span>
          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
          <span>v2.1.0-Release</span>
        </div>
      </div>

      <style>
        {`
          @keyframes slide-in-left {
            from { transform: translateX(-40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fade-zoom {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-in {
            animation: fade-zoom 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>
    </div>
  );
}
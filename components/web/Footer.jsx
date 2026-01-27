import React from 'react';
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Globe,
  BookOpen,
  Calendar,
} from 'lucide-react';
import Image from 'next/image';

/**
 * Komponen Footer Permikomnas Wilayah XIV
 * Tema: Gray - Blue
 * Perubahan: Mengganti Wilayah Kerja dengan seksi Blog
 */
const Footer = () => {
  const tahunSekarang = new Date().getFullYear();

  const tautanSosial = [
    { nama: 'Instagram', URL: '#', ikon: <Instagram size={18} /> },
    { nama: 'Twitter', URL: '#', ikon: <Twitter size={18} /> },
    { nama: 'LinkedIn', URL: '#', ikon: <Linkedin size={18} /> },
    { nama: 'YouTube', URL: '#', ikon: <Youtube size={18} /> },
  ];

  const navigasiCepat = [
    { label: 'Tentang Kami', link: '#' },
    { label: 'Visi & Misi', link: '#' },
    { label: 'Program Kerja', link: '#' },
    { label: 'Struktur Organisasi', link: '#' },
    { label: 'Hubungi Kami', link: '#' },
  ];

  const postinganBlog = [
    {
      judul: 'Muswil XIV: Transformasi Digital Mahasiswa',
      tanggal: '12 Okt 2023',
      link: '#',
    },
    {
      judul: 'Tips Belajar Pemrograman Untuk Pemula',
      tanggal: '05 Nov 2023',
      link: '#',
    },
    {
      judul: 'Kolaborasi Antar Kampus di Wilayah XIV',
      tanggal: '20 Des 2023',
      link: '#',
    },
  ];

  return (
    <footer className="w-full bg-[#1a1f2c] text-slate-300 pt-16 pb-8 px-6 font-sans border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Bagian 1: Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-20 w-20">
                <Image className='w-full h-full' width={100} height={100} src={'/logo/permikomnas-wilayah-14.png'} alt='logo permikomnas wilayah 14'/>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                PERMIKOMNAS <span className="text-blue-400">XIV</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Wadah komunikasi dan koordinasi seluruh mahasiswa informatika dan
              komputer nasional khususnya di Wilayah XIV (Sulawesi Tenggara).
            </p>
            <div className="flex gap-4">
              {tautanSosial.map((sosial) => (
                <a
                  key={sosial.nama}
                  href={sosial.URL}
                  className="p-2 rounded-md bg-slate-800 hover:bg-blue-600 hover:text-white transition-all duration-300 text-slate-400"
                  aria-label={sosial.nama}
                >
                  {sosial.ikon}
                </a>
              ))}
            </div>
          </div>

          {/* Bagian 2: Tautan Navigasi */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" /> Jelajahi
            </h4>
            <ul className="space-y-3">
              {navigasiCepat.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bagian 3: Blog Terbaru (MENGGANTIKAN WILAYAH KERJA) */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <BookOpen size={16} className="text-blue-500" /> Blog Terbaru
            </h4>
            <div className="space-y-5">
              {postinganBlog.map((post, index) => (
                <a key={index} href={post.link} className="block group">
                  <h5 className="text-sm font-medium text-slate-300 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.judul}
                  </h5>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                    <Calendar size={12} />
                    {post.tanggal}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bagian 4: Kontak Kami */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <Mail size={16} className="text-blue-500" /> Hubungi Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin
                  size={18}
                  className="text-blue-500 mt-1 flex-shrink-0"
                />
                <p className="text-sm text-slate-400 leading-snug">
                  Sekretariat Wilayah XIV, Kota Kendari, Sulawesi Tenggara.
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Mail size={16} className="text-blue-500 flex-shrink-0" />
                <span className="text-slate-400 break-all">
                  halo@permikomnas14.or.id
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Phone size={16} className="text-blue-500 flex-shrink-0" />
                <span className="text-slate-400">+62 812-3456-7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] md:text-xs text-slate-500 text-center md:text-left">
            © {tahunSekarang} Permikomnas Wilayah XIV. Dikembangkan oleh
            Departemen Media & Informasi.
          </p>
          <div className="flex gap-6 text-[11px] md:text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client'
import Agenda from '@/components/web/beranda/Agenda';
import Blog from '@/components/web/beranda/Blog';
import GaleriParallax from '@/components/web/beranda/GaleriParallax';
import Hero from '@/components/web/beranda/Hero';
import Leadership from '@/components/web/beranda/Leadership';
import Sejarah from '@/components/web/beranda/Sejarah';
import Footer from '@/components/web/Footer';
import Header from '@/components/web/Header';
import Whatsapp from '@/components/web/Whatsapp';

export default function Page() {
  return (
    <main>
      <Header />
      <Whatsapp />
      <Hero />
      <Agenda />
      <Blog />
      <Leadership />
      <Sejarah />
      <GaleriParallax />
      <Footer />
    </main>
  );
}

'use client'
import HalamanAgenda from "@/components/web/agenda/HalamanAgenda";
import Footer from "@/components/web/Footer";
import Header from "@/components/web/Header";

export default function AgendaPage() {
  return (
    <main>
      <Header />
      <HalamanAgenda />
      <Footer />
    </main>
  )
}
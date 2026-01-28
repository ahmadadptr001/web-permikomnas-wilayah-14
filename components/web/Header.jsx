'use client';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  ChevronDown,
  Search,
  User,
  Bell,
  Home,
  Calendar,
  LayoutDashboard,
  Newspaper,
  History,
  Users,
  Camera,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguageStore } from '@/store/languageStore';
import { InputGroup, InputGroupInput } from '../ui/input-group';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '../ui/sheet';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [language, setLanguage] = useState('indonesia');
  const { setLanguage: setLanguageStore, language: languageStore } =
    useLanguageStore();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ID = languageStore === 'indonesia' ? true : false;

  useEffect(() => {
    setLanguageStore(language);
  }, [language]);

  const navLinks = [
    { name: 'Beranda', href: '/web', icon: <Home size={18} /> },
    { name: 'Agenda', href: '/web/agenda', icon: <Calendar size={18} /> },
    { name: 'Berita', href: '/web/berita', icon: <Newspaper size={18} /> },
  ];

  const tentangSubLinks = [
    {
      name: 'Profil',
      href: '/web/profil',
      icon: <LayoutDashboard size={16} />,
    },
    {
      name: 'Struktur Organisasi',
      href: '/web/struktur',
      icon: <Users size={16} />,
    },
    {
      name: 'Sejarah',
      href: '/web/sejarah',
      icon: <History size={16} />,
    },
    {
      name: 'Dokumentasi Kegiatan',
      href: '/web/dokumentasi',
      icon: <Camera size={16} />,
    },
  ];

  return (
    <header
      className={`sticky -top-16.5 left-0 right-0 z-40 w-full transition-all duration-700 ease-in-out border-b ${
        isScrolled
          ? 'bg-white dark:bg-slate-950/80 backdrop-blur-sm border-slate-200/60 dark:border-blue-900/30 shadow-[0_8px_40px_rgba(0,0,0,0.08)] py-0'
          : 'bg-white dark:bg-slate-950 border-transparent'
      }`}
    >
      {/* Top Bar - Identity */}
      <div
        id="header-top"
        className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-900 text-white py-3.5 md:py-2 px-5 md:px-8 flex justify-between items-center transition-all duration-500"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative z-10 flex items-center gap-3 w-auto group cursor-pointer">
          <div className="flex-shrink-0 bg-white/15 backdrop-blur-md border border-white/20 p-2 md:p-1.5 rounded-xl shadow-lg group-hover:rotate-6 transition-transform duration-500">
            <Image
              width={38}
              height={38}
              src="/logo/permikomnas-wilayah-14.png"
              alt="Logo Permikomnas 14"
              className="object-contain drop-shadow-md w-[38px] h-[38px] md:w-[34px] md:h-[34px]"
            />
          </div>
          <div className="flex flex-col leading-tight md:leading-none">
            <p className="font-black tracking-[0.15em] text-[0.65rem] md:text-[0.65rem] opacity-90 uppercase mb-0.5 md:mb-0.5">
              Permikomnas RI
            </p>
            <p className="font-extrabold text-[0.75rem] md:text-[0.75rem] text-white tracking-normal md:tracking-wide">
              WILAYAH XIV SULTRA
            </p>
          </div>
        </div>

        {/* Language & Mobile Toggle */}
        <div className="relative z-10 flex items-center gap-2">
          {/* Desktop Language Selector */}
          <div className="hidden md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <div className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm px-3 py-1.5 transition-all duration-300">
                  <div className="relative w-4 h-4 rounded-full overflow-hidden ring-1 ring-white/30">
                    <Image
                      src={ID ? '/logo/indonesia-sub.png' : '/logo/english-sub.png'}
                      fill
                      alt="Current Language"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                    {languageStore}
                  </p>
                  <ChevronDown size={12} className="opacity-80" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[10rem] mr-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-2">
                <DropdownMenuLabel className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-1">
                  Select Language
                </DropdownMenuLabel>
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={setLanguage}
                  className="flex flex-col gap-1"
                >
                  <DropdownMenuRadioItem
                    value="indonesia"
                    className="rounded-xl px-3 py-2 transition-colors cursor-pointer data-[state=checked]:bg-blue-100/50 dark:data-[state=checked]:bg-blue-800/40 text-sm font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={'/logo/indonesia-sub.png'}
                        width={18}
                        height={18}
                        alt="ID"
                        className="rounded-full shadow-sm"
                      />
                      Indonesia
                    </div>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="english"
                    className="rounded-xl px-3 py-2 transition-colors cursor-pointer data-[state=checked]:bg-blue-100/50 dark:data-[state=checked]:bg-blue-800/40 text-sm font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={'/logo/english-sub.png'}
                        width={18}
                        height={18}
                        alt="EN"
                        className="rounded-full shadow-sm"
                      />
                      English
                    </div>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Trigger (Sidebar) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-xl w-11 h-11 flex items-center justify-center transition-all active:scale-95"
                >
                  {/* Custom Hamburger Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-end-vertical" aria-hidden="true">
                    <rect width="16" height="6" x="2" y="4" rx="2"></rect>
                    <rect width="9" height="6" x="9" y="14" rx="2"></rect>
                    <path d="M22 22V2"></path>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[350px] p-0 border-l dark:border-slate-800 flex flex-col"
              >
                <SheetHeader className="p-6 text-left border-b dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-xl">
                      <Image
                        src="/logo/permikomnas-wilayah-14.png"
                        width={28}
                        height={28}
                        alt="Logo"
                      />
                    </div>
                    <SheetTitle className="text-lg font-black tracking-tighter">
                      PERMIKOMNAS
                    </SheetTitle>
                  </div>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
                  <nav className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                      Menu Navigasi
                    </p>
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-4 px-3 py-3 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-bold"
                        >
                          <span className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg">
                            {link.icon}
                          </span>
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}

                    <div className="pt-2">
                      <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 mt-4">
                        Tentang Kami
                      </p>
                      {tentangSubLinks.map((sub) => (
                        <SheetClose asChild key={sub.name}>
                          <Link
                            href={sub.href}
                            className="flex items-center gap-4 px-3 py-2.5 rounded-2xl text-slate-500 dark:text-slate-400 hover:text-blue-600 font-semibold"
                          >
                            <span className="p-1.5 opacity-70">{sub.icon}</span>
                            {sub.name}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>

                  <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                      Bahasa
                    </p>
                    <div className="grid grid-cols-2 gap-2 px-2">
                      <Button
                        variant={language === 'indonesia' ? 'default' : 'outline'}
                        className="rounded-xl h-12 gap-2"
                        onClick={() => setLanguage('indonesia')}
                      >
                        <Image src={'/logo/indonesia-sub.png'} width={16} height={16} alt="ID" /> ID
                      </Button>
                      <Button
                        variant={language === 'english' ? 'default' : 'outline'}
                        className="rounded-xl h-12 gap-2"
                        onClick={() => setLanguage('english')}
                      >
                        <Image src={'/logo/english-sub.png'} width={16} height={16} alt="EN" /> EN
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <Link href="/web/autentikasi?isLogin=true" className="w-full">
                    <Button className="w-full h-12 rounded-2xl gap-2 font-bold shadow-lg shadow-blue-500/20">
                      <User size={18} /> Masuk Anggota
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div
        id="header-bottom"
        className="container mx-auto max-w-7xl px-5 py-3 md:py-3 flex items-center justify-between gap-4"
      >
        {/* Search Bar */}
        <div className="flex-1 md:flex-none relative group z-20">
          <InputGroup className="w-full transition-all duration-500 rounded-full">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
              <Search size={18} />
            </div>
            <InputGroupInput
              placeholder="Cari berita..."
              className="!pl-12 pr-4 py-3 md:py-2.5 w-full md:w-[280px] md:focus:w-[360px] bg-slate-100/60 dark:bg-slate-900/60 border-none focus:bg-white dark:focus:bg-slate-950 rounded-full text-sm transition-all duration-500 shadow-inner outline-none"
            />
          </InputGroup>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/web"
            className="relative px-5 py-2 cursor-pointer group rounded-full hover:bg-blue-50 dark:hover:bg-white/5 transition-all duration-300"
          >
            <span className="relative z-10 text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Beranda
            </span>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <div className="relative px-5 py-2 cursor-pointer group rounded-full hover:bg-blue-50 dark:hover:bg-white/5 transition-all duration-300 flex items-center gap-1.5">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Tentang
                </span>
                <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-xl border-slate-200 shadow-2xl rounded-2xl p-2 mt-2">
              {tentangSubLinks.map((sub) => (
                <DropdownMenuItem key={sub.name} asChild className="rounded-xl p-0">
                  <Link
                    href={sub.href}
                    className="w-full flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-blue-50 text-slate-600 font-bold text-sm"
                  >
                    <span className="text-blue-600">{sub.icon}</span>
                    {sub.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 cursor-pointer group rounded-full hover:bg-blue-50 dark:hover:bg-white/5 transition-all duration-300"
            >
              <span className="relative z-10 text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {link.name}
              </span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href={'/web/autentikasi'} className="hidden lg:block">
            <Button
              variant="outline"
              className="rounded-full border-blue-200 hover:border-blue-500 text-blue-600 dark:border-blue-800 dark:text-blue-400 hover:bg-blue-50 font-bold text-xs px-6 py-2 h-10 gap-2 transition-all hover:-translate-y-0.5"
            >
              <span>Gabung</span>
              <User size={14} />
            </Button>
          </Link>

          <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-800 pl-3">
            <Button
              onClick={() => router.push('/web/notifikasi')}
              size="icon"
              variant="ghost"
              className="relative rounded-full w-10 h-10 text-slate-500 hover:bg-blue-50 transition-colors"
            >
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-950 animate-pulse"></span>
            </Button>

            <Button
              onClick={() => router.push('/web/autentikasi?isLogin=true')}
              variant="ghost"
              className="p-0.5 rounded-full w-10 h-10 hover:ring-4 hover:ring-blue-100 dark:hover:ring-blue-900/20 transition-all"
            >
              <Avatar className="h-9 w-9 border border-slate-200 dark:border-slate-800 shadow-sm">
                <AvatarImage src="/logo/profil-kosong.png" alt="profile" className="object-cover" />
                <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">PM</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
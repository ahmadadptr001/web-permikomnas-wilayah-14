import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Whatsapp() {
  return (
      <Image width={50} height={50} src="/logo/whatsapp.png" alt="Whatsapp Logo" className='cursor-pointer hover:scale-102 fixed bottom-7 right-7 z-20' />
  );
}

import Header from '@/components/web/Header';
import Whatsapp from '@/components/web/Whatsapp';

export const metadata = {
  title: 'Dashbaord Permikomnas Wilayah XIV',
  description: 'Ciptakan generasi yang unggul dan berdaya digital',
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}

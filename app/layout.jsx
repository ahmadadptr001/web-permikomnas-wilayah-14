import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata = {
  title: 'Permikomnas Wilayah XIV',
  description: 'Ciptakan generasi yang unggul dan berdaya digital',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          dissableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

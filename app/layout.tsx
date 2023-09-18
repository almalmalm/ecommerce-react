import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from './components/header/Header';

const font = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ecommerce store',
  description: 'In out store you can purchase different type of electronic products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

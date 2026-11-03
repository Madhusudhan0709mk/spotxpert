import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SpotXpert AI - AI-Native Engineering For Digital Products & Enterprise Solutions',
  description:
    'SpotXpert AI helps high-growth startups and enterprises architect, build, and scale next-generation digital products and AI-native software solutions. Agile in mind, spirit, and speed.',

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: 'SpotXpert AI - AI-Native Engineering For Digital Products & Enterprise Solutions',
    description:
      'SpotXpert AI helps high-growth startups and enterprises architect, build, and scale next-generation digital products and AI-native software solutions. Agile in mind, spirit, and speed.',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SpotXpert AI - AI-Native Engineering For Digital Products & Enterprise Solutions',
    description:
      'SpotXpert AI helps high-growth startups and enterprises architect, build, and scale next-generation digital products and AI-native software solutions. Agile in mind, spirit, and speed.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

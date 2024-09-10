import { Bebas_Neue, Inter } from 'next/font/google'
import "./globals.css";
import { Providers } from "./providers"
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})

export const metadata = {
  title: "Sabrang 2024",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${inter.className}`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

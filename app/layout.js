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
  description: "Sabrang is the flagship annual festival of JK Lakshmipat University, Jaipur (JKLU). Since 2011, Sabrang has been celebrated annually.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo/sabrang.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${bebasNeue.variable} ${inter.className}`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

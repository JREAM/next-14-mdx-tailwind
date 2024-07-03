import "@/styles/global.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Title',
  icons: {
    icon: '/favicon.png',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <body>
      <div className="w-full">
        <Navigation />
        {children}
        <Footer />
      </div>
    </body>
    </html>
  );
}



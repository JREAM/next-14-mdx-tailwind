import "@/styles/global.css";
import Header from "@/components/Header"
import Head from "next/head"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <body>
      <div className="w-full">
        <Navigation />
        <Header />
        {children}
        <Footer />
      </div>
    </body>
    </html>
  );
}



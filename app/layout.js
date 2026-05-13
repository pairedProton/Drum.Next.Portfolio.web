import { Montserrat, League_Spartan,Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer/Footer";
import Navbar from "./_components/Header/Navbar";
import SmoothScroll from "./_components/SmoothScroll";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spectrum Marketing and Services Pvt. Ltd.",
  description: "Spectrum Marketing and Services Pvt. Ltd., Spectrum Agritech,",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${leagueSpartan.variable} ${inter.variable} h-full antialiased`}
    > 
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}

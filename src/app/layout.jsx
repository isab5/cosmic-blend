import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const quicksand = localFont({
  src: [
    {
      path: "../../public/fonts/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata = {
  title: "Cosmic Blend",
  description: "A beautiful and elegant theme for your Next.js application.",
  icons : {
    icon: '/icons/cosmiclogonav.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" classname={quicksand.variable>
      <body className={quicksand.classname}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

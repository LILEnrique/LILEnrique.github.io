import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";
import ThemeContextProvider from "@/context/ThemeContext";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | EC Software Engineer",
  description: "Enrique Cayupan's portfolio and personal website. Software Engineer | Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative bg-zinc-100 text-zinc-800 dark:text-zinc-200 dark:bg-background`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

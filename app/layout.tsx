import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | EC Software Engineer",
  description: "Enrique Cayupan's portfolio and personal website. Software Engineer | Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-primaryWhite text-zinc-800 dark:text-zinc-200 dark:bg-primaryBlack`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learncrew - Empowering Learners",
  description:
    "Personalized learning with expert mentors and cutting-edge technology. Empowering learners to achieve their full potential through innovative education in Bangalore.",
  keywords: ["education", "learning", "mentors", "Bangalore", "online courses", "Learncrew"],
  authors: [{ name: "Learncrew" }],
  openGraph: {
    title: "Learncrew - Empowering Learners",
    description: "Personalized learning with expert mentors and cutting-edge technology.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable} dark`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#fafafa] overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Page Content with smooth transitions */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3D5AFE] to-[#00E5FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#3D5AFE] to-[#00E5FF] opacity-0 group-hover:opacity-30 blur-lg transition-opacity" />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-lexend)] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Learncrew
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm text-gray-300 hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative px-6 py-2.5 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF] transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF] opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />
                <span className="relative flex items-center gap-2 text-sm font-medium text-white">
                  Get Started
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[#0a0a0a] border-l border-white/10 p-6 pt-24"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-4 rounded-xl text-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-3 px-6 rounded-xl text-center font-medium text-white bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF]"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

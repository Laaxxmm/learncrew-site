"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "#", label: "Blog" },
    { href: "#", label: "Courses" },
    { href: "#", label: "Events" },
    { href: "#", label: "FAQ" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#3D5AFE]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3D5AFE] to-[#00E5FF] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-lexend)]">
                Learncrew
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Empowering learners to achieve their full potential through
              innovative education and cutting-edge technology in Bangalore.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+918012345678"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00E5FF] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 80 1234 5678
              </a>
              <a
                href="mailto:hello@learncrew.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00E5FF] transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@learncrew.com
              </a>
              <p className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                Bangalore, India
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Learncrew. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#3D5AFE]/50 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3D5AFE] to-[#00E5FF] flex items-center justify-center text-white shadow-lg shadow-[#3D5AFE]/20"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

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
    courses: [
        { href: "/courses", label: "Full-Stack Development" },
        { href: "/courses", label: "UI/UX Design" },
        { href: "/courses", label: "Data Science" },
        { href: "/courses", label: "Mobile Development" },
    ],
    company: [
        { href: "/about", label: "About Us" },
        { href: "/mentors", label: "Our Mentors" },
        { href: "/contact", label: "Contact" },
        { href: "#", label: "Careers" },
    ],
    legal: [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "Refund Policy" },
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
        <footer className="relative bg-black border-t border-white/10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00FFCC]/5 to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-[#00FFCC] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,204,0.3)]">
                                <GraduationCap className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-xl font-bold font-[family-name:var(--font-lexend)]">
                                Learncrew
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Empowering the next generation of tech professionals with
                            industry-aligned education and expert mentorship in Bangalore.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="tel:+918012345678"
                                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00FFCC] transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                +91 80 1234 5678
                            </a>
                            <a
                                href="mailto:hello@learncrew.com"
                                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00FFCC] transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                hello@learncrew.com
                            </a>
                            <p className="flex items-center gap-3 text-sm text-gray-400">
                                <MapPin className="w-4 h-4" />
                                Koramangala, Bangalore
                            </p>
                        </div>
                    </div>

                    {/* Courses Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-white">Courses</h4>
                        <ul className="space-y-3">
                            {footerLinks.courses.map((link) => (
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

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
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
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#00FFCC]/50 transition-all"
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
                        className="w-10 h-10 rounded-xl bg-[#00FFCC] flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,255,204,0.3)]"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}

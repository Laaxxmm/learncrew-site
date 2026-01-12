"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, ArrowRight, Star, Award, Users } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function GridOverlay() {
    return (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none z-0" />
    );
}

function MentorCard({ mentor, index }: { mentor: typeof mentors[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="group rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00FFCC]/50 transition-all overflow-hidden"
        >
            {/* Avatar */}
            <div className="relative h-48 bg-gradient-to-br from-[#00FFCC]/20 to-transparent flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00FFCC] to-[#00FFCC]/50 flex items-center justify-center text-4xl font-bold text-black shadow-[0_0_40px_rgba(0,255,204,0.3)]">
                    {mentor.name.split(" ").map((n) => n[0]).join("")}
                </div>
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#00FFCC]/20 border border-[#00FFCC]/30 text-xs font-medium text-[#00FFCC]">
                    {mentor.experience}
                </div>
            </div>

            {/* Info */}
            <div className="p-6">
                <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold mb-1">{mentor.name}</h3>
                <p className="text-[#00FFCC] text-sm font-medium mb-2">{mentor.role}</p>
                <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-400 mb-4">{mentor.bio}</p>

                {/* Companies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.companies.map((company) => (
                        <span key={company} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10">
                            {company}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-[#00FFCC]" />
                        {mentor.students} students
                    </span>
                    <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {mentor.rating}
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-4">
                    <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FFCC] hover:border-[#00FFCC]/50 transition-all">
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FFCC] hover:border-[#00FFCC]/50 transition-all">
                        <Twitter className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

const mentors = [
    {
        name: "Dr. Priya Sharma",
        role: "Lead Instructor - Full-Stack",
        experience: "12+ years",
        bio: "Former Principal Engineer at Google. PhD in Computer Science from IISc Bangalore.",
        companies: ["Google", "Microsoft", "Flipkart"],
        students: "2,500+",
        rating: "4.9",
    },
    {
        name: "Rajesh Kumar",
        role: "Head of Data Science",
        experience: "10+ years",
        bio: "Ex-Data Scientist at Amazon. Built ML systems processing billions of records.",
        companies: ["Amazon", "Uber", "Ola"],
        students: "1,800+",
        rating: "4.8",
    },
    {
        name: "Ananya Patel",
        role: "UI/UX Design Lead",
        experience: "8+ years",
        bio: "Former Design Lead at Airbnb. Passionate about human-centered design.",
        companies: ["Airbnb", "Spotify", "Swiggy"],
        students: "1,200+",
        rating: "4.9",
    },
    {
        name: "Vikram Reddy",
        role: "Mobile Development Expert",
        experience: "9+ years",
        bio: "Built apps with 10M+ downloads. React Native & Flutter specialist.",
        companies: ["Meta", "PhonePe", "CRED"],
        students: "900+",
        rating: "4.7",
    },
    {
        name: "Sneha Iyer",
        role: "Cloud & DevOps Instructor",
        experience: "11+ years",
        bio: "AWS Solutions Architect. Former SRE at Netflix managing global infrastructure.",
        companies: ["Netflix", "AWS", "IBM"],
        students: "1,100+",
        rating: "4.8",
    },
    {
        name: "Arun Nair",
        role: "Digital Marketing Mentor",
        experience: "7+ years",
        bio: "Scaled startups from 0 to 1M users. SEO and growth hacking expert.",
        companies: ["Razorpay", "Freshworks", "Zoho"],
        students: "800+",
        rating: "4.6",
    },
];

const stats = [
    { value: "50+", label: "Expert Mentors", icon: Award },
    { value: "10,000+", label: "Students Taught", icon: Users },
    { value: "4.8", label: "Average Rating", icon: Star },
];

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════

export default function Page() {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero */}
            <section
                ref={heroRef}
                className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-16"
            >
                <GridOverlay />
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#00FFCC]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#00FFCC]/10 rounded-full blur-[100px]" />

                <div className="relative z-20 max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold mb-6"
                    >
                        Meet Our <span className="text-[#00FFCC]">Mentors</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-400 max-w-2xl mx-auto"
                    >
                        Learn from industry veterans who've worked at the world's top tech companies.
                    </motion.p>
                </div>
            </section>

            {/* Stats */}
            <section className="relative py-12 px-6">
                <GridOverlay />
                <div className="relative z-20 max-w-4xl mx-auto">
                    <div className="grid grid-cols-3 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10"
                            >
                                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#00FFCC]" />
                                <div className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[#00FFCC]">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mentors Grid */}
            <section className="relative py-24 px-6">
                <GridOverlay />
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mentors.map((mentor, i) => (
                            <MentorCard key={mentor.name} mentor={mentor} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 px-6">
                <GridOverlay />
                <div className="relative z-20 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-3xl bg-gradient-to-br from-[#00FFCC]/10 to-transparent border border-[#00FFCC]/20"
                    >
                        <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold mb-4">Want to Become a Mentor?</h2>
                        <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400 mb-8">
                            Share your expertise and help shape the next generation of tech professionals.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00FFCC] text-black font-semibold hover:shadow-[0_0_40px_rgba(0,255,204,0.4)] transition-shadow"
                        >
                            Apply to Teach
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

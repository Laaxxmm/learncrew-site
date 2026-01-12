"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Target, Eye, Heart, Lightbulb, Users, Award, MapPin, Calendar, ArrowRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function GridOverlay() {
    return (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none z-0" />
    );
}

function StorySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const stats = [
        { value: "50+", label: "Courses", icon: Target },
        { value: "10,000+", label: "Students", icon: Users },
        { value: "95%", label: "Placement", icon: Award },
        { value: "2018", label: "Founded", icon: Calendar },
    ];

    return (
        <section ref={ref} className="relative py-24 px-6">
            <GridOverlay />
            <div className="relative z-20 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                    >
                        <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold mb-6">Our Story</h2>
                        <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400 mb-4">
                            Learncrew was founded in Bangalore in 2018 with a simple mission: make quality tech education accessible to everyone, regardless of their background.
                        </p>
                        <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400 mb-4">
                            What started as a small tutoring center has grown into one of India's most respected ed-tech platforms. We've trained over 10,000 students, with 95% of them landing jobs at top companies.
                        </p>
                        <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400">
                            Our secret? We believe in learning by doing. Every course is project-based, every mentor is from the industry, and every student leaves with a portfolio they're proud of.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00FFCC]/50 transition-all"
                            >
                                <stat.icon className="w-8 h-8 text-[#00FFCC] mb-3" />
                                <div className="text-[clamp(1.5rem,4vw,2rem)] font-bold text-[#00FFCC]">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function MissionVision() {
    return (
        <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-[#00FFCC]/5 to-transparent">
            <GridOverlay />
            <div className="relative z-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
                    >
                        <Target className="w-12 h-12 text-[#00FFCC] mb-4" />
                        <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mb-4">Our Mission</h3>
                        <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400">
                            To democratize tech education by providing accessible, high-quality, industry-aligned learning experiences that help students succeed in their careers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
                    >
                        <Eye className="w-12 h-12 text-[#00FFCC] mb-4" />
                        <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mb-4">Our Vision</h3>
                        <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400">
                            To be India's most impactful education platform, creating a generation of skilled professionals who build the technology of tomorrow.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ValuesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const values = [
        { icon: Lightbulb, title: "Innovation", description: "We embrace new technologies and teaching methods." },
        { icon: Heart, title: "Passion", description: "We genuinely care about every student's success." },
        { icon: Users, title: "Community", description: "Learning is better together. We foster connections." },
        { icon: Award, title: "Excellence", description: "We settle for nothing less than the best." },
    ];

    return (
        <section ref={ref} className="relative py-24 px-6">
            <GridOverlay />
            <div className="relative z-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold mb-4">Our Core Values</h2>
                    <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400 max-w-xl mx-auto">
                        These principles guide everything we do at Learncrew.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00FFCC]/50 transition-all text-center"
                        >
                            <div className="w-14 h-14 mx-auto rounded-xl bg-[#00FFCC]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <value.icon className="w-7 h-7 text-[#00FFCC]" />
                            </div>
                            <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold mb-2">{value.title}</h3>
                            <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-400">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

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
                <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#00FFCC]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-[#00FFCC]/10 rounded-full blur-[100px]" />

                <div className="relative z-20 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#00FFCC]/30 mb-6"
                    >
                        <MapPin className="w-4 h-4 text-[#00FFCC]" />
                        <span className="text-sm text-gray-300">Bangalore, India</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold mb-6"
                    >
                        About <span className="text-[#00FFCC]">Learncrew</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-400 max-w-2xl mx-auto"
                    >
                        Empowering the next generation of tech professionals since 2018.
                    </motion.p>
                </div>
            </section>

            <StorySection />
            <MissionVision />
            <ValuesSection />

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
                        <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold mb-4">Join Our Journey</h2>
                        <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400 mb-8">
                            Whether you want to learn, teach, or collaborate—we'd love to hear from you.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00FFCC] text-black font-semibold hover:shadow-[0_0_40px_rgba(0,255,204,0.4)] transition-shadow"
                        >
                            Get in Touch
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

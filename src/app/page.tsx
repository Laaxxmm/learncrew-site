"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, BookOpen, Trophy, Sparkles, ChevronDown, Code, Palette, TrendingUp } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function GridOverlay() {
    return (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none z-0" />
    );
}

function GlowOrb({ className }: { className?: string }) {
    return (
        <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
        />
    );
}

function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

    const words = "Empowering Learners to Build the Future".split(" ");

    return (
        <motion.section
            ref={ref}
            style={{ opacity, scale }}
            className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
        >
            <GridOverlay />
            <GlowOrb className="w-96 h-96 bg-[#00FFCC]/20 top-1/4 left-1/4" />
            <GlowOrb className="w-72 h-72 bg-[#00FFCC]/15 bottom-1/3 right-1/4" />

            <div className="relative z-20 max-w-5xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#00FFCC]/30 mb-8 backdrop-blur-sm"
                >
                    <Sparkles className="w-4 h-4 text-[#00FFCC]" />
                    <span className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-gray-300">Premier Education Platform in Bangalore</span>
                </motion.div>

                {/* Animated Title */}
                <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.1] mb-6">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="inline-block mr-[0.25em]"
                            style={{
                                color: i >= 5 ? "#00FFCC" : "#FFFFFF",
                                textShadow: i >= 5 ? "0 0 40px rgba(0,255,204,0.4)" : undefined,
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    Personalized learning paths, expert mentors, and cutting-edge curriculum
                    designed to transform your career in tech.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/courses"
                        className="group relative px-8 py-4 rounded-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[#00FFCC]" />
                        <div className="absolute inset-0 bg-[#00FFCC] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                        <span className="relative flex items-center gap-2 text-black font-semibold">
                            Explore Courses
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link
                        href="/mentors"
                        className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
                    >
                        Meet Our Mentors
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-5 h-5 text-[#00FFCC]" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

function FeaturesGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const features = [
        { icon: GraduationCap, title: "Expert Mentors", description: "Learn from industry veterans with 10+ years experience at top companies" },
        { icon: Users, title: "Small Batches", description: "Maximum 15 students per batch for personalized attention" },
        { icon: BookOpen, title: "Project-Based", description: "Build real-world projects that go straight to your portfolio" },
        { icon: Trophy, title: "95% Placement", description: "Our graduates work at Google, Microsoft, Amazon, and startups" },
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
                    <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold mb-4">
                        Why Choose <span className="text-[#00FFCC]">Learncrew</span>?
                    </h2>
                    <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400 max-w-2xl mx-auto">
                        We combine the best of traditional education with modern technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15 }}
                            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00FFCC]/50 transition-all backdrop-blur-sm"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#00FFCC]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-[#00FFCC]" />
                            </div>
                            <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold mb-2">{feature.title}</h3>
                            <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CoursesPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const courses = [
        { icon: Code, title: "Full-Stack Development", duration: "6 months", students: "500+" },
        { icon: Palette, title: "UI/UX Design", duration: "4 months", students: "300+" },
        { icon: TrendingUp, title: "Data Science", duration: "5 months", students: "400+" },
    ];

    return (
        <section ref={ref} className="relative py-24 px-6 bg-gradient-to-b from-transparent via-[#00FFCC]/5 to-transparent">
            <GridOverlay />
            <div className="relative z-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold mb-4">Popular Courses</h2>
                    <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400">Industry-aligned curriculum designed by experts</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.map((course, i) => (
                        <motion.div
                            key={course.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15 }}
                            className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00FFCC]/50 transition-all"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#00FFCC]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <course.icon className="w-8 h-8 text-[#00FFCC]" />
                            </div>
                            <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold mb-3">{course.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                <span>{course.duration}</span>
                                <span>•</span>
                                <span>{course.students} students</span>
                            </div>
                            <Link
                                href="/courses"
                                className="inline-flex items-center gap-2 text-[#00FFCC] text-sm font-medium group-hover:gap-3 transition-all"
                            >
                                Learn More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="relative py-24 px-6">
            <GridOverlay />
            <div className="relative z-20 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 rounded-3xl bg-gradient-to-br from-[#00FFCC]/10 to-transparent border border-[#00FFCC]/20 backdrop-blur-sm"
                >
                    <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold mb-4">
                        Ready to Transform Your Career?
                    </h2>
                    <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400 mb-8 max-w-xl mx-auto">
                        Join 10,000+ learners who've accelerated their careers with Learncrew.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00FFCC] text-black font-semibold hover:shadow-[0_0_40px_rgba(0,255,204,0.4)] transition-shadow"
                    >
                        Start Learning Today
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════

export default function Page() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <HeroSection />
            <FeaturesGrid />
            <CoursesPreview />
            <CTASection />
        </div>
    );
}

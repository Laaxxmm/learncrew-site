"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Code, Palette, TrendingUp, Smartphone, Database, Globe, ArrowRight, CheckCircle, Clock, Users, Star, ChevronDown } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function GridOverlay() {
    return (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none z-0" />
    );
}

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="group rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00FFCC]/50 transition-all overflow-hidden"
        >
            {/* Course Header */}
            <div className="p-8 pb-0">
                <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,255,204,0.2)]"
                    style={{ backgroundColor: `${course.color}20` }}
                >
                    <course.icon className="w-8 h-8" style={{ color: course.color }} />
                </div>
                <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold mb-2">{course.title}</h3>
                <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-400 mb-4">{course.description}</p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[#00FFCC]" />
                        {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-[#00FFCC]" />
                        {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {course.rating}
                    </span>
                </div>
            </div>

            {/* Expandable Curriculum */}
            <div className="px-8">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center justify-between w-full py-4 border-t border-white/10 text-sm text-gray-300 hover:text-[#00FFCC] transition-colors"
                >
                    <span>View Curriculum</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pb-6 space-y-2 overflow-hidden"
                        >
                            {course.modules.map((module) => (
                                <li key={module} className="flex items-center gap-2 text-sm text-gray-400">
                                    <CheckCircle className="w-4 h-4 text-[#00FFCC]" />
                                    {module}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="p-8 pt-0">
                <Link
                    href="/contact"
                    className="block w-full py-3 rounded-xl text-center font-medium bg-[#00FFCC]/10 text-[#00FFCC] border border-[#00FFCC]/30 hover:bg-[#00FFCC] hover:text-black transition-all"
                >
                    Enroll Now — ₹{course.price.toLocaleString()}
                </Link>
            </div>
        </motion.div>
    );
}

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

const courses = [
    {
        icon: Code,
        title: "Full-Stack Development",
        description: "Master React, Node.js, and modern web technologies from scratch.",
        duration: "6 months",
        students: "500+ enrolled",
        rating: "4.9",
        price: 85000,
        color: "#00FFCC",
        modules: ["HTML/CSS/JavaScript", "React & Next.js", "Node.js & Express", "PostgreSQL & MongoDB", "DevOps & Deployment"],
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Learn Figma, design systems, and user research methodologies.",
        duration: "4 months",
        students: "300+ enrolled",
        rating: "4.8",
        price: 65000,
        color: "#FF6B9D",
        modules: ["Design Fundamentals", "Figma Mastery", "User Research", "Prototyping", "Design Systems"],
    },
    {
        icon: TrendingUp,
        title: "Data Science",
        description: "Python, Machine Learning, and data visualization for insights.",
        duration: "5 months",
        students: "400+ enrolled",
        rating: "4.9",
        price: 75000,
        color: "#FFD93D",
        modules: ["Python Fundamentals", "Pandas & NumPy", "Machine Learning", "Deep Learning", "Data Visualization"],
    },
    {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Build cross-platform apps with React Native and Flutter.",
        duration: "5 months",
        students: "250+ enrolled",
        rating: "4.7",
        price: 70000,
        color: "#6BCB77",
        modules: ["React Native", "Flutter & Dart", "iOS & Android", "App Store Deployment", "Push Notifications"],
    },
    {
        icon: Database,
        title: "Cloud & DevOps",
        description: "AWS, Docker, Kubernetes, and CI/CD pipelines.",
        duration: "4 months",
        students: "200+ enrolled",
        rating: "4.8",
        price: 60000,
        color: "#9B5DE5",
        modules: ["AWS Fundamentals", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"],
    },
    {
        icon: Globe,
        title: "Digital Marketing",
        description: "SEO, social media, content strategy, and analytics.",
        duration: "3 months",
        students: "350+ enrolled",
        rating: "4.6",
        price: 45000,
        color: "#F15BB5",
        modules: ["SEO Fundamentals", "Google Ads", "Social Media", "Content Strategy", "Analytics"],
    },
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
                <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#00FFCC]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#00FFCC]/10 rounded-full blur-[100px]" />

                <div className="relative z-20 max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold mb-6"
                    >
                        Our <span className="text-[#00FFCC]">Courses</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-400 max-w-2xl mx-auto"
                    >
                        Industry-aligned programs designed by experts to transform you into a job-ready professional.
                    </motion.p>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="relative py-24 px-6">
                <GridOverlay />
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, i) => (
                            <CourseCard key={course.title} course={course} index={i} />
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
                        <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold mb-4">Not Sure Which Course?</h2>
                        <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-400 mb-8">
                            Book a free counseling session with our career advisors.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00FFCC] text-black font-semibold hover:shadow-[0_0_40px_rgba(0,255,204,0.4)] transition-shadow"
                        >
                            Book Free Session
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

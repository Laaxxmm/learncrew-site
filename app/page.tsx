"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, BookOpen, Trophy, Sparkles, ChevronDown } from "lucide-react";

export default function Page() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const features = [
    { icon: GraduationCap, title: "Expert Mentors", description: "Learn from industry professionals with years of real-world experience" },
    { icon: Users, title: "Personalized Learning", description: "Customized curriculum that adapts to your pace and learning style" },
    { icon: BookOpen, title: "Cutting-Edge Content", description: "Stay ahead with the latest technologies and methodologies" },
    { icon: Trophy, title: "Proven Results", description: "Join thousands of successful learners who transformed their careers" },
  ];

  const titleWords = "Empowering Learners to Achieve Their Full Potential".split(" ");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3D5AFE]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-sm text-gray-300">Innovative Education in Bangalore</span>
          </motion.div>

          {/* Animated Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block mr-3"
                style={{
                  background: i >= 4 ? 'linear-gradient(135deg, #3D5AFE, #00E5FF)' : undefined,
                  WebkitBackgroundClip: i >= 4 ? 'text' : undefined,
                  WebkitTextFillColor: i >= 4 ? 'transparent' : undefined,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Personalized learning with expert mentors and cutting-edge technology.
            Transform your career with Learncrew.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <span className="relative flex items-center gap-2 text-white font-medium">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Explore Courses
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-xs">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Learncrew?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine innovative teaching methods with personalized attention to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3D5AFE]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3D5AFE] to-[#00E5FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#3D5AFE]/20 to-[#00E5FF]/20 border border-white/10 glass"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Future?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of successful learners who have accelerated their careers with Learncrew.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0a0a0a] font-medium hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

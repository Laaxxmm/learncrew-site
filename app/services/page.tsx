"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Code, Palette, TrendingUp, Smartphone, Globe, Database, ArrowRight, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Master modern web development with React, Node.js, and cloud technologies.",
      features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"],
      color: "#3D5AFE",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create stunning user experiences with industry-standard design tools.",
      features: ["Figma Mastery", "Design Systems", "User Research", "Prototyping"],
      color: "#FF4081",
    },
    {
      icon: TrendingUp,
      title: "Data Science",
      description: "Unlock insights from data using Python, ML, and analytics.",
      features: ["Python & Pandas", "Machine Learning", "Data Visualization", "Statistical Analysis"],
      color: "#00E5FF",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Build cross-platform mobile apps with React Native and Flutter.",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
      color: "#4CAF50",
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Master SEO, social media, and growth marketing strategies.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
      color: "#FF9800",
    },
    {
      icon: Database,
      title: "Cloud & DevOps",
      description: "Deploy and scale applications with AWS, Docker, and Kubernetes.",
      features: ["AWS Services", "Docker & K8s", "CI/CD Pipelines", "Infrastructure"],
      color: "#9C27B0",
    },
  ];

  const methodology = [
    { step: "01", title: "Assess", description: "We evaluate your current skills and learning goals." },
    { step: "02", title: "Plan", description: "Create a personalized learning roadmap together." },
    { step: "03", title: "Learn", description: "Engage with expert-led sessions and hands-on projects." },
    { step: "04", title: "Build", description: "Apply skills to real-world projects and portfolio." },
    { step: "05", title: "Succeed", description: "Get career support and land your dream opportunity." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#3D5AFE]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#00E5FF]/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF] bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive learning programs designed to transform your career with in-demand skills.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4" style={{ color: service.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#3D5AFE]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Methodology</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A proven 5-step approach to transform beginners into industry-ready professionals.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4">
            {methodology.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-6xl font-bold text-white/5">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold mb-2 relative z-10">{step.title}</h3>
                <p className="text-sm text-gray-400 relative z-10">{step.description}</p>
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
            className="p-12 rounded-3xl bg-gradient-to-br from-[#3D5AFE]/20 to-[#00E5FF]/20 border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join our next batch and begin your transformation today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Award, Users, Calendar } from "lucide-react";

export default function PortfolioPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      description: "A complete e-commerce solution built by our students using Next.js and Stripe.",
      image: "/portfolio/ecommerce.jpg",
      stats: { students: 12, duration: "3 months" },
    },
    {
      title: "Healthcare Dashboard",
      category: "UI/UX Design",
      description: "Modern healthcare analytics dashboard designed with Figma and built with React.",
      image: "/portfolio/healthcare.jpg",
      stats: { students: 8, duration: "2 months" },
    },
    {
      title: "AI Chatbot",
      category: "Data Science",
      description: "Conversational AI powered by GPT and trained on custom datasets.",
      image: "/portfolio/chatbot.jpg",
      stats: { students: 6, duration: "4 months" },
    },
    {
      title: "Fitness App",
      category: "Mobile Development",
      description: "Cross-platform fitness tracking app built with React Native.",
      image: "/portfolio/fitness.jpg",
      stats: { students: 10, duration: "3 months" },
    },
    {
      title: "SaaS Landing Page",
      category: "Digital Marketing",
      description: "High-converting landing page with SEO optimization and A/B testing.",
      image: "/portfolio/saas.jpg",
      stats: { students: 5, duration: "1 month" },
    },
    {
      title: "Cloud Infrastructure",
      category: "Cloud & DevOps",
      description: "Scalable AWS infrastructure with Terraform and CI/CD pipelines.",
      image: "/portfolio/cloud.jpg",
      stats: { students: 7, duration: "2 months" },
    },
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Hiring Partners" },
    { number: "4.9/5", label: "Student Rating" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#FF4081]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#3D5AFE]/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Student <span className="bg-gradient-to-r from-[#FF4081] to-[#3D5AFE] bg-clip-text text-transparent">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Real projects built by our students, showcasing the skills they developed at Learncrew.
          </motion.p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF] bg-clip-text text-transparent">
                  {item.number}
                </div>
                <div className="text-sm text-gray-400 mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Explore the impressive work created by our students during their learning journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#3D5AFE]/50 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-[#3D5AFE]/30 to-[#00E5FF]/30 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-16 h-16 text-white/20" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#3D5AFE] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.stats.students} students
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.stats.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#3D5AFE]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Hear from students who transformed their careers with Learncrew.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Arun T.", role: "Software Engineer at Google", quote: "Learncrew gave me the practical skills I needed to crack interviews at top tech companies." },
              { name: "Sneha R.", role: "Product Designer at Microsoft", quote: "The UI/UX course was exactly what I needed to transition into design." },
              { name: "Karthik M.", role: "Data Scientist at Amazon", quote: "The hands-on projects prepared me for real-world data science challenges." },
            ].map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl glass border border-white/10"
              >
                <p className="text-gray-300 mb-6 italic">"{story.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3D5AFE] to-[#00E5FF] flex items-center justify-center font-bold">
                    {story.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{story.name}</div>
                    <div className="text-sm text-gray-400">{story.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

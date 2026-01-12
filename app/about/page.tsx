"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Users, Award } from "lucide-react";

export default function AboutPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 });
  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

  const values = [
    { icon: Lightbulb, title: "Innovation", description: "We embrace new ideas and technologies to deliver the best learning experience." },
    { icon: Heart, title: "Passion", description: "We're driven by a deep commitment to transforming lives through education." },
    { icon: Users, title: "Community", description: "We foster a supportive environment where learners grow together." },
    { icon: Award, title: "Excellence", description: "We maintain the highest standards in everything we do." },
  ];

  const team = [
    { name: "Dr. Priya Sharma", role: "Founder & CEO", image: "/team/priya.jpg" },
    { name: "Rajesh Kumar", role: "Head of Curriculum", image: "/team/rajesh.jpg" },
    { name: "Ananya Patel", role: "Director of Operations", image: "/team/ananya.jpg" },
    { name: "Vikram Reddy", role: "Lead Instructor", image: "/team/vikram.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-[#3D5AFE]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#00E5FF]/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About <span className="bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF] bg-clip-text text-transparent">Learncrew</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Transforming education through innovation, personalization, and a passion for learner success since 2018.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 mb-4">
                Learncrew was founded in Bangalore with a simple yet powerful vision: to make quality education accessible to everyone. We started as a small tutoring center and have grown into a comprehensive learning platform.
              </p>
              <p className="text-gray-400">
                Today, we've helped thousands of learners achieve their goals through personalized instruction, cutting-edge curriculum, and a supportive community that believes in the power of education.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3D5AFE]/20 to-transparent border border-white/10">
                <Target className="w-8 h-8 text-[#3D5AFE] mb-3" />
                <h3 className="text-2xl font-bold mb-1">50+</h3>
                <p className="text-sm text-gray-400">Courses Offered</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-transparent border border-white/10">
                <Users className="w-8 h-8 text-[#00E5FF] mb-3" />
                <h3 className="text-2xl font-bold mb-1">10,000+</h3>
                <p className="text-sm text-gray-400">Students Trained</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FF4081]/20 to-transparent border border-white/10">
                <Award className="w-8 h-8 text-[#FF4081] mb-3" />
                <h3 className="text-2xl font-bold mb-1">95%</h3>
                <p className="text-sm text-gray-400">Success Rate</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3D5AFE]/20 to-transparent border border-white/10">
                <Eye className="w-8 h-8 text-[#3D5AFE] mb-3" />
                <h3 className="text-2xl font-bold mb-1">6+</h3>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#3D5AFE]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass border border-white/10"
            >
              <Target className="w-12 h-12 text-[#3D5AFE] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400">
                Providing accessible, high-quality education to help students succeed in their academic and professional journeys through personalized learning experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl glass border border-white/10"
            >
              <Eye className="w-12 h-12 text-[#00E5FF] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400">
                Empowering learners to achieve their full potential through innovative education and cutting-edge technology, creating a community of lifelong learners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              These principles guide everything we do at Learncrew.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3D5AFE]/50 transition-all group"
              >
                <value.icon className="w-10 h-10 text-[#3D5AFE] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Passionate educators dedicated to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-[#3D5AFE]/50 transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#3D5AFE] to-[#00E5FF] flex items-center justify-center text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

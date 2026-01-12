"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const faqs = [
    { q: "What courses do you offer?", a: "We offer courses in Full-Stack Development, UI/UX Design, Data Science, Mobile Development, Digital Marketing, and Cloud/DevOps." },
    { q: "How long are the programs?", a: "Program durations vary from 1-6 months depending on the course and your learning pace." },
    { q: "Do you provide job placement support?", a: "Yes! We have a 95% placement rate with 50+ hiring partners." },
    { q: "Can I pay in installments?", a: "Yes, we offer flexible EMI options with 0% interest." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-16"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#00E5FF]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-[#3D5AFE]/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get in <span className="bg-gradient-to-r from-[#00E5FF] to-[#3D5AFE] bg-clip-text text-transparent">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Reach out and let's start your learning journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#3D5AFE] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#3D5AFE] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#3D5AFE] focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#3D5AFE] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your learning goals..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3D5AFE] to-[#00E5FF] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a
                    href="tel:+918012345678"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#3D5AFE]/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#3D5AFE]/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#3D5AFE]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="font-medium">+91 80 1234 5678</div>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@learncrew.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#00E5FF]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="font-medium">hello@learncrew.com</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-[#FF4081]/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#FF4081]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="font-medium">Bangalore, India</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Office Hours</div>
                      <div className="font-medium">Mon - Sat: 9AM - 6PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-48 rounded-2xl bg-gradient-to-br from-[#3D5AFE]/20 to-[#00E5FF]/20 border border-white/10 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-white/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[#3D5AFE]/5 to-transparent">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Quick answers to common questions.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="font-medium text-left">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 text-gray-400 text-sm">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

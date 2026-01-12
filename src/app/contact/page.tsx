"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, ChevronDown, MessageSquare, CheckCircle } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function GridOverlay() {
    return (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:60px_60px] pointer-events-none z-0" />
    );
}

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-[#00FFCC]/50 text-center"
            >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00FFCC]/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#00FFCC]" />
                </div>
                <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mb-2">Thank You!</h3>
                <p className="text-gray-400 mb-6">We've received your message and will get back to you within 24 hours.</p>
                <button
                    onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", course: "", message: "" });
                    }}
                    className="text-[#00FFCC] underline hover:no-underline"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:border-[#00FFCC] focus:outline-none transition-colors"
                    placeholder="Your name"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:border-[#00FFCC] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:border-[#00FFCC] focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm text-gray-400 mb-2">Interested Course</label>
                <div className="relative">
                    <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white focus:border-[#00FFCC] focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                        <option value="" className="bg-black">Select a course</option>
                        <option value="fullstack" className="bg-black">Full-Stack Development</option>
                        <option value="uiux" className="bg-black">UI/UX Design</option>
                        <option value="datascience" className="bg-black">Data Science</option>
                        <option value="mobile" className="bg-black">Mobile Development</option>
                        <option value="devops" className="bg-black">Cloud & DevOps</option>
                        <option value="marketing" className="bg-black">Digital Marketing</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
            </div>

            <div>
                <label className="block text-sm text-gray-400 mb-2">Message *</label>
                <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:border-[#00FFCC] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your goals..."
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#00FFCC] text-black font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(0,255,204,0.4)] transition-shadow disabled:opacity-50"
            >
                {isSubmitting ? (
                    "Sending..."
                ) : (
                    <>
                        Send Message
                        <Send className="w-5 h-5" />
                    </>
                )}
            </button>
        </form>
    );
}

function ContactInfo() {
    const contactItems = [
        {
            icon: Phone,
            label: "Phone",
            value: "+91 80 1234 5678",
            href: "tel:+918012345678",
        },
        {
            icon: Mail,
            label: "Email",
            value: "hello@learncrew.com",
            href: "mailto:hello@learncrew.com",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Koramangala, Bangalore 560034",
            href: null,
        },
        {
            icon: Clock,
            label: "Office Hours",
            value: "Mon - Sat: 9AM - 7PM",
            href: null,
        },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mb-4">Contact Information</h2>
            <p className="text-gray-400 mb-8">
                Have questions? Reach out to us through any of these channels. We typically respond within a few hours.
            </p>

            <div className="space-y-4">
                {contactItems.map((item) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#00FFCC]/50 transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#00FFCC]/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-6 h-6 text-[#00FFCC]" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-400">{item.label}</div>
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="font-medium hover:text-[#00FFCC] transition-colors"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <div className="font-medium">{item.value}</div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-48 mt-8 rounded-2xl bg-gradient-to-br from-[#00FFCC]/10 to-transparent border border-white/10 flex items-center justify-center"
            >
                <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-[#00FFCC]/50" />
                    <p className="text-sm text-gray-500">Interactive Map</p>
                </div>
            </motion.div>
        </div>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "What are the batch sizes?",
            a: "We maintain small batch sizes of maximum 15 students to ensure personalized attention and better learning outcomes.",
        },
        {
            q: "Do you provide placement assistance?",
            a: "Yes! We have a dedicated placement cell with 50+ hiring partners. Our placement rate is 95%.",
        },
        {
            q: "Can I pay in installments?",
            a: "Absolutely. We offer flexible EMI options with 0% interest. Contact us for details.",
        },
        {
            q: "What if I miss a class?",
            a: "All sessions are recorded. You'll have lifetime access to course materials and recordings.",
        },
    ];

    return (
        <section className="relative py-24 px-6">
            <GridOverlay />
            <div className="relative z-20 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 text-[#00FFCC]" />
                    <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold mb-4">Frequently Asked Questions</h2>
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
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-left"
                            >
                                <span className="font-medium">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-[#00FFCC] transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    className="px-6 py-4 text-gray-400 text-[clamp(0.875rem,1.5vw,1rem)] border-t border-white/10"
                                >
                                    {faq.a}
                                </motion.div>
                            )}
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
                className="relative min-h-[40vh] flex items-center justify-center px-6 pt-32 pb-16"
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
                        Get in <span className="text-[#00FFCC]">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-400 max-w-2xl mx-auto"
                    >
                        Ready to start your learning journey? We'd love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-24 px-6">
                <GridOverlay />
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mb-6">Send us a Message</h2>
                            <ContactForm />
                        </motion.div>

                        {/* Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ContactInfo />
                        </motion.div>
                    </div>
                </div>
            </section>

            <FAQSection />
        </div>
    );
}

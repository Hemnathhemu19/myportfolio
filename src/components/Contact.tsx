import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: '' }));
        }
    };

    return (
        <section id="contact" className="relative w-full py-24 bg-black flex justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Column: Contact Info */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-2">Get in Touch</h4>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's work together.</h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Building a product? refactoring a legacy system? or just want to chat about design? I'd love to hear from you.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Mail className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email me at</p>
                                <a href="mailto:hemnathhemu19m@gmail.com" className="text-white hover:text-blue-400 transition-colors">hemnathhemu19m@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <MapPin className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Based in</p>
                                <p className="text-white">India (Available Remote)</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex gap-4 pt-4"
                    >
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/hemnathm-seospecialist" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://x.com/HemnathHemu19" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full bg-black/30 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full bg-black/30 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Subject (Optional)</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`w-full bg-black/30 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none`}
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || isSuccess}
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${isSuccess
                                ? 'bg-green-500 text-white cursor-default'
                                : 'bg-white text-black hover:bg-gray-200'
                                }`}
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : isSuccess ? (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                        <p className="text-xs text-center text-gray-500 mt-4">
                            I usually reply within 24–48 hours.
                        </p>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}

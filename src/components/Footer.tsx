import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-tight">HEMNATH MH</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Designing user-focused experiences with clarity and purpose.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#works" className="hover:text-blue-400 transition-colors">Work</a></li>
                            <li><a href="#tools" className="hover:text-blue-400 transition-colors">Skills</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/hemnathm-seospecialist" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="https://x.com/HemnathHemu19" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="mailto:hemnathhemu19m@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info (Optional extra column or merged) */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Get in Touch</h4>
                        <p className="text-gray-400 text-sm">
                            hemnathhemu19m@gmail.com
                        </p>
                        <p className="text-gray-400 text-sm">
                            India (Remote Available)
                        </p>
                    </div>

                </div>

                {/* Divider & Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {currentYear} Hemnath MH. All rights reserved.</p>
                    <p>Designed & Built with ❤️</p>
                </div>

            </div>
        </footer>
    );
}

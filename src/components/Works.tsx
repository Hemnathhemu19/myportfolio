import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
    {
        id: 1,
        title: 'Smart Expense Tracker',
        category: 'Product Design · UI/UX · Data Visualization',
        description: 'Redesigning a personal finance app to help users track expenses, understand spending patterns, and make smarter financial decisions through clean visuals and actionable insights.',
        tags: ['UX Research', 'UI Design', 'Interaction Design', 'Financial UX'],
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'SEO Analytics Dashboard',
        category: 'SEO · Data UX · Dashboard Design',
        description: 'Designing an SEO analytics dashboard that transforms complex ranking, traffic, and keyword data into simple, decision-driven visual insights for marketers and founders.',
        tags: ['SEO Strategy', 'Data Visualization', 'UX for Analytics', 'Dashboard UI'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Restaurant Website Redesign',
        category: 'Website Redesign · Conversion UX',
        description: 'Redesigning a restaurant website to improve brand perception, increase online orders, and guide users seamlessly from menu discovery to checkout.',
        tags: ['UX Research', 'UI Design', 'Conversion Optimization', 'Website Design'],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Learning & Flashcard Platform',
        category: 'EdTech · UX Strategy · Product Design',
        description: 'Designing a flashcard-based learning platform focused on habit-building, spaced repetition, and progress tracking to help students study effectively.',
        tags: ['UX Strategy', 'UI Design', 'User Personas', 'EdTech Design'],
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop',
    },
];

export default function Works() {
    return (
        <section id="works" className="relative w-full py-24 bg-black flex flex-col items-center">

            {/* Section Header */}
            <div className="md:mb-20 mb-12 text-center px-4">
                <h4 className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-2">Selected Works</h4>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Case Studies
                </h2>
            </div>

            {/* Vertical Card Stack */}
            <div className="w-full max-w-6xl px-6 flex flex-col gap-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] overflow-hidden flex flex-col md:flex-row shadow-2xl hover:bg-white/10 transition-colors duration-500"
                    >
                        {/* Left: 40% Image (Adjusted for better balance in vertical layout) */}
                        <div className="w-full md:w-[40%] h-64 md:h-auto relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Right: 60% Content */}
                        <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center relative">
                            <div className="space-y-4">
                                <span className="text-xs font-semibold text-blue-300 tracking-wider uppercase">{project.category}</span>

                                <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="pt-6">
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all duration-300 group-hover:translate-x-2">
                                        View Project
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

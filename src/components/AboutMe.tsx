import { Code2, Palette, Megaphone, Terminal, Cpu, Globe, Search, LayoutTemplate } from 'lucide-react';
import TiltedCard from './TiltedCard';

export default function AboutMe() {
    const skills = [
        { icon: <Palette className="w-6 h-6 text-purple-400" />, title: 'UI/UX Design', desc: 'Figma, Prototyping' },
        { icon: <Search className="w-6 h-6 text-blue-400" />, title: 'SEO Strategy', desc: 'Keyword Research, Analytics' },
        { icon: <Code2 className="w-6 h-6 text-green-400" />, title: 'Frontend', desc: 'React, Tailwind CSS' },
    ];

    const tools = [
        { icon: <LayoutTemplate className="w-5 h-5" />, name: 'Figma' },
        { icon: <Globe className="w-5 h-5" />, name: 'Google Analytics' },
        { icon: <Search className="w-5 h-5" />, name: 'Ahrefs' },
        { icon: <Terminal className="w-5 h-5" />, name: 'VS Code' },
        { icon: <Cpu className="w-5 h-5" />, name: 'ChatGPT / AI' },
        { icon: <Megaphone className="w-5 h-5" />, name: 'Google Ads' },
    ];

    return (
        <section id="about-me" className="relative w-full min-h-screen bg-black/90 text-white py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

            {/* Left: 30% - Profile Card (now TiltedCard) */}
            <div className="w-full md:w-[350px] flex justify-center z-10">
                <TiltedCard
                    imageSrc="/hemnath-profile.jpg"
                    altText="HEMNATH MH - UI/UX Designer"
                    captionText="HEMNATH MH - Portfolio"
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    imgClassName="grayscale contrast-125 brightness-90"
                    overlayContent={
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <h3 className="text-xl font-bold">HEMNATH MH</h3>
                        </div>
                    }
                />
            </div>

            {/* Right: 70% - Content */}
            <div className="w-full md:w-2/3 max-w-4xl space-y-10 z-10">

                {/* Headings */}
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Introduction</h4>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        About Me
                    </h2>
                </div>

                {/* Bio */}
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                    I am a <span className="text-white font-medium">UI/UX Designer</span> and <span className="text-white font-medium">Digital Marketing (SEO) Specialist</span> from India.
                    I specialize in crafting user-centric digital experiences that are not only visually stunning but also scientifically optimized for search engines.
                    My approach blends creative design thinking with data-driven marketing strategies to help brands build a strong, discoverable online presence.
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                            <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                            <p className="text-sm text-gray-400">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tools */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-200">Tools I Use</h3>
                    <div className="flex flex-wrap gap-4">
                        {tools.map((tool, index) => (
                            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-blue-400/50 hover:bg-blue-400/10 transition-colors duration-300">
                                {tool.icon}
                                <span>{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

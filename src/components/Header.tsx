import { ArrowUpRight } from 'lucide-react';

export default function Header() {
    const tabs = ['ABOUT ME', 'WORKS', 'TOOLS', 'CONTACT'];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 px-8 flex justify-between items-center bg-black/5 backdrop-blur-md border border-white/5 rounded-2xl mx-6 h-16 text-white overflow-hidden">
            {/* Absolute background blur layer for better depth */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl -z-10" />

            {/* Left Section: Name */}
            <div className="flex-1 font-bold text-lg tracking-wider z-10">
                Hemnath
            </div>

            {/* Center Section: Tabs */}
            <nav className="flex-1 hidden md:flex justify-center items-center gap-8 z-10">
                {tabs.map((tab) => (
                    <a
                        key={tab}
                        href={`#${tab.toLowerCase().replace(' ', '-')}`}
                        className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
                    >
                        [{tab}]
                    </a>
                ))}
            </nav>

            {/* Right Section: Contact Me */}
            <div className="flex-1 flex justify-end items-center z-10">
                <a
                    href="#contact"
                    className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors duration-300 group"
                >
                    Contact Me
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
            </div>
        </header>
    );
}

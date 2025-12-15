import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Slack,
  Figma,
  Globe,
  MessageCircle,
  NotebookText,
  Code2,
  Video,
  Sparkles,
} from "lucide-react";

const toolsLeft = [
  { id: 1, name: "Slack", icon: Slack, category: "Collaboration" },
  { id: 2, name: "Jitter", icon: Sparkles, category: "Motion Design" },
  { id: 3, name: "Figma", icon: Figma, category: "UI/UX Design" },
  { id: 4, name: "Webflow", icon: Globe, category: "Development" },
];

const toolsRight = [
  { id: 5, name: "ChatGPT", icon: MessageCircle, category: "AI Research" },
  { id: 6, name: "Notion", icon: NotebookText, category: "Documentation" },
  { id: 7, name: "React", icon: Code2, category: "Frontend" },
  { id: 8, name: "Google Meet", icon: Video, category: "Communication" },
];

export default function Tools() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen py-24 bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="text-center z-10 mb-20 px-4">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
          The tools powering my work
        </h2>
      </div>

      {/* Spider Layout Container */}
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
        {/* SVG Overlay for Connections (Refined Approach) */}
        <div className="absolute inset-0 hidden md:block w-full h-[800px] pointer-events-none top-1/2 -translate-y-1/2">
          <svg viewBox="0 0 1200 800" className="w-full h-full opacity-30">
            {/* Left Connections - Adjusted control points for wider layout */}
            {toolsLeft.map((_, i) => (
              <motion.path
                key={`left-path-${i}`}
                d={`M 200 ${120 + i * 160} C 400 ${
                  120 + i * 160
                }, 400 400, 600 400`}
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
              />
            ))}
            {/* Right Connections - Adjusted control points for wider layout */}
            {toolsRight.map((_, i) => (
              <motion.path
                key={`right-path-${i}`}
                d={`M 1000 ${120 + i * 160} C 800 ${
                  120 + i * 160
                }, 800 400, 600 400`}
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
              />
            ))}
          </svg>
        </div>

        {/* Left Column */}
        <div className="flex flex-col gap-16 z-10 w-full md:w-1/3 items-center md:items-start pl-0 md:pl-10">
          {toolsLeft.map((tool, i) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 group">
                <div className="w-20 h-20 rounded-2xl bg-white border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-gray-900" />
                </div>

                <div className="hidden md:block">
                  <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                  <p className="text-sm text-gray-500">{tool.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Profile */}
        <div className="z-20 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 my-10 md:my-0">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-white/5 bg-black/50 overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.1)]">
            <img
              src="/hemnath-profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full ring-1 ring-white/20 animate-pulse" />
          </motion.div>
          {/* Sims-like generic creativity gem floating above maybe? Just a subtle glow for now */}
        </div>

        {/* Right Column */}
        <div
          className="flex flex-col gap-16 z-10 w-full md:w-1/3 items-center md:items-end pr-0 md:pr-10"
          dir="rtl">
          {/* dir=rtl for easier right alignment visually, but flex-items-end works too. 
                     Let's stick to flex manipulation to avoid text direction issues.
                  */}
          {toolsRight.map((tool, i) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 group flex-row-reverse">
                <div className="w-20 h-20 rounded-2xl bg-white border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-gray-900" />
                </div>

                <div className="hidden md:block text-right">
                  <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                  <p className="text-sm text-gray-500">{tool.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

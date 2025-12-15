import Galaxy from './components/Galaxy';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pointer-events-none px-4">
        <div className="pointer-events-auto text-center space-y-6 max-w-3xl mx-auto mt-20">
          <h2 className="text-xl md:text-2xl font-light text-gray-300 tracking-wide animate-fade-in-up">
            Hi! I’m Hemnath <span className="inline-block animate-wave">👋</span>
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 pb-2">
            UI/UX Designer & <br className="hidden md:block" /> SEO Specialist
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I design intuitive digital experiences and optimize them for visibility.
            Blending user-centered design with data-driven SEO to create products that are
            not only beautiful—but discoverable and effective.
          </p>
        </div>
      </div>

      {/* About Me Section */}
      <AboutMe />

      {/* Works Section */}
      <Works />

      {/* Tools Section */}
      <Tools />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;

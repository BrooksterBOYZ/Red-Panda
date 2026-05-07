import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function RedPandaWebsite() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth Scroll Handler
  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    { id: 'yoga', icon: '🧘', title: 'Sunrise Yoga', desc: 'Flow through peaceful sessions beside playful red pandas.', color: 'from-orange-500 to-red-500' },
    { id: 'forest', icon: '🌲', title: 'Sky Bridges', desc: 'Explore hanging pathways and immersive waterfalls.', color: 'from-emerald-500 to-teal-400' },
    { id: 'cafe', icon: '☕', title: 'Bamboo Café', desc: 'Nature-inspired comfort spaces and artisan pastries.', color: 'from-rose-400 to-orange-300' },
  ];

  const faqs = [
    { q: "Are the pandas free to roam?", a: "Yes! Our sanctuary is designed with overhead 'Panda Highways' so they can move above guest areas safely." },
    { q: "Can I pet the red pandas?", a: "To ensure their well-being, we offer 'Close Encounters' where you can feed them under expert supervision, but we do not allow direct petting." },
    { q: "What should I bring for yoga?", a: "We provide eco-friendly bamboo mats and towels. Just bring comfortable clothes and your zen!" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF9] text-slate-900 selection:bg-red-200 scroll-smooth">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 z-[100] origin-left" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl px-6 py-3 flex items-center justify-between shadow-xl shadow-red-900/5">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-3xl">🦊</span>
            <span className="font-black text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">VELVET</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
            {['Experiences', 'Park', 'Gallery', 'Membership', 'FAQ'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-red-500 transition-colors">
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('visit')}
              className="bg-red-600 text-white px-6 py-2.5 rounded-2xl text-sm font-bold shadow-lg shadow-red-200"
            >
              Reserve Now
            </motion.button>
            
            {/* Mobile Toggle */}
            <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-6 right-6 bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col gap-6 font-bold text-center md:hidden"
            >
              {['Experiences', 'Park', 'Gallery', 'Membership', 'FAQ'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-xl">{item}</button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-black uppercase tracking-widest mb-6">✨ 2026 Season Open</div>
            <h1 className="text-7xl md:text-8xl font-black leading-none mb-8">Reconnect with <span className="text-orange-500 italic">Nature.</span></h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">Experience the world's premier red panda sanctuary. Luxury stays, mindful yoga, and the quiet magic of the bamboo forest.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('visit')} className="px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-bold text-lg shadow-2xl hover:bg-red-600 transition-colors">Book a Retreat</button>
              <button onClick={() => scrollTo('experiences')} className="px-10 py-5 bg-white border-2 border-slate-100 rounded-[2rem] font-bold text-lg hover:border-red-200 transition-colors">Our Experiences</button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative">
            <div className="aspect-square rounded-[4rem] bg-gradient-to-tr from-red-100 to-orange-50 flex items-center justify-center text-[15rem] shadow-inner relative overflow-hidden group">
               <motion.span animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }}>🦊</motion.span>
               <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold text-white uppercase tracking-widest">View 360° Tour</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section id="experiences" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Signature Retreats</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <motion.div key={exp.id} whileHover={{ y: -10 }} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-red-900/5 border border-slate-50">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl mb-8 shadow-lg`}>{exp.icon}</div>
                <h3 className="text-2xl font-black mb-4">{exp.title}</h3>
                <p className="text-slate-500 mb-8">{exp.desc}</p>
                <button onClick={() => scrollTo('visit')} className="font-bold text-red-600 hover:underline">Check Availability →</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 italic">Panda Questions?</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-3xl p-6 border border-slate-200 cursor-pointer shadow-sm">
                <summary className="font-bold text-lg list-none flex justify-between items-center group-open:text-red-600">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form (The Destination) */}
      <section id="visit" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 blur-[100px]" />
          <h2 className="text-5xl font-black mb-6">Start Your Escape.</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">Leave your details and our retreat planners will craft your perfect red panda experience.</p>
          
          <form className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-500" />
            <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-500" />
            <button className="md:col-span-2 bg-red-600 py-5 rounded-2xl font-black text-xl hover:bg-red-500 transition-colors shadow-2xl shadow-red-900/40">Request Invite</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors">↑</button>
          </div>
          <p className="text-slate-400 font-medium">© 2026 Velvet Panda Sanctuary • Designed for Comfort</p>
        </div>
      </footer>
    </div>
  );
}

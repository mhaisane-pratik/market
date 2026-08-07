import React from 'react';
import { ExternalLink, Sparkles, FolderCheck, Send, PhoneCall } from 'lucide-react';

export const ProjectCategories: React.FC = () => {
  const featuredDemos = [
    {
      title: 'College Event Management System',
      description: 'Complete student event registration, ticketing, schedule management, and admin dashboard portal.',
      liveUrl: 'https://college-two-alpha.vercel.app/',
      image: '/event_demo.jpg',
      badge: 'Live Working Demo',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Hostel & PG Accommodation System',
      description: 'Full-featured student PG room finder, booking engine, rent payment calculator, and landlord management.',
      liveUrl: 'https://pg-seven-opal.vercel.app/',
      image: '/pg_demo.jpg',
      badge: 'Live Working Demo',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    },
  ];

  const categories = [
    { title: 'E-Commerce Website', tech: 'React / MERN Stack' },
    { title: 'Hospital Management System', tech: 'Java Spring Boot / Python' },
    { title: 'Student Management System', tech: 'PHP MySQL / Java' },
    { title: 'Attendance Management', tech: 'Android / Python Face Recognition' },
    { title: 'Online Examination System', tech: 'React / Node.js' },
    { title: 'Inventory Management System', tech: 'Django / MySQL' },
    { title: 'Hotel Booking System', tech: 'MERN / Next.js' },
    { title: 'Food Delivery System', tech: 'Flutter / React Native' },
    { title: 'Gym Management System', tech: 'PHP Laravel / MySQL' },
    { title: 'Pharmacy Management System', tech: 'Java Swing / Spring Boot' },
    { title: 'Portfolio Website', tech: 'React.js / Tailwind CSS' },
    { title: 'AI-Based Projects', tech: 'Python OpenAI / Machine Learning' },
    { title: 'IoT Projects', tech: 'Arduino / Raspberry Pi / Python' },
    { title: 'Machine Learning Projects', tech: 'Python Scikit-Learn / TensorFlow' },
  ];

  const whatsappBaseUrl = "https://wa.me/919373372183?text=";
  const phoneUrl = "tel:+919373372183";

  return (
    <section id="categories" className="py-14 md:py-20 relative bg-slate-950 overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            Ready-Made Projects
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Live Project Demos</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Tap to preview live working projects. WhatsApp or Call us to get source code & negotiate prices (₹500 – ₹3,000)!
          </p>
        </div>

        {/* Featured Live Demos */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {featuredDemos.map((demo, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-indigo-500/40 overflow-hidden hover:border-indigo-500 transition-all glow-card flex flex-col justify-between"
              >
                <div>
                  {/* Photo Preview */}
                  <a
                    href={demo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group overflow-hidden bg-slate-900 aspect-video"
                  >
                    <img
                      src={demo.image}
                      alt={demo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs">
                      <span className="px-3.5 py-1.5 rounded-xl bg-indigo-600 shadow-xl flex items-center gap-1.5">
                        <span>Open Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                      <span>{demo.badge}</span>
                    </div>
                  </a>

                  {/* Card Content */}
                  <div className="p-5 space-y-2">
                    <h4 className="text-lg font-bold text-white hover:text-indigo-300 transition-colors">
                      <a href={demo.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2">
                        <span>{demo.title}</span>
                        <ExternalLink className="h-4 w-4 text-indigo-400 shrink-0" />
                      </a>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {demo.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {demo.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-800 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <a
                    href={demo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Launch Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={`${whatsappBaseUrl}Hi%20Student%20Project%20Hub,%20I%20want%20source%20code%20details%20for%20${encodeURIComponent(demo.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-1 transition-all"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Categories Grid */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
            <FolderCheck className="h-5 w-5 text-indigo-400" />
            <span>More Project Categories</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="glass-panel p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/50 glow-card flex flex-col justify-between space-y-2"
              >
                <div>
                  <h4 className="text-xs font-bold text-white">{cat.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">{cat.tech}</p>
                </div>
                <div className="flex items-center gap-1.5 pt-1">
                  <a
                    href={`${whatsappBaseUrl}Hi%20Student%20Project%20Hub,%20I%20want%20a%20project%20for%20${encodeURIComponent(cat.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1"
                  >
                    <Send className="h-3 w-3" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={phoneUrl}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px]"
                    title="Call"
                  >
                    <PhoneCall className="h-3 w-3 text-indigo-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

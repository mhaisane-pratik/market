import React from 'react';
import { ExternalLink, Sparkles, FolderCheck, Send, Eye } from 'lucide-react';

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

  return (
    <section id="categories" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            Ready-Made Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready-Made Project <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore our pre-built ready-to-deploy projects with instant live preview demos, source code, and full reports.
          </p>
        </div>

        {/* Featured Live Demos */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Eye className="h-6 w-6 text-emerald-400" />
              <span>Featured Live Project Demos (Click to Preview)</span>
            </h3>
            <span className="text-xs font-mono px-3 py-1 bg-emerald-950 border border-emerald-800 text-emerald-400 rounded-full">
              2 LIVE WEBSITES AVAILABLE
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredDemos.map((demo, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-3xl border border-indigo-500/40 overflow-hidden hover:border-indigo-500 transition-all glow-card flex flex-col justify-between"
              >
                <div>
                  {/* Photo / Image Preview with Click Trigger */}
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
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                      <span className="px-4 py-2 rounded-xl bg-indigo-600 shadow-xl flex items-center gap-2">
                        <span>Open Live Demo</span>
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                      <span>{demo.badge}</span>
                    </div>
                  </a>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h4 className="text-xl font-bold text-white hover:text-indigo-300 transition-colors">
                      <a href={demo.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>{demo.title}</span>
                        <ExternalLink className="h-4 w-4 text-indigo-400 shrink-0" />
                      </a>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {demo.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {demo.tech.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded text-[11px] bg-slate-900 border border-slate-800 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <a
                    href={demo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={`${whatsappBaseUrl}Hi%20Student%20Project%20Hub,%20I%20want%20source%20code%20and%20details%20for%20${encodeURIComponent(demo.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Get Source Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Categories Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <FolderCheck className="h-5 w-5 text-indigo-400" />
            <span>More Available Ready-Made Project Categories</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-indigo-500/50 glow-card flex flex-col justify-between space-y-3"
              >
                <div>
                  <h4 className="text-sm font-bold text-white">{cat.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">{cat.tech}</p>
                </div>
                <a
                  href={`${whatsappBaseUrl}Hi%20Student%20Project%20Hub,%20I%20need%20a%20project%20for%20${encodeURIComponent(cat.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="h-3 w-3" />
                  <span>Request Project</span>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <p className="text-sm text-slate-400 italic">
              And many more custom topics available on request!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

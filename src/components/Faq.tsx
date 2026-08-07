import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqItems = [
    {
      question: 'How long does it take?',
      answer: 'Usually 2–10 days depending on project complexity. Mini projects are delivered in 2–4 days, while full final-year custom applications take around 5–10 days.',
    },
    {
      question: 'Will I receive the source code?',
      answer: 'Yes, complete source code is provided with zero lock-in or restriction. You get full access to edit, run, and modify the project files.',
    },
    {
      question: 'Do you provide documentation?',
      answer: 'Yes, comprehensive report, PPT presentation deck, SRS document, UML diagrams (ER, Use Case, Sequence), and Viva preparation guidance are available.',
    },
    {
      question: 'Can you modify existing projects?',
      answer: 'Yes, projects can be customized according to your specific college requirements, feature requests, or UI design changes.',
    },
    {
      question: 'Do you provide support after delivery?',
      answer: 'Yes! Installation support via AnyDesk / TeamViewer, IDE setup, database configuration, and basic technical explanation are fully included.',
    },
  ];

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative bg-slate-900/30 border-y border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? <span className="text-gradient">We Have Answers</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about our academic project delivery & support.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs (e.g., source code, documentation, timeline)..."
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-slate-800/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-indigo-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-indigo-950 text-indigo-300' : ''
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              No matching questions found for "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

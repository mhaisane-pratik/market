import React, { useState } from 'react';
import { 
  Send, 
  UploadCloud, 
  FileText, 
  X, 
  CheckCircle2, 
  Clock, 
  Calculator, 
  Sparkles, 
  User, 
  Building2, 
  ShieldCheck,
  MessageSquare,
  Tag
} from 'lucide-react';

export const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    mobile: '',
    collegeName: '',
    course: 'BCA',
    projectType: 'Mini Project',
    technology: 'Java',
    projectTitle: '',
    submissionDate: '',
    budget: '₹500 - ₹1,500',
    projectDescription: '',
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedModalOpen, setSubmittedModalOpen] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const courses = ['Diploma', 'BCA', 'MCA', 'B.Tech', 'BE', 'Other'];
  const projectTypes = ['Mini Project', 'Final Year Project', 'Major Project', 'Custom Project'];
  const technologies = ['Java', 'Spring Boot', 'React.js', 'Next.js', 'Node.js', 'Python', 'Flutter', 'PHP', 'AI/ML', 'Other'];
  const budgetRanges = [
    '₹500 - ₹1,000 (Mini Project)',
    '₹1,000 - ₹2,000 (Standard Project)',
    '₹2,000 - ₹3,000 (Major / Final Year)',
    'Flexible / Discuss on WhatsApp',
  ];

  const getEstimatedPriceRange = () => {
    if (formData.projectType === 'Mini Project') {
      return '₹500 - ₹1,200';
    } else if (formData.projectType === 'Final Year Project' || formData.projectType === 'Major Project') {
      return '₹1,500 - ₹2,500';
    } else {
      return '₹2,000 - ₹3,000';
    }
  };

  const getEstimatedTimeline = () => {
    if (formData.projectType === 'Mini Project') {
      return '1 – 3 Days';
    } else {
      return '3 – 5 Days';
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedTicket = 'SPH-' + Math.floor(100000 + Math.random() * 900000);
      setTicketId(generatedTicket);
      setSubmittedModalOpen(true);
    }, 1000);
  };

  return (
    <section id="submit-project" className="py-20 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Quick Request
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Submit Your <span className="text-gradient">Requirement</span>
          </h2>
          <p className="text-slate-400 text-base">
            Tell us what project you need. Affordable pricing from ₹500 to ₹3,000.
          </p>
        </div>

        {/* Form + Estimator */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Form */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                  <User className="h-4 w-4 text-indigo-400" />
                  <span>1. Contact Info</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Student Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Course & Project Type */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                  <Building2 className="h-4 w-4 text-purple-400" />
                  <span>2. Course & Technology</span>
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Course <span className="text-rose-400">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course) => (
                      <button
                        type="button"
                        key={course}
                        onClick={() => setFormData((prev) => ({ ...prev, course }))}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                          formData.course === course
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Project Type <span className="text-rose-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projectTypes.map((ptype) => (
                      <button
                        type="button"
                        key={ptype}
                        onClick={() => setFormData((prev) => ({ ...prev, projectType: ptype }))}
                        className={`p-2.5 rounded-xl text-center border transition-all text-xs font-bold ${
                          formData.projectType === ptype
                            ? 'bg-purple-950 border-purple-500 text-white shadow-md'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {ptype}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Technology Stack <span className="text-rose-400">*</span>
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {technologies.map((tech) => (
                      <button
                        type="button"
                        key={tech}
                        onClick={() => setFormData((prev) => ({ ...prev, technology: tech }))}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          formData.technology === tech
                            ? 'bg-cyan-950 border-cyan-500 text-cyan-200'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <span>3. Requirements & Budget</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Topic / Title
                    </label>
                    <input
                      type="text"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      placeholder="e.g. Event Management System"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Upload File / Guidelines (Optional)
                  </label>
                  {!attachedFile ? (
                    <label className="border border-dashed border-slate-800 hover:border-indigo-500/60 rounded-xl p-4 flex items-center justify-center gap-2 cursor-pointer bg-slate-900/40 hover:bg-slate-900 transition-all text-xs font-semibold text-slate-300">
                      <UploadCloud className="h-4 w-4 text-indigo-400" />
                      <span>Attach College Document (PDF, DOCX)</span>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt,.png,.jpg"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-3 bg-slate-900 border border-indigo-500/40 rounded-xl text-xs">
                      <span className="font-semibold text-white">{attachedFile.name}</span>
                      <button
                        type="button"
                        onClick={() => setAttachedFile(null)}
                        className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Submit Requirement</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Estimator */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-5 sticky top-28">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-bold text-white text-base">Estimated Cost</h3>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                  BEST OFFER
                </span>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1 text-center">
                <span className="text-[11px] font-semibold uppercase text-slate-400 flex items-center justify-center gap-1">
                  <Tag className="h-3.5 w-3.5 text-emerald-400" />
                  Estimated Budget
                </span>
                <p className="text-2xl font-extrabold text-emerald-400">
                  {getEstimatedPriceRange()}
                </p>
                <p className="text-[11px] text-slate-400">
                  Includes Code + Report + PPT + Setup
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1 text-center">
                <span className="text-[11px] font-semibold uppercase text-slate-400 flex items-center justify-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-cyan-400" />
                  Fast Turnaround
                </span>
                <p className="text-lg font-bold text-white">
                  {getEstimatedTimeline()}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Free installation & Remote AnyDesk support</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-indigo-400" />
                  <span>100% Student satisfaction guarantee</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {submittedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-panel max-w-lg w-full p-8 rounded-3xl border border-emerald-500/50 shadow-2xl text-center space-y-5 relative">
            <button
              onClick={() => setSubmittedModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="h-14 w-14 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="h-8 w-8 text-slate-950" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-white">
                Requirement Submitted!
              </h3>
              <p className="text-xs text-slate-300">
                Ticket Reference: <span className="font-bold text-emerald-400">{ticketId}</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/919373372183?text=Hi%20Student%20Project%20Hub,%20I%20just%20submitted%20requirement%20ticket%20${ticketId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Discuss on WhatsApp (9373372183)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

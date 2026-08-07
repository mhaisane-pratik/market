import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCategories } from './components/ProjectCategories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Technologies } from './components/Technologies';
import { HowItWorks } from './components/HowItWorks';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white pb-16 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        {/* Featured Live Project Demos */}
        <ProjectCategories />
        <WhyChooseUs />
        <Services />
        <Technologies />
        <HowItWorks />
        <Faq />
        <Contact />
      </main>
      <Footer />
      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar />
    </div>
  );
}

export default App;

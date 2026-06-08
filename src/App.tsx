/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import TargetAudience from './components/TargetAudience';
import Organizers from './components/Organizers';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 overflow-hidden relative">
      <div className="fixed inset-0 bg-grid-tech pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Schedule />
          <TargetAudience />
          <Organizers />
        </main>
        <Footer />
      </div>
    </div>
  );
}

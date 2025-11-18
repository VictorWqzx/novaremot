
import React from 'react';
import { Navbar } from './widgets/Navbar';
import { Home } from './pages/Home';
import { Footer } from './widgets/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-500 selection:text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

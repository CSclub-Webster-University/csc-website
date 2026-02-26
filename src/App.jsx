import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-emerald-500/30">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Events />
        <Projects />

        <section id="contact" className="min-h-[40vh] flex flex-col items-center justify-center border-b border-slate-800 bg-slate-900/50 py-24 px-4">
          <h2 className="text-4xl font-bold text-slate-100 mb-6 text-center">Ready to Join?</h2>
          <p className="text-slate-400 mb-8 max-w-lg text-center">Become a part of Webster University's tech community today.</p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold py-4 px-10 rounded-full transition-all text-lg mb-4 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transform hover:scale-105">
            Sign Up Now
          </button>
          <a href="mailto:contact@csclub.example.com" className="text-emerald-400 hover:underline">contact@csclub.example.com</a>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App

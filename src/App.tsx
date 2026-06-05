import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Schedule from './components/Schedule'
import TargetAudience from './components/TargetAudience'
import Organizers from './components/Organizers'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Schedule />
        <TargetAudience />
        <Organizers />
      </main>
      <Footer />
    </div>
  )
}

export default App

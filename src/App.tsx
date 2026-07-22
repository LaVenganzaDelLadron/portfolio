import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './pages/hero/Hero';
import Background from './pages/backgorund/Background';
import Skill from './pages/skill/Skill';
import Project from './pages/project/Project';
import Certifcate from './pages/certificate/Certifcate';
import Bugbounty from './pages/bugbounty/Bugbounty';
import Contact from './pages/contact/Contact';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main id="home" className="main-content">
        <Hero />
        <Background />
        <Skill />
        <Project />
        <Certifcate />
        <Bugbounty />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;

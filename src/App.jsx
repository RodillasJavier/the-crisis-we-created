import HeroSection from './components/HeroSection.jsx';
import ScrollyContainer from './components/ScrollyContainer.jsx';
import ConclusionSection from './components/ConclusionSection.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <HeroSection />
        <ScrollyContainer />
        <ConclusionSection />
      </main>
    </>
  );
}

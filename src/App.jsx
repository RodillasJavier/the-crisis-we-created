import { useState, useRef, useCallback } from 'react';
import HeroSection from './components/HeroSection.jsx';
import ScrollyContainer from './components/ScrollyContainer.jsx';
import ConclusionSection from './components/ConclusionSection.jsx';
import './App.css';

const SCROLL_DURATION = 520;
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Center step `n` in the viewport, re-measuring the live DOM each frame so
// layout shifts (e.g. the chart remounting mid-scroll) can't strand the scroll.
function targetFor(n) {
  const el = document.getElementById(`step-${n}`);
  if (!el) return null;
  const absTop = el.getBoundingClientRect().top + window.scrollY;
  const raw = absTop + el.offsetHeight / 2 - window.innerHeight / 2;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  return Math.min(Math.max(0, raw), maxScroll);
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  // True while a programmatic scroll is in flight — suppresses scrollama fires
  const isProgrammatic = useRef(false);
  const rafId = useRef(null);

  const goToStep = useCallback((n) => {
    if (!document.getElementById(`step-${n}`)) return;

    // Update content immediately so chart + prose transition in right away
    setCurrentStep(n);
    isProgrammatic.current = true;
    if (rafId.current) cancelAnimationFrame(rafId.current);

    const startY = window.scrollY;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / SCROLL_DURATION);
      // Re-measure target every frame — immune to mid-scroll layout shifts
      const target = targetFor(n);
      if (target == null) return;
      window.scrollTo(0, startY + (target - startY) * easeInOutCubic(t));

      if (t < 1) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        // Final snap to the live target in case layout settled late
        const finalTarget = targetFor(n);
        if (finalTarget != null) window.scrollTo(0, finalTarget);
        rafId.current = null;
        // Re-assert the intended step, then release the scrollama lock
        setCurrentStep(n);
        setTimeout(() => { isProgrammatic.current = false; }, 60);
      }
    };
    rafId.current = requestAnimationFrame(tick);
  }, []);

  const handleStepChange = useCallback((n) => {
    if (!isProgrammatic.current) setCurrentStep(n);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content">
        <HeroSection onBegin={() => goToStep(1)} />
        <ScrollyContainer
          currentStep={currentStep}
          onStepChange={handleStepChange}
          goToStep={goToStep}
        />
        <ConclusionSection />
      </main>
    </>
  );
}

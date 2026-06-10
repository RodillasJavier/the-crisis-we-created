import { useState, useRef, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import StickyChart from './StickyChart.jsx';
import ProseStep from './ProseStep.jsx';
import './ScrollyContainer.css';

const TOTAL_STEPS = 7;

function StepNav({ currentStep, onPrev, onNext, visible }) {
  return (
    <div className={`step-nav${visible ? ' step-nav--visible' : ''}`} aria-label="Section navigation">
      <button
        className="step-nav__btn"
        onClick={onPrev}
        disabled={currentStep <= 1}
        aria-label="Previous section"
      >
        ↑
      </button>
      <span className="step-nav__counter">
        {String(currentStep).padStart(2, '0')}&thinsp;/&thinsp;{String(TOTAL_STEPS).padStart(2, '0')}
      </span>
      <button
        className="step-nav__btn"
        onClick={onNext}
        disabled={currentStep >= TOTAL_STEPS}
        aria-label="Next section"
      >
        ↓
      </button>
    </div>
  );
}

export default function ScrollyContainer({ currentStep, onStepChange, goToStep }) {
  const [navVisible, setNavVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Show nav only once the user has scrolled at least 80% through the hero
    // (one viewport height). Threshold: 0 would fire on even 1px of intersection
    // which happens before the hero is actually out of view.
    const check = () => {
      if (!containerRef.current) return;
      const { top, bottom } = containerRef.current.getBoundingClientRect();
      // Visible if the scrolly section has entered by at least 10% of its height
      const inView = top < window.innerHeight * 0.9 && bottom > 0;
      // But hide again once entirely below viewport (shouldn't happen) or above
      setNavVisible(inView && window.scrollY > window.innerHeight * 0.8);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <section className="scrolly-container" id="scrolly" ref={containerRef} aria-label="Interactive data sections">
      <div className="scrolly-sticky" aria-hidden="true">
        <StickyChart step={currentStep} />
      </div>

      <div className="scrolly-prose">
        <Scrollama onStepEnter={({ data }) => onStepChange(data)} offset={0.5}>
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <Step data={n} key={n}>
              <div id={`step-${n}`}>
                <ProseStep step={n} isActive={currentStep === n} />
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>

      <StepNav
        currentStep={currentStep}
        onPrev={() => goToStep(currentStep - 1)}
        onNext={() => goToStep(currentStep + 1)}
        visible={navVisible}
      />
    </section>
  );
}

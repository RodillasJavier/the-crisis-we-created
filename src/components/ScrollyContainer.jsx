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

export default function ScrollyContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [navVisible, setNavVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setNavVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const goToStep = (n) => {
    document.getElementById(`step-${n}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="scrolly-container" id="scrolly" ref={containerRef} aria-label="Interactive data sections">
      <div className="scrolly-sticky" aria-hidden="true">
        <StickyChart step={currentStep} />
      </div>

      <div className="scrolly-prose">
        <Scrollama onStepEnter={({ data }) => setCurrentStep(data)} offset={0.5}>
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

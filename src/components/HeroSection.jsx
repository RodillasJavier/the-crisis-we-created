import { useState, useEffect } from 'react';
import { useCountUp } from '../hooks/useCountUp.js';
import './HeroSection.css';

export default function HeroSection({ onBegin }) {
  const { value, isComplete } = useCountUp(213686, 1800);
  const [questionsVisible, setQuestionsVisible] = useState(false);

  useEffect(() => {
    if (isComplete) {
      const t = setTimeout(() => setQuestionsVisible(true), 200);
      return () => clearTimeout(t);
    }
  }, [isComplete]);

  return (
    <section className="hero-section" aria-labelledby="hero-stat">
      <div className="hero-inner">
        <p className="hero-eyebrow">United States — Honduras, 1980–2025</p>

        <div className="hero-stat-block">
          <span
            className="hero-count"
            id="hero-stat"
            aria-label={`${value.toLocaleString('en-US')} Hondurans encountered at the US–Mexico border in 2023`}
          >
            {value.toLocaleString('en-US')}
          </span>
          <p className="hero-count-label">
            Hondurans encountered at the US–Mexico border in 2023.
          </p>
        </div>

        <div
          className={`hero-questions${questionsVisible ? ' visible' : ''}`}
          aria-live="polite"
        >
          <p className="hero-question">Why are they leaving?</p>
          <p className="hero-answer">The answer starts in 1980.</p>
        </div>

        <p className="hero-source">
          Source: CBP Southwest Border Encounters FY2023 (Honduras-specific, southwest land border)
        </p>
      </div>

      <button
        className="scroll-arrow"
        aria-label="Scroll to begin"
        onClick={onBegin}
      >
        ↓
      </button>
    </section>
  );
}

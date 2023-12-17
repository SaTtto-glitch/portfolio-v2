
import { useState, useEffect } from 'react';

export const FVblur = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollValue(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateBlur = () => {
    const blurValue = Math.min(4, scrollValue);
    return blurValue;
  };

  const calculateZoom = () => {
    const zoomValue = 0.94 + (scrollValue / 8000);
    return zoomValue;
  };

  useEffect(() => {
    const thresholdScrollValue = 500;
    const fvElements = document.querySelectorAll('.FV__background');

    fvElements.forEach((element) => {
      const isBeyondThreshold = scrollValue > thresholdScrollValue;
      const transitionValue = 'filter 0.5s ease, transform 0.5s ease';

      const backgroundElement = element as HTMLElement;

      backgroundElement.style.transition = transitionValue;
      backgroundElement.style.filter = isBeyondThreshold ? `blur(${calculateBlur()}px)` : 'blur(0)';
      backgroundElement.style.backgroundSize = isBeyondThreshold ? `${calculateZoom() * 100}%` : 'cover';
    });
  }, [scrollValue]);

  return (
    <section className="FV">
      <div className="FV__inner">
        <div className="FV__background" />
      </div>
    </section>
  );
};

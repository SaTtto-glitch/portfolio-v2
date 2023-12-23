import { useState, useEffect } from 'react';

export const FVblur = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [isBeyondThreshold, setIsBeyondThreshold] = useState(false);

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
    return isBeyondThreshold ? 8 : 0;
  };

  const calculateZoom = () => {
    return isBeyondThreshold ? 1.2 : 1;
  };

  useEffect(() => {
    const thresholdScrollValue = 300;
    const hasExceededThreshold = scrollValue > thresholdScrollValue;

    if (hasExceededThreshold && !isBeyondThreshold) {
      setIsBeyondThreshold(true);
    } else if (!hasExceededThreshold && isBeyondThreshold) {
      setIsBeyondThreshold(false);
    }

    const fvElements = document.querySelectorAll('.FV__background');

    fvElements.forEach((element) => {
      const transitionValue = 'filter 0.5s ease, transform 0.5s ease, background-size 0.5s ease';

      const backgroundElement = element as HTMLElement;

      backgroundElement.style.transition = transitionValue;
      backgroundElement.style.filter = `blur(${calculateBlur()}px)`;
      backgroundElement.style.backgroundSize = `${calculateZoom() * 100}%`;
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

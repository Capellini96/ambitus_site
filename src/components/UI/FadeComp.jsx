
import React from "react";

export default function FadeInSection(props) {

  const [isVisible, setVisible] = React.useState(true);
  const [isScrollingDown, setIsScrollingDown] = React.useState(true)
  const domRef = React.useRef();
  let fadeClass = "";

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  window.onwheel = e => {
    if (e.deltaY >= 0) {
      // Scrolling Down with mouse
      setIsScrollingDown(true);
    } else if (e.deltaY < 0) {
      // Scrolling Up with mouse
      setIsScrollingDown(false);
    }
  }

  if (!isScrollingDown) {
    fadeClass = `fade-in-section ${isVisible ? "is-visible" : ""}`
  } else {
    fadeClass = "fade-in-section is-visible"
  }

  return (
    <div
      className={fadeClass}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
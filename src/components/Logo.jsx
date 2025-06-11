import { useEffect, useRef } from "react";

export default function Logo() {
  const containerRef = useRef(null);
  const fullSvgRef = useRef(null);
  const strokeSvgRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const fullSvg = fullSvgRef.current;
    const strokeSvg = strokeSvgRef.current;

    const handleMouseEnter = () => {
      fullSvg.style.opacity = "0";
      strokeSvg.style.opacity = "1";

      // eslint-disable-next-line no-undef
      animationRef.current = anime({
        targets: ".stroke-svg path",
        // eslint-disable-next-line no-undef
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 450,
        delay: function (el, i) {
          return i * 50;
        },
        direction: "alternate",
        loop: false,
      });
    };

    const handleMouseLeave = () => {
      fullSvg.style.opacity = "1";
      strokeSvg.style.opacity = "0";
      if (animationRef.current) {
        animationRef.current.pause();
        animationRef.current = null;
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  return (
    <a
      style={{
        position: "relative",
        width: "80px",
        height: "26.4px",
        cursor: "pointer",
        display: "block",
      }}
      href="/"
      ref={containerRef}
    >
      <svg
        ref={fullSvgRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 436.9 141.8"
        xmlSpace="preserve"
      >
        <g>
          <path
            fill="#FFFFFF"
            d="M20.4,0h28.3L32.8,82.2h43.9l-4.5,22.9H0L20.4,0z"
          />
          <path
            fill="#FFFFFF"
            d="M124.1,107.8c-23.5,0-37.7-13-37.7-35.1c0-28.7,20.5-54.1,50.2-54.1c22.2,0,35.2,13.8,35.2,34.8c0,3.4-0.3,7-0.9,10.7
      l-0.9,4.8H114c-0.2,1.1-0.2,2.2-0.2,3.2c0,9.6,4,14.5,12.1,14.5c6.6,0,12.1-2.5,15-9.1h28C161.8,97.2,142.9,107.8,124.1,107.8z
       M117.3,54.2h28v-0.5c0-9.1-3.9-13.9-11.1-13.9C126.7,39.9,120.8,45.9,117.3,54.2z"
          />
          <path
            fill="#FFFFFF"
            d="M163.6,139.4l4-20.4h5.1c8.2,0,12.5-1.5,19.5-14.1l2.6-4.5l-15.6-79h28.1l5.7,41.1l0.8,11.3l5.1-11.3l21-41.1h28.3
      l-52.5,91.5c-12.8,22.2-23,28.9-39.1,28.9C170.7,141.8,165.8,140.5,163.6,139.4z"
          />
          <path
            fill="#FFFFFF"
            d="M297.3,107.8c-23.5,0-37.7-13-37.7-35.1c0-28.7,20.5-54.1,50.2-54.1c22.2,0,35.2,13.8,35.2,34.8c0,3.4-0.3,7-0.9,10.7
      l-0.9,4.8h-55.9c-0.2,1.1-0.2,2.2-0.2,3.2c0,9.6,4,14.5,12.1,14.5c6.6,0,12.1-2.5,15-9.1h28C335,97.2,316.1,107.8,297.3,107.8z
       M290.5,54.2h28v-0.5c0-9.1-3.9-13.9-11.1-13.9C299.9,39.9,294,45.9,290.5,54.2z"
          />
          <path
            fill="#FFFFFF"
            d="M363.6,21.5h26.9l-1.5,7.6c6.6-7.1,14.7-10.4,23.8-10.4c13.8,0,24.3,8.2,24.3,24.9c0,2.9-0.3,6.2-1.1,9.6l-10,51.9h-26.9
      l9.9-50.2c0.3-1.9,0.5-3.7,0.5-5.1c0-6.5-2.9-9.4-9.1-9.4c-7.6,0-14.1,6-16.4,15.5l-9.7,49.3h-26.7L363.6,21.5z"
          />
        </g>
      </svg>

      <svg
        ref={strokeSvgRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 440.3 144.8"
        className="stroke-svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
        }}
      >
        <defs></defs>
        <g>
          <path
            style={{
              fill: "none",
              stroke: "#FFFFFF",
              strokeWidth: "3",
            }}
            d="M22.2,1.5h28.3L34.6,83.7h43.9L74,106.6H1.8L22.2,1.5z"
          />
          <path
            style={{
              fill: "none",
              stroke: "#FFFFFF",
              strokeWidth: "3",
            }}
            d="M125.9,109.3c-23.5,0-37.7-13-37.7-35.1c0-28.7,20.5-54.1,50.2-54.1c22.2,0,35.2,13.8,35.2,34.8
      c0,3.4-0.3,7-0.9,10.7l-0.9,4.8h-55.9c-0.2,1.1-0.2,2.2-0.2,3.2c0,9.6,4,14.5,12.1,14.5c6.6,0,12.1-2.5,15-9.1h28
      C163.6,98.7,144.7,109.3,125.9,109.3z M119.1,55.7h28v-0.5c0-9.1-3.9-13.9-11.1-13.9C128.5,41.4,122.6,47.4,119.1,55.7z"
          />
          <path
            style={{
              fill: "none",
              stroke: "#FFFFFF",
              strokeWidth: "3",
            }}
            d="M165.4,140.9l4-20.4h5.1c8.2,0,12.5-1.5,19.5-14.1l2.6-4.5L181,23h28.1l5.7,41.1l0.8,11.3l5.1-11.3l21-41.1
      H270l-52.5,91.5c-12.8,22.2-23,28.9-39.1,28.9C172.5,143.3,167.6,142,165.4,140.9z"
          />
          <path
            style={{
              fill: "none",
              stroke: "#FFFFFF",
              strokeWidth: "3",
            }}
            d="M299.1,109.3c-23.5,0-37.7-13-37.7-35.1c0-28.7,20.5-54.1,50.2-54.1c22.2,0,35.2,13.8,35.2,34.8
      c0,3.4-0.3,7-0.9,10.7l-0.9,4.8H289c-0.2,1.1-0.2,2.2-0.2,3.2c0,9.6,4,14.5,12.1,14.5c6.6,0,12.1-2.5,15-9.1h28
      C336.8,98.7,317.9,109.3,299.1,109.3z M292.3,55.7h28v-0.5c0-9.1-3.9-13.9-11.1-13.9C301.7,41.4,295.8,47.4,292.3,55.7z"
          />
          <path
            style={{
              fill: "none",
              stroke: "#FFFFFF",
              strokeWidth: "3",
            }}
            d="M365.4,23h26.9l-1.5,7.6c6.6-7.1,14.7-10.4,23.8-10.4c13.8,0,24.3,8.2,24.3,24.9c0,2.9-0.3,6.2-1.1,9.6
      l-10,51.9h-26.9l9.9-50.2c0.3-1.9,0.5-3.7,0.5-5.1c0-6.5-2.9-9.4-9.1-9.4c-7.6,0-14.1,6-16.4,15.5l-9.7,49.3h-26.7L365.4,23z"
          />
        </g>
      </svg>
    </a>
  );
}

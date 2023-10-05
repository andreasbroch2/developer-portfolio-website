import { useState, useRef, useEffect } from "react";
import { projects } from "../../constants/constants";
import { englishProjects } from "../../constants/englishConstants";

const Carousel2 = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="bg-blue-900/30 hover:bg-blue-900/75 text-white w-20 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="bg-blue-900/30 hover:bg-blue-900/75 text-white w-20 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-16 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {englishProjects.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item rounded-2xl bg-white/60 relative w-full md:w-[40rem] snap-start"
              >
                <img
                  src={resource.image || ""}
                  alt={resource.title}
                  className="w-[40rem] max-w-[40rem] h-[225px] rounded-t-2xl"
                />
                <div className="flex flex-col p-4">
                  <h4 className="py-4 text-center">{resource.title}</h4>
                  <p>{resource.description}</p>
                  <ul className="flex flex-wrap justify-center">
                    {resource.tags.map((t, i) => {
                      return (
                        <li
                          key={i}
                          className="text-lg bg-orange-300 rounded-xl px-4 py-2 m-2"
                        >
                          {t}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex justify-center gap-8">
                    {resource.link && (
                      <div className="text-center my-8">
                        <a href={resource.link} target="_blank" className="btn">
                          Go to site
                        </a>
                      </div>
                    )}
                    {resource.code && (
                      <div className="text-center my-8">
                        <a href={resource.code} target="_blank" className="btn alt">
                          Code
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel2;

import { useCallback, useEffect, useRef, useState } from "react";

export function useObserver() {
  const refObserver = useRef<HTMLDivElement>(null);
  const [reachedTop, setReachedTop] = useState(false);
  console.log(reachedTop);

  const options = useCallback(
    () => ({
      root: null, //observe against viewport of computer
      rootMargin: `0px 0px -90% 0px`, //margin to apply the observing element
      threshold: 0, //trigger callback fn as soon as 0px or 0% of the observing element becomes visible on the view port
    }),
    [],
  );

  //  const options = {
  //    root: null, //observe against viewport of computer
  //    rootMargin: `0px 0px -90% 0px`, //margin to apply the observing element
  //    threshold: 0, //trigger callback fn as soon as 0px or 0% of the observing element becomes visible on the view port
  //  };
  useEffect(() => {
    function handleIntersect(entries: IntersectionObserverEntry[]) {
      const [entry] = entries;
      setReachedTop(entry.isIntersecting);
      if (entry.isIntersecting) {
        console.log("intersecting");
      } else {
        console.log("not intersecting");
      }
    }

    const cur = refObserver.current;

    const observer = new IntersectionObserver(handleIntersect, options());
    if (cur) {
      observer.observe(cur!);
    }
    return () => observer.unobserve(cur!);
  }, [refObserver, options]);
}

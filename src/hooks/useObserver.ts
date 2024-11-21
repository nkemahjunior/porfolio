import { useEffect, useRef, useState } from "react";

 
 
export function useObserver () {
 const refObserver = useRef<HTMLDivElement>(null);
 const [reachedTop, setReachedTop] = useState(false);

 let options = {
   root: null, //observe against viewport of computer
   rootMargin: `0px 0px -90% 0px`, //margin to apply the observing element
   threshold: 0, //trigger callback fn as soon as 0px or 0% of the observing element becomes visible on the view port
 };
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

   const observer = new IntersectionObserver(handleIntersect, options);
   if (refObserver.current) {
     observer.observe(refObserver.current!);
   }
   return () => observer.unobserve(refObserver.current!);
 }, [refObserver, options]);
}
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
const lenis = new Lenis({
  duration:1.5,
  anchors: true,
});
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});
gsap.ticker.lagSmoothing(0);
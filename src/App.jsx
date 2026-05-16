import { useEffect } from "react";
import Lenis from "lenis";

import LandingPage from "./pages/LandingPage";

export default function App() {

  useEffect(() => {

    const lenis = new Lenis({

      duration: 1.2,

      smoothWheel: true,

      smoothTouch: true,

    });

    function raf(time) {

      lenis.raf(time);

      requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

  }, []);

  return <LandingPage />;
}
import gsap  from "gsap"

import { ScrollTrigger } from "gsap/all";
import NavBar from './section/NavBar';
import Hero from './section/Hero';
import FirstVideo from "./section/FirstVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
    </main>
  )
}

export default App

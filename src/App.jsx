import gsap  from "gsap"

import { ScrollTrigger } from "gsap/all";
import NavBar from './section/NavBar';
import Hero from './section/Hero';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
    </main>
  )
}

export default App

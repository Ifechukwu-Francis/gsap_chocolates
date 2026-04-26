import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';
import  Navbar from './components/Narbar.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);
import React from 'react'
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import About from './components/About.jsx';

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero  />
    <Cocktails />
    <About  />
   </main>
  )
}

export default App
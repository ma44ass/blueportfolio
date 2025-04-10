import './App.css';
import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import "./index.css";
import { Contact } from './components/sections/Contact';
import Badges from './components/Badges';

function App() {
{/*cheching if the loading screen is still shown*/}
  const [isLoaded, setIsLoaded]= useState(false)
{/*cheching if the Menu is open*/}
  const [menuOpen, setMenuOpen]= useState(false)

  return (
  <>
    {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}{""}

    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      <Navbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Badges/>
      <Projects />
      <Contact />
    </div>
  </>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";

function App() {
{/*cheching if the loading screen is still shown*/}
  const [isLoaded, setIsLoaded]= useState(false)

  return (
  <>
      {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}

  </>);
}

export default App;

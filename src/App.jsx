import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GamePlay from './components/gameplay'
import StartGame from './components/startgame'
import './App.css'

function App() {
  // useing use state for hiding and show next screen 
  // it will hide the component of <start/> and replace it to other

  const [isgame,setgame] = useState(false);

  const togglegame = () =>{
    setgame(prev => !prev);
  }
  return(
    <>
   {isgame ? <GamePlay/> : <StartGame 
   toggle ={togglegame}
   />}
    </>

  )
  
}

export default App

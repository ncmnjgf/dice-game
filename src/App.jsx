import { useState } from 'react'
import GamePlay from './components/GamePlay.jsx'
import StartGame from './components/StartGame.jsx'
import NumberSelector from './components/NumberSelector'
import './App.css'

function App() {
  // useing use state for hiding and show next screen 
  // it will hide the component of <start/> and replace it to other

  const [isgame, setgame] = useState(false);

  const togglegame = () => {
    setgame(prev => !prev);
  }
  return (
    <>
      {isgame ? <GamePlay /> : <StartGame
        toggle={togglegame}
      />}
    </>



  )

}

export default App

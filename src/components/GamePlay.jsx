import React from 'react'
import TotalScore from './TotalScore';
import { useState } from 'react';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { Button } from '../Button';
import { OutlineButton } from '../Button';
import styled from 'styled-components';
import Rules from './Rules';



const gamePlay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [current, setcurrent] = useState(1);
  const [error, seterror] = useState("");
  const [rules, setrules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      seterror("You have not selected any number");
      return;
    }
    seterror("")
    const randomNumber = generateRandomNumber(1, 7);
    setcurrent((prev) => randomNumber)

    if (selectedNumber === randomNumber) {
      setscore(prev => prev + randomNumber)
    }
    else {
      setscore(prev => prev - 2)
    }

    setSelectedNumber(undefined);
    //1:01:37

  }

  const reset = () => {
    setscore(0);
  }
  return (
    <Maincontainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        current={current}
        roleDice={roleDice}
      />

      <div className='btns'>
        <OutlineButton onClick={reset}>Reset</OutlineButton >
        <Button
          onClick={() => setrules((prev) => !prev)}
        >
          {rules ? "Hide " : "Show " }
          Rules</Button>
      </div>
      {rules && <Rules />}
    </Maincontainer>
  )
}

export default gamePlay;

const Maincontainer = styled.main`
padding-top:70px;
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;

}

.btns{
  margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;
import { useState } from "react";
import styled from "styled-components";

const RollDice = () => {

    const [current,setcurrent] = useState(1);

    const generateRandomNumber = (min , max) =>{
        return Math.floor(Math.random() * (max-min) + min);
    };

    const roleDice = () =>{
        const randomNumber = generateRandomNumber(1,7);
        setcurrent((prev) => randomNumber)
        //1:01:37

    }

  return (
    <DiceContainer>

        <div className="dice"
        onClick={roleDice}>
            <img src={`/images/dice/dice_${current}.png`} alt="dice1"/>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.dice{
    cursor: pointer;
}

p{
    font-size:24px;
}

    

`
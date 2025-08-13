import styled from "styled-components";

const RollDice = ({roleDice,current}) => {



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
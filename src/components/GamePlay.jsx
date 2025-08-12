import React from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import styled from 'styled-components';



const gamePlay = () => {
  return (
<Maincontainer>
   <div className='top_section'>
     <TotalScore/>
    <NumberSelector/>
   </div>
   <RollDice/>
</Maincontainer>
  )
}

export default gamePlay;

const Maincontainer = styled.main`
padding-top:70px
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;

}


`;
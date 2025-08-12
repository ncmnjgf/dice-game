import { useState } from "react";
import styled from "styled-components"

const NumberSelector = () => {

  

    //  because we are repeating the value manually , we use an array to get mult boxes
    const arrayNumber = [1,2,3,4,5,6];

    // usesate to selecte a number
    const [select,setselect] = useState();
  return (
    <NumberSelectorContainer>
        <div className="flex">
        { arrayNumber.map((value,i)=>(
              <Box
              isselected={value === select}
              key={i}
              onClick={()=>setselect(value)}
              >{value}</Box>
            ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )

}


export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;


.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700;
}
    
`;

const Box = styled.div`
    
    height:72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> props.isselected ? "black":"white"};
    color: ${(props) => !props.isselected ? "black":"white"};
`
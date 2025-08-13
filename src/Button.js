import styled from "styled-components";

export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
padding: 10px 18px;
gap: 10px;
color: white;
width: 220px;
height: 44px;

background-color: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
font: 16px;
border: 1px solid black;
cursor: pointer;
transition: 0.4s background ease-in;
&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}

    
`;



export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
}
`;
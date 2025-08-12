import styled from 'styled-components';
const StartGame = ({toggle}) => {
    return (
        <Container>
            <div>
                <img src='/images/grp.png' />
            </div>
            <div>
                <h1 className='content'>Dice Game</h1>
                <Button
                onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;


const Container = styled.div`
    
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin:0 auto;
    align-items: center;


    .content {
        font-size: 96px;
        white-space: nowrap;
    }



`;
const Button = styled.button`
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
transition: 0.4s background ease-in;&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}

    
`;
import styled from "styled-components"
import GamePlay from "./gameplay";

const TotalScore = ({score}) => {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;  /* Stack h1 and p vertically */
  align-items: center;     /* Center them horizontally */
  text-align: center;      /* Center text inside */

  h1 {
    font-size: 100px;
    line-height: 100px;
    margin: 0;             /* Remove default h1 margin */
  }

  p {
    font-size: 24px;
    font-weight: 500;
    margin: 0;             /* Remove default p margin */
  }
`;





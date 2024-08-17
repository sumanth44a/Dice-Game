import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="Dice_1" />
      </div>
      <p>Click on the Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;

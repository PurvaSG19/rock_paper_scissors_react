import './Game_logic'
import { useState } from "react";

function App() {

  const [computerChoice,setComputerChoice] = useState('')
  const [playerChoice,setPlayerChoice] = useState('')
  const [result,setResult] = useState('')
  const [pscore,setPscore] = useState(0)
  const [cscore,setCscore] = useState(0)


  const decision = (playerVal) => {
    setPlayerChoice(playerVal);
    const choices = ["rock","paper","scissors"];
    const computerChoice = choices[Math.floor(Math.random()*3)]
    setComputerChoice(computerChoice);
    if(playerVal === computerChoice)
    {
       setResult("IT'S A TIE!");
    }

    else{
      switch(computerChoice)
      {
        case "rock":
          if(playerVal === "paper")
          {
            setResult("YOU WON!");
            setPscore(pscore+1);
            
          }
          else
          {
            setResult("YOU LOSE!");
            setCscore(cscore+1);
            
          }
          break;

        case "paper":
          if(playerVal === "scissors")
          {
            setResult("YOU WON!");
            setPscore(pscore+1);
            
          }
          else
          {
            setResult("YOU LOSE!");
            setCscore(cscore+1);
            
          }
          break;

        case "scissors":
          if(playerVal === "rock")
          {
            setResult("YOU WON!");
            setPscore(pscore+1);
            
          }
          else
          {
            setResult("YOU LOSE!");
            setCscore(cscore+1);
            
          }
          break;
      }
    }


  }
  return (
    <div className="App">
      <h1>Rock-Paper-Scissors</h1>
      <button onClick={() => {decision('rock')}}>✊🏻</button>
      <button onClick={() => {decision('paper')}}>🤚🏻</button>
      <button onClick={() => {decision('scissors')}}>✌🏻</button>

      <h4>Player's Choice: {playerChoice}</h4>
      <h4>Computer's Choice: {computerChoice}</h4>
      <h2>{result}</h2>
      <h4>Player's Score: {pscore}</h4>
      <h4>Computer's Score:{cscore}</h4>
    </div>
  );
}

export default App;

import React from 'react'
import './result.css'
import { useNavigate } from 'react-router-dom'

function Result({score,questions,setScore,setFinalResult,setCurrentQuestion}) {
  const percentage = ((score/questions.length)*100)
  const score1 = ((questions.length)-score)
const navigateURL = useNavigate()

  const restartGame = ()=>{
    setScore(0)
    setFinalResult(false)
    setCurrentQuestion(0)
    
  }
  const navigate = ()=>{
    navigateURL('/')
  }
  return (
    <>
    <div className="finalresult glow">
        <h2 style={{color:'white'}}>CONGRATULATION!!</h2>
        <h3>{score} out of {questions.length} correct - ({percentage}%)</h3>
        <h3 style={{color:'green'}}>Correct Answer : {score}</h3>
        <h3 style={{color:'red'}}>Wrong Answers : {score1}</h3>
        <button onClick={restartGame} >Restart Game</button>
        <button onClick={navigate}>Quit Game</button>
    </div>
    </>
  )
}

export default Result
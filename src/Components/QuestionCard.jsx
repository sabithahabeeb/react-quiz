import React, { useState } from 'react'
import './question.css'
import Result from './Result'
import Timer from './Timer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QuestionCard({setFinalResult,score,setScore,questions,currentQuestion,setCurrentQuestion,name}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [stop,setStop] = useState(false)
  const optionClicked = (isCorrect)=>{
    if(isCorrect){
setScore(score + 1)
// alert("answer is correct")
toast.success("Correct")
    }else{
      toast.error("Wrong")
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else{
   setFinalResult(true)
    }
  }
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
     {/* current score */}
     <h2>Current Score: {score}</h2>
 <div className='timer'>
       <button onClick={toggleMode} style={{width:'10px',height:'10px',backgroundColor:'transparent'}}>
            {isDarkMode ? <i class="fa-solid fa-sun  fa-xl " style={{color:'white'}}></i> :  <i class="fa-solid fa-moon  fa-xl " style={{color:''}}></i>}
          </button>
          <div className='number'><Timer currentQuestion={currentQuestion} setStop={setStop}/></div>
 </div>

    <div className={isDarkMode?'dark-mode question-card':'light-mode question-card'}>
      <span style={{color:'crimson'}}>sabitha</span>

        <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
        <h3>{questions[currentQuestion].text}</h3>

        <ul>
           {questions[currentQuestion].options.map((item)=>{
         return(
          <li onClick={()=>optionClicked(item.isCorrect)} key={item.id}>{item.text}  </li>
         )
           })}
            
        </ul>
    </div>
    <ToastContainer
    position="top-center"
    autoClose={500}
    />
    </>
  )
}

export default QuestionCard
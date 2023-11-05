import React, { useState } from 'react'
import QuestionCard from './QuestionCard';
import Result from './Result';
import '../App.css';

function Quiz(props) {
    const [finalResult,setFinalResult] = useState(false)
    const [score,setScore] = useState(0)
    const [currentQuestion,setCurrentQuestion] = useState(0)

    const questions = [
      {
        text:' What does "JSX" stand for?',
        options: [
          {id: 0,text:'JavaScript', isCorrect: true},
          {id: 1,text:'JavaXML', isCorrect: false},
          {id: 2,text:'Java HTML', isCorrect: false},
          {id: 3,text:'Java', isCorrect: false},
        ],
      },
      {
        text:' In React, what represents the in-memory structure that mimics the real DOM?',
        options: [
          {id: 0,text:'VirtualDOM', isCorrect: true},
          {id: 1,text:'DOM', isCorrect: false},
          {id: 2,text:'Java HTML', isCorrect: false},
          {id: 3,text:'Redux', isCorrect: false},
        ],
  
      },
      {
        text:'  What is the function used to update a components state in React?',
        options: [
          {id: 0,text:'setState', isCorrect: true},
          {id: 1,text:'state', isCorrect: false},
          {id: 2,text:'Props', isCorrect: false},
          {id: 3,text:'Hooks', isCorrect: false},
        ],
  
      },
      {
        text:'  What are the immutable data passed from parent to child components in React?',
        options: [
          {id: 0,text:'Props', isCorrect: true},
          {id: 1,text:'state', isCorrect: false},
          {id: 2,text:'JSX', isCorrect: false},
          {id: 3,text:'Hooks', isCorrect: false},
        ],
  
      },
      {
        text:' React provides a way to perform client-side routing. Whats it called?',
        options: [
          {id: 0,text:'React Router', isCorrect: true},
          {id: 1,text:'useState', isCorrect: false},
          {id: 2,text:'Components', isCorrect: false},
          {id: 3,text:'Hooks', isCorrect: false},
        ],
  
      },
      {
        text:' In React, what hook is used for side effects like data fetching and DOM manipulation?',
        options: [
          {id: 0,text:'useEffect', isCorrect: true},
          {id: 1,text:'useState', isCorrect: false},
          {id: 2,text:'useNavigate', isCorrect: false},
          {id: 3,text:'useproms', isCorrect: false},
        ],
  
      },
      {
        text:'What is Full Meaning of API?',
        options: [
          {id: 0,text:'Application Programming Interface', isCorrect: true},
          {id: 1,text:'Applicable Programming Interface', isCorrect: false},
          {id: 2,text:'Ajax Programming Interface', isCorrect: false},
          {id: 3,text:'Application program Interface', isCorrect: false},
        ],
  
      },
      {
        text:'What is CSS stands for?',
        options: [
          {id: 0,text:'Computer Style Sheet', isCorrect: false},
          {id: 1,text:' Cascading Style Sheet', isCorrect: true},
          {id: 2,text:'Colorful Style Sheet', isCorrect: false},
          {id: 3,text:'Creative Style Sheet', isCorrect: false},
        ],
  
      },
      {
        text:'Which of the following keywords is used to define a variable java Script?',
        options: [
          {id: 0,text:'Var', isCorrect: false},
          {id: 1,text:' let', isCorrect: true},
          {id: 2,text:'const', isCorrect: false},
          {id: 3,text:'var or let', isCorrect: false},
        ],
  
      },
      {
        text:' In React, what hook is used for navigate the and DOM manipulation?',
        options: [
          {id: 0,text:'useEffect', isCorrect: false},
          {id: 1,text:'useState', isCorrect: false},
          {id: 2,text:'useNavigate', isCorrect: true},
          {id: 3,text:'useproms', isCorrect: false},
        ],
  
      },
    ]
    function shuffleArray(questions) {
      for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
      }
      return questions;
    }
  return (
    <>
 <div className='container' >
        <div className='content'>
          {/* Heading */}
          <h1>Quiz for React</h1>
<span>{props.PlayerName}</span>
         

          {finalResult?
           <div>
           <Result  setScore={setScore} setFinalResult={setFinalResult} setCurrentQuestion={setCurrentQuestion} score={score} questions={questions}/>
         </div>:
         <div>
         <QuestionCard    setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} questions={questions} setScore={setScore} score={score} setFinalResult={setFinalResult} />
       </div>} 
          
        </div>
       
      </div>

    </>
  )
}

export default Quiz
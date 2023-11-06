import React, { useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Quiz from './Quiz'

function Home() {
  const [startGaame, setStartGame] = useState(false)
  const navigateURL = useNavigate()
  const [name, setName] = useState('')


  const handleStartGame = () => {
    setStartGame(true)
  }

  const navigate = () => {
    // console.log(`name: ${name}`);
    navigateURL('/quiz')

  }
  return (
    <>
      <div className='home'>

        <div className="box">
          <h1>React Quiz </h1>
          {/* <button>Start Game</button> */}
          {startGaame ?
            <div className='start'>
              <input type="text" placeholder='Enter Youre Name' value={name} onChange={(e) => setName(e.target.value)} />
              <button onClick={navigate} >Start</button>
            </div> : <div><button onClick={handleStartGame}>Start Game</button>

              <h2>INSTRUCTIONS</h2>
              {/* <div className='div'>
                  <div>

                  
                      <h3> 1. Answer 10 Questions</h3>
                      <p>The Quizz Contain will be 10 questions .Get ready to test youre knowledge have a great time</p>
                  


                    <h3> 2. Time</h3>
                    <p>Each Questions  is timed for 30 secends,so realax think it through, and enjoy the quiz</p>

                  </div>
                  <div>

                    <h3> 3. Score</h3>
                    <p>For each correct answer you'll earn one point . After answering all the questions your total score out of 10 and it will be shown the percentage</p>


                    <h3> 4. Play Again Quizz</h3>
                    <p>Loved this game? Want to prove your expertise? Play again and aim for a higher score!</p>

                  </div>
                </div> */}
             <marquee scrollAmount={15}>
                <div className='div'>
                  <div className='insta'>
  
                    <h3> 1. Answer 10 Questions</h3>
                    <p>The Quizz Contain will be 10 questions. <br /> Get ready to test youre knowledge have <br /> a great time</p>
  
                  </div>
                  <div className='insta'>
  
                    <h3> 3. Time</h3>
                    <p>Each Questions  is timed for 30 secends,<br /> so realax think it through, and enjoy the <br /> quiz</p>
  
                  </div>
                </div>
                <div className='divv'>
                  <div className='insta'>
    
                    <h3> 2. Score</h3>
                    <p>For each correct answer you'll earn one <br /> point . After answering all the questions <br /> your total score out of 10 and it will be <br /> shown the percentage</p>
    
                  </div>
                  <div className='insta'>
    
                    <h3> 4. Play Again Quizz</h3>
                    <p>Loved this game? Want to prove your <br /> expertise? Play again and aim for a <br /> higher score!</p>
                  </div>
                </div>
             </marquee>

            </div>



          }

        </div>
      </div>



    </>
  )
}

export default Home
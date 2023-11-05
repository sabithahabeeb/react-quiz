import React, { useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Quiz from './Quiz'

function Home() {
const [startGaame,setStartGame] = useState(false)
const navigateURL = useNavigate()
const [name,setName] = useState('')


const handleStartGame = ()=>{
    setStartGame(true)
}

const navigate = ()=>{
  // console.log(`name: ${name}`);
    navigateURL('/quiz')
   
}
  return (
    <>
<div className='home'>

    <div className="box">
    <h1>React Quiz </h1>
  {/* <button>Start Game</button> */}
  {startGaame?
  <div className='start'>
        <input type="text" placeholder='Enter Youre Name' value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={navigate} >Start</button>
  </div>:<button onClick={handleStartGame}>Start Game</button>
  
}

    </div>
</div>



    </>
  )
}

export default Home
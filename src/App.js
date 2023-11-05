import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Quiz from './Components/Quiz';


function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={ <Home/>} />
  
    <Route path='/quiz' element={ <Quiz/>} />
      
   </Routes>
     
    </>
  );
}

export default App;

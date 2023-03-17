
import './App.css';
// import Alert from './components/Alert';
import React , {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';



//   const [alert, setAlert] = useState(null)

// const showAlert =(message,type)=>{
  //   setAlert({
    //     msg:message,
    //     type:type
    //   })
    // }
    
    
    function App() {
      
    const [mode, setMode] = useState('light')
    const toggleMode = ()=>{
      if(mode ==='light')
      {
        setMode('dark')
        document.body.style.backgroundColor = 'grey'
        
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
      }
    }

  return (
    <>
     <Navbar tittle='Textutils16'  About = "About us" mode={mode} toggleMode={toggleMode}/>
  <Routes>
   
  <Route path="/" element={<TextForm heading="Enter your text to Analyze "  mode={mode}/>} >
  </Route>
  <Route path="/about" element={<About />} />
  

</Routes>

    </>
  
    )
  }

export default App;

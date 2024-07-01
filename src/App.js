import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Alert from './Components/Alert'
import TextForm from './Components/TextForm'
import React,{useState} from "react";

 
let name="Aditya";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const alertShow = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      alertShow("Dark mode is enabled", "success");
      document.title="MyFirstReact-DarkMode";
      // setTimeout(() => {
      //   document.title="Install MyFirstReact Now..";
      // }, 2000);

      // setTimeout(() => {
      //   document.title="MyFirstReact is amazing!!";
      // }, 1500);
    } 
    
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      alertShow("Light mode is enabled", "success");
      document.title="MyFirstReact-LightMode";

    }
  }

  return (
  <>
  
   <Navbar title="MyFirstReact" abouttext="About MyFirstReact" mode={mode} togglemode={togglemode}/>
   <div className="container my-3">
    <Alert alert={alert}/>
    <TextForm  alertShow={alertShow} heading="Enter Text To Analyze Below" mode={mode}/>
   {/* <About/> */}
   </div>
   

  </>
  );
}

export default App;

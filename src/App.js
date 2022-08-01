
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React from "react"

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
    function toggle(){
        setDarkMode((prevMode => !darkMode))
    }
    console.log(darkMode)
  return (
    <div className='container'>
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggle}
      />
            
      <Main 
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;

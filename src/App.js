import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React  from "react";
import Navbar from "./Componets/Navbar";
import News from "./Componets/News";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";


const App =(props)=> {

 const apiKey = "644566ded4c149f6a05e695c07667757";

  const [progress, setProgress] = useState(0);
  const[mode,setMode] = useState('light');


  const toggleMode = () => {
  

      if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgba(11,21,28,255)';
    // showAlert('Dark mode has been enabled', 'success');
     
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert('#B7C0C2 mode has been enabled', 'success');
     
    }
  };


  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
   setAlert({ 
    msg:message,
    type:type
  })
  
  setTimeout(() => {
    setAlert(null)
  }, 2000);

  }



    return (
      <div>
        <Router>
          <Navbar mode ={mode} toggleMode={toggleMode} />
          {/* <Alert alert ={alert}/> */}
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News mode ={mode} toggleMode={toggleMode}

                setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={8}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News mode ={mode} toggleMode={toggleMode}
                setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  pageSize={8}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News mode ={mode} toggleMode={toggleMode}
                setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  pageSize={8}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News mode ={mode} toggleMode={toggleMode}
                setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={8}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News mode ={mode} toggleMode={toggleMode}
                setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={8}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News mode ={mode} toggleMode={toggleMode}
                setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={8}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News mode ={mode} toggleMode={toggleMode}
                setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  pageSize={8}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News mode ={mode} toggleMode={toggleMode}
                setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={8}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
       
      </div>
    );
  }

  export default App

//import { ThemeProvider } from "styled-components"
//import GlobalStyle from "./globalStyles"
//import {lightTheme, darkTheme} from "./components/Themes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import '@ant-design/icons'


// Components

import UploadImage from "./components/UploadImage";
import Header from "./components/Header";
import Info from "./components/Info";


function App() {

  return <>
  


   <Router>
   <Routes>


    <Route  path="/uploadimage" element={<UploadImage/>}/>
    <Route  path="/info" element={<Info/>}/>
    <Route  path="/" element={<Header/>}/>



    </Routes>
      </Router>
    
  
    

  
  
  
  </>




  
    
}

export default App


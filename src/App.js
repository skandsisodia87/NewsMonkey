import './App.css';

import React from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { Routes, Route} from "react-router-dom";

const App = () =>{
  const pageSize=7; 
  const apiKey=process.env.REACT_APP_NEWS_API;
    return (
      <div>
       <Navbar/>
       <Routes>
        <Route exact path="/" element={ <News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/>} />
        <Route exact path="/sports" element={ <News key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports"/>} />
        <Route exact path="/entertainment" element={ <News key="entertainment" pageSize={pageSize} apiKey={apiKey}country="in" category="entertainment"/>} />
        <Route exact path="/business" element={ <News key="business" pageSize={pageSize} apiKey={apiKey} country="in" category="business"/>} />
        <Route exact path="/health" element={ <News key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health"/>} />
        <Route exact path="/science" element={ <News key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science"/>} />
        <Route exact path="/technology" element={ <News key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology"/>} />
        </Routes>
      
      </div>
    )
}

export default App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function Profile() {
  return <h1> Profile Page </h1> 
  <h2> Full Stack Dev </h2>
}
function Dashboard() {
  return <h1> Dashboard Page </h1>
  <h2> HTML</h2>
  <h3> CSS</h3>
}
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import ThemeToggleButton from "./ThemeToggleButton";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/"
    </Routes>
    </BrowserRouter>  );
}

export default App;
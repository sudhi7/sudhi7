import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Achievements } from './components/pages/Achievements';
import { Home } from './components/pages/Home'
import { Greetings } from './components/pages/Greetings'
import { theme } from './theme/theme'
import { ThemeProvider } from '@mui/material';
import { useEffect, useState } from "react";
import React from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 6000)
  }, [])
  if (loading) {
    return <Greetings/>
  } else {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/hello" element={<Home />} />
          <Route path="/achievements" element={<Achievements/>}/>
        </Routes>
      </BrowserRouter>
      <Home />
    </ThemeProvider>
  );}
}

export default App;

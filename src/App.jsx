import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
  import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App
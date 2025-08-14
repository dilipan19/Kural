import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from '../components/Navbar/Navbar';  // Correct the import
import HomePage from '../pages/Home';

function AppRoutes() {
  return (
    <>
      <NavbarComponent />
      <div className="mt-16">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoutes;

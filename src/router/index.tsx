import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CousersPage from '../pages/Cousers';
import SchedulePage from '../pages/Schedule';
import TreadsPage from '../pages/Treads';

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CousersPage />} />
        <Route path="/agenda" element={<SchedulePage />} />
        <Route path="/trilhas" element={<TreadsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Application;

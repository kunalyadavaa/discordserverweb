import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Info } from './pages/Info';
import { Rules } from './pages/Rules';
import { Staff } from './pages/Staff';
import { Roles } from './pages/Roles';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/roles" element={<Roles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
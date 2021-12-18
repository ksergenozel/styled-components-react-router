import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Coins from './screens/Coins';
import Profile from './screens/Profile';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='coins' element={<Coins />} />
      <Route path='profile' element={<Profile />} />
    </Routes>
  );
}

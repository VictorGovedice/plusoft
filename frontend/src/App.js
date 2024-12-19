import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Supondo que você tenha esse componente
import UserForm from './components/UserForm'; // Supondo que você tenha esse componente
import UserDetail from './pages/UserDetail'; // Se esse arquivo não existir, remova esta linha

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/user-detail" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;

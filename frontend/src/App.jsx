import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StagiaireList from './components/StagiaireList';
import StagiaireForm from './components/StagiaireForm';
import EncadrantList from './components/EncadrantList';
import EncadrantForm from './components/EncadrantForm';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
          <li><Link to="/stagiaires">Stagiaires</Link></li>
          <li><Link to="/stagiaires/ajout">Ajouter Stagiaire</Link></li>
          <li><Link to="/encadrants">Encadrants</Link></li>
          <li><Link to="/encadrants/ajout">Ajouter Encadrant</Link></li>
          <li><Link to="/">Dashboard</Link></li>

        </ul>
      </nav>

      <Routes>
        {/* Stagiaires */}
        <Route path="/stagiaires" element={<StagiaireList />} />
        <Route path="/stagiaires/ajout" element={<StagiaireForm />} />
        <Route path="/stagiaires/edit/:id" element={<StagiaireForm />} />

        {/* Encadrants */}
        <Route path="/encadrants" element={<EncadrantList />} />
        <Route path="/encadrants/ajout" element={<EncadrantForm />} />
        <Route path="/encadrants/edit/:id" element={<EncadrantForm />} />

        {/* Page par défaut */}
        <Route path="*" element={<StagiaireList />} />
        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { fetchStagiaires, fetchEncadrants } from '../services/api';

function Dashboard() {
  const [nbStagiaires, setNbStagiaires] = useState(0);
  const [nbEncadrants, setNbEncadrants] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const stagiaires = await fetchStagiaires();
    const encadrants = await fetchEncadrants();
    setNbStagiaires(stagiaires.length);
    setNbEncadrants(encadrants.length);
  };

  return (
    <div>
      <h2>Tableau de Bord</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={cardStyle}>
          <h3>Stagiaires</h3>
          <p>{nbStagiaires}</p>
        </div>
        <div style={cardStyle}>
          <h3>Encadrants</h3>
          <p>{nbEncadrants}</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  width: '150px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
};

export default Dashboard;

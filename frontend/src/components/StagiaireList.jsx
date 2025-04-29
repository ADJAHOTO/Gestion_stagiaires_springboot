import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchStagiaires, deleteStagiaire } from '../services/api';

function StagiaireList() {
  const [stagiaires, setStagiaires] = useState([]);

  useEffect(() => {
    loadStagiaires();
  }, []);

  const loadStagiaires = async () => {
    const data = await fetchStagiaires();
    setStagiaires(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Voulez-vous vraiment supprimer ce stagiaire ?')) {
      await deleteStagiaire(id);
      loadStagiaires();
    }
  };

  return (
    <div>
      <h2>Liste des Stagiaires</h2>
      <Link to="/stagiaires/ajout">Ajouter un stagiaire</Link>
      <table>
        <thead>
          <tr>
            <th>Nom</th><th>Prénom</th><th>Email</th><th>Encadrant</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((s) => (
            <tr key={s.id}>
              <td>{s.nom}</td>
              <td>{s.prenom}</td>
              <td>{s.email}</td>
              <td>{s.encadrant?.nom ?? '-'}</td>
              <td>
                <Link to={`/stagiaires/edit/${s.id}`}>Modifier</Link> | 
                <button onClick={() => handleDelete(s.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StagiaireList;

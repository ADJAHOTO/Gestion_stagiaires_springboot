import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchEncadrants, deleteEncadrant } from '../services/api';

function EncadrantList() {
  const [encadrants, setEncadrants] = useState([]);

  useEffect(() => {
    loadEncadrants();
  }, []);

  const loadEncadrants = async () => {
    const data = await fetchEncadrants();
    setEncadrants(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer cet encadrant ?")) {
      await deleteEncadrant(id);
      loadEncadrants();
    }
  };

  return (
    <div>
      <h2>Liste des Encadrants</h2>
      <Link to="/encadrants/ajout">Ajouter un encadrant</Link>
      <table>
        <thead>
          <tr><th>Nom</th><th>Prénom</th><th>Email</th><th>Téléphone</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {encadrants.map(e => (
            <tr key={e.id}>
              <td>{e.nom}</td>
              <td>{e.prenom}</td>
              <td>{e.email}</td>
              <td>{e.telephone}</td>
              <td>
                <Link to={`/encadrants/edit/${e.id}`}>Modifier</Link> | 
                <button onClick={() => handleDelete(e.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EncadrantList;

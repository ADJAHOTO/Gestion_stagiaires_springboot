import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEncadrantById, createEncadrant, updateEncadrant } from '../services/api';

function EncadrantForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [encadrant, setEncadrant] = useState({
    nom: '', prenom: '', email: '', telephone: ''
  });

  useEffect(() => {
    if (id) {
      fetchEncadrantById(id).then(setEncadrant);
    }
  }, [id]);

  const handleChange = (e) => {
    setEncadrant({ ...encadrant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateEncadrant({ ...encadrant, id });
    } else {
      await createEncadrant(encadrant);
    }
    navigate('/encadrants');
  };

  return (
    <div>
      <h2>{id ? 'Modifier' : 'Ajouter'} un encadrant</h2>
      <form onSubmit={handleSubmit}>
        <input name="nom" placeholder="Nom" value={encadrant.nom} onChange={handleChange} required />
        <input name="prenom" placeholder="Prénom" value={encadrant.prenom} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={encadrant.email} onChange={handleChange} required />
        <input name="telephone" placeholder="Téléphone" value={encadrant.telephone} onChange={handleChange} required />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default EncadrantForm;

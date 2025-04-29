import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchStagiaireById, createStagiaire, updateStagiaire, fetchEncadrants } from '../services/api';

function StagiaireForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [stagiaire, setStagiaire] = useState({
    nom: '', prenom: '', email: '', dateDebut: '', dateFin: '', encadrantId: ''
  });
  const [encadrants, setEncadrants] = useState([]);

  useEffect(() => {
    if (id) {
      fetchStagiaireById(id).then(data => {
        setStagiaire({ ...data, encadrantId: data.encadrant?.id || '' });
      });
    }
    fetchEncadrants().then(setEncadrants);
  }, [id]);

  const handleChange = (e) => {
    setStagiaire({ ...stagiaire, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateStagiaire({ ...stagiaire, id });
    } else {
      await createStagiaire(stagiaire);
    }
    navigate('/stagiaires');
  };

  return (
    <div>
      <h2>{id ? 'Modifier' : 'Ajouter'} un stagiaire</h2>
      <form onSubmit={handleSubmit}>
        <input name="nom" placeholder="Nom" value={stagiaire.nom} onChange={handleChange} required />
        <input name="prenom" placeholder="Prénom" value={stagiaire.prenom} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={stagiaire.email} onChange={handleChange} required />
        <input name="dateDebut" type="date" value={stagiaire.dateDebut} onChange={handleChange} required />
        <input name="dateFin" type="date" value={stagiaire.dateFin} onChange={handleChange} required />
        <select name="encadrantId" value={stagiaire.encadrantId} onChange={handleChange} required>
          <option value="">-- Sélectionner un encadrant --</option>
          {encadrants.map(e => (
            <option key={e.id} value={e.id}>{e.nom} {e.prenom}</option>
          ))}
        </select>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default StagiaireForm;

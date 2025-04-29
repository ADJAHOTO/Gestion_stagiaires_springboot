import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // à adapter si ton backend est déployé ailleurs

// ---------- STAGIAIRES ----------

// Récupérer tous les stagiaires
export const fetchStagiaires = async () => {
  const response = await axios.get(`${API_BASE_URL}/stagiaires`);
  return response.data;
};

// Récupérer un stagiaire par ID
export const fetchStagiaireById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/stagiaires/${id}`);
  return response.data;
};

// Créer un nouveau stagiaire
export const createStagiaire = async (stagiaire) => {
  const response = await axios.post(`${API_BASE_URL}/stagiaires`, stagiaire);
  return response.data;
};

// Mettre à jour un stagiaire
export const updateStagiaire = async (stagiaire) => {
  const response = await axios.put(`${API_BASE_URL}/stagiaires`, stagiaire);
  return response.data;
};

// Supprimer un stagiaire
export const deleteStagiaire = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/stagiaires/${id}`);
  return response.data;
};

// ---------- ENCADRANTS ----------

// Récupérer tous les encadrants
export const fetchEncadrants = async () => {
  const response = await axios.get(`${API_BASE_URL}/encadrants`);
  return response.data;
};

// Récupérer un encadrant par ID
export const fetchEncadrantById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/encadrants/${id}`);
  return response.data;
};

// Créer un nouvel encadrant
export const createEncadrant = async (encadrant) => {
  const response = await axios.post(`${API_BASE_URL}/encadrants`, encadrant);
  return response.data;
};

// Mettre à jour un encadrant
export const updateEncadrant = async (encadrant) => {
  const response = await axios.put(`${API_BASE_URL}/encadrants`, encadrant);
  return response.data;
};

// Supprimer un encadrant
export const deleteEncadrant = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/encadrants/${id}`);
  return response.data;
};

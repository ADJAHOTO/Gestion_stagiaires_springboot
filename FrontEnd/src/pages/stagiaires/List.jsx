import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { mockStagiaires } from '../../mocks/stagiaires';

export default function StagiaireList() {
  const [search, setSearch] = useState('');

  const filteredStagiaires = mockStagiaires.filter(stag =>
    `${stag.prenom} ${stag.nom}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <TextField
        label="Rechercher un stagiaire"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Période</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStagiaires.map((stagiaire) => (
              <TableRow key={stagiaire.id}>
                <TableCell>{stagiaire.nom}</TableCell>
                <TableCell>{stagiaire.prenom}</TableCell>
                <TableCell>{stagiaire.email}</TableCell>
                <TableCell>{stagiaire.periode.debut} au {stagiaire.periode.fin}</TableCell>
                <TableCell>{stagiaire.statut}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
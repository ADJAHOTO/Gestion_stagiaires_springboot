import { useState } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  TextField, Chip, Button, Stack, Select, MenuItem, FormControl, InputLabel 
} from '@mui/material';
import { mockDemandes } from '../../mocks/demandes';

const statutColors = {
  en_attente: 'warning',
  acceptee: 'success',
  refusee: 'error'
};

export default function DemandeList() {
  const [search, setSearch] = useState('');
  const [statutFilter, setStatutFilter] = useState('tous');

  const filteredDemandes = mockDemandes.filter(demande => {
    const matchesSearch = `${demande.stagiaire.prenom} ${demande.stagiaire.nom}`.toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatut = statutFilter === 'tous' || demande.statut === statutFilter;
    return matchesSearch && matchesStatut;
  });

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Rechercher"
          variant="outlined"
          sx={{ width: 300 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <FormControl sx={{ width: 200 }}>
          <InputLabel>Statut</InputLabel>
          <Select
            value={statutFilter}
            label="Statut"
            onChange={(e) => setStatutFilter(e.target.value)}
          >
            <MenuItem value="tous">Tous</MenuItem>
            <MenuItem value="en_attente">En attente</MenuItem>
            <MenuItem value="acceptee">Acceptée</MenuItem>
            <MenuItem value="refusee">Refusée</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Stagiaire</TableCell>
              <TableCell>Entreprise</TableCell>
              <TableCell>Date dépôt</TableCell>
              <TableCell>Période</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDemandes.map((demande) => (
              <TableRow key={demande.id}>
                <TableCell>{demande.stagiaire.prenom} {demande.stagiaire.nom}</TableCell>
                <TableCell>{demande.entreprise}</TableCell>
                <TableCell>{demande.dateDepot}</TableCell>
                <TableCell>{demande.periode.debut} au {demande.periode.fin}</TableCell>
                <TableCell>
                  <Chip 
                    label={demande.statut.replace('_', ' ')} 
                    color={statutColors[demande.statut]} 
                  />
                </TableCell>
                <TableCell>
                  <Button 
                    size="small" 
                    variant="outlined"
                    component="a"
                    href={`/demandes/${demande.id}`}
                  >
                    Détails
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
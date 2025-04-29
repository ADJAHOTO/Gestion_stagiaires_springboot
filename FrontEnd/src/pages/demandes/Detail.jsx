import { useParams } from 'react-router-dom';
import { 
  Box, Typography, Paper, Stack, Button, Divider, TextField, Alert 
} from '@mui/material';
import { mockDemandes } from '../../mocks/demandes';

export default function DemandeDetail() {
  const { id } = useParams();
  const demande = mockDemandes.find(d => d.id === parseInt(id));
  const [statut, setStatut] = useState(demande.statut);
  const [commentaire, setCommentaire] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTraiter = (nouveauStatut) => {
    // Simulation traitement
    setStatut(nouveauStatut);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (!demande) return <Typography>Demande non trouvée</Typography>;

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Détail de la demande #{demande.id}
      </Typography>
      
      <Stack spacing={2}>
        <Typography><strong>Stagiaire:</strong> {demande.stagiaire.prenom} {demande.stagiaire.nom}</Typography>
        <Typography><strong>Entreprise:</strong> {demande.entreprise}</Typography>
        <Typography><strong>Période:</strong> {demande.periode.debut} au {demande.periode.fin}</Typography>
        <Typography><strong>Statut actuel:</strong> {statut.replace('_', ' ')}</Typography>
        
        <Divider sx={{ my: 2 }} />
        
        {statut === 'en_attente' && (
          <>
            <Typography variant="h6">Traiter cette demande</Typography>
            <TextField
              label="Commentaire (optionnel)"
              multiline
              rows={3}
              fullWidth
              value={commentaire}
              onChange={(e) => setCommentaire(e.target.value)}
            />
            
            <Stack direction="row" spacing={2}>
              <Button 
                variant="contained" 
                color="success"
                onClick={() => handleTraiter('acceptee')}
              >
                Accepter
              </Button>
              <Button 
                variant="contained" 
                color="error"
                onClick={() => handleTraiter('refusee')}
              >
                Refuser
              </Button>
            </Stack>
          </>
        )}
        
        {showSuccess && (
          <Alert severity="success" onClose={() => setShowSuccess(false)}>
            Demande {statut.replace('_', ' ')} avec succès! Un email a été envoyé au stagiaire.
          </Alert>
        )}
      </Stack>
    </Paper>
  );
}
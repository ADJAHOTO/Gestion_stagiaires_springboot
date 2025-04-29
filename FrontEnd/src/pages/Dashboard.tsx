import { Box, Typography, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { 
  AssignmentInd as StagiairesIcon,
  PendingActions as DemandesIcon,
  Person as EncadrantsIcon 
} from '@mui/icons-material';
import { mockStagiaires, mockDemandes } from './mocks';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, color }) => (
  <Paper sx={{ p: 2, height: '100%' }}>
    <Box display="flex" alignItems="center">
      <Box sx={{ 
        bgcolor: `${color}.light`, 
        color: `${color}.dark`,
        p: 1.5, 
        borderRadius: '50%',
        mr: 2
      }}>
        {icon}
      </Box>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </Box>
    </Box>
  </Paper>
);

export default function Dashboard() {
  const demandesEnAttente = mockDemandes.filter(d => d.statut === 'en_attente').length;
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Tableau de Bord</Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <StatCard 
            icon={<StagiairesIcon fontSize="large" />}
            title="Stagiaires actifs"
            value={mockStagiaires.length}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard 
            icon={<DemandesIcon fontSize="large" />}
            title="Demandes en attente"
            value={demandesEnAttente}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard 
            icon={<EncadrantsIcon fontSize="large" />}
            title="Encadrants"
            value="5" // Valeur mock
            color="success"
          />
        </Grid>
      </Grid>
      
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Dernières demandes</Typography>
        {/* Ici vous pourriez ajouter un composant de tableau réduit */}
      </Paper>
    </Box>
  );
}
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gestion Stagiaires
        </Typography>
        <Button color="inherit" component={Link} to="/stagiaires">
          Stagiaires
        </Button>
        <Button color="inherit" component={Link} to="/demandes">
          Demandes
        </Button>
      </Toolbar>
    </AppBar>
  );
}
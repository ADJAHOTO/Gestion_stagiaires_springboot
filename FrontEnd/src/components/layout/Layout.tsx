import { Container, CssBaseline } from '@mui/material';
import Header from './Header';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
}
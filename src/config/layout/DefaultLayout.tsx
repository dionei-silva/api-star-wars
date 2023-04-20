import { Container, Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Grid container width="100vw" height="100vh" minHeight="100vh" maxWidth="100vw" sx={{ overflowX: 'hidden' }}>
      <Grid item xs={12}>
        <ResponsiveAppBar />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundImage: 'url(./assets/images/wallpaperbetter.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
        }}
      >
        <Container
          sx={{
            marginTop: '20px',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
        >
          {children}
        </Container>
      </Grid>
    </Grid>
  );
};

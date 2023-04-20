import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { TextField, useTheme } from '@mui/material';

function ResponsiveAppBar() {
  const theme = useTheme();
  return (
    <AppBar position="static" sx={{ background: theme.palette.primary.main }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="img" src="./assets/images/star-wars-logo.png" width="12%" />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: { md: 'flex-end' } }}>
            <Button variant="text" color="inherit">
              Listar personagens
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: { md: 'flex-end' } }}>
            <TextField margin="normal" variant="standard" type="text" id="person" label="Buscar um personagem" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

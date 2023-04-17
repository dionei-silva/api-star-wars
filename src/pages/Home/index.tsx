import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TitlePage from '../../components/TitlePage';
import { useAppSelector } from '../../store/hooks';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log('FOI');
  };

  const handleSearchClick = () => {};

  return (
    <Grid container>
      <Grid item>
        <TitlePage title="Home" />
        <input type="text" onChange={handleSearchChange} />
        <button onClick={handleSearchClick}>Buscar</button>
      </Grid>
    </Grid>
  );
};

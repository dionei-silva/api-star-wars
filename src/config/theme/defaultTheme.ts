import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ccc',
    },
    mode: 'dark',
  },
});

export default defaultTheme;

import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Routers } from './Routers/Routers';
import { DefaultLayout } from './config/layout/DefaultLayout';
import { persistor, store } from './store';
import defaultTheme from './config/theme/defaultTheme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <DefaultLayout>
              <Routers />
            </DefaultLayout>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

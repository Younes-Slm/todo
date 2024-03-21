import React, {FC, ReactElement } from 'react';
import {ThemeProvider, CssBaseline } from '@mui/material';
import customTheme from './theme/customTheme';
import {Dashboard} from './pages/dashboard/dashboard';


// function App() {
//   return (
//    <h1>Hiii</h1>
//   );
// }

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};
export default App;

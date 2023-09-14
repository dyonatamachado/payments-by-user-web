import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      
      <div className="app">
        <header className="app-header">
          <Link to={'/dashboard'} className='nav-link'>Dashboard</Link>
          <Link to={'/users'} className='nav-link'>Usuários</Link>
          <Link to={'/sheet'}className='nav-link'>Planilha de Pagamentos</Link>
        </header>

        <main className="app-main">
          <Outlet></Outlet>
        </main>
      </div>
    </ThemeProvider>

  );
}

export default App;

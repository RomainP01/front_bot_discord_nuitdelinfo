import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HomePage } from './pages/HomePage';
import { getTheme } from './queries/getTheme'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from './firebaseConfig';
import { useEffect, useState } from 'react';
import { PaletteMode } from '@mui/material';
const darkTheme = (color: PaletteMode) => createTheme({
  palette: {
    mode: color,
  },
});

export const App = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [color, setColor] = useState();
  useEffect(() => {
    const getColorFirebase = async () => {
      const result = await getTheme(db);
      setColor(result);
    };
    getColorFirebase();
  }, []);
  return (
    <ThemeProvider theme={darkTheme(color as unknown as PaletteMode)}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  )
}






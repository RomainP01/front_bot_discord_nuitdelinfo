import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { addHeaderToComponent } from './templates/PageWithHeader'
import { getTheme } from './queries/getTheme'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from './firebaseConfig';
import { useEffect, useState } from 'react';
import { PaletteMode } from '@mui/material';
import './utils/i18n';
import i18next from 'i18next';
import { getLanguage } from './queries/getLanguage';
import { DocumentationPage } from './pages/DocumentationPage';
import { MessagesPage } from './pages/MessagesPage';
const darkTheme = (color: PaletteMode) => createTheme({
  palette: {
    mode: color,
  },
});

export const App = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [color, setColor] = useState();
  const [language, setLanguage] = useState()
  useEffect(() => {
    const getColorFirebase = async () => {
      const result = await getTheme(db);
      setColor(result);
    };
    const getLanguageFirebase = async () => {
      const result = await getLanguage(db);
      setLanguage(result);
    };
    getColorFirebase();
    getLanguageFirebase();
  }, []);
  i18next.changeLanguage(language)
  const HeaderHomePage = addHeaderToComponent(HomePage, db)
  const HeaderDocumentationPage = addHeaderToComponent(DocumentationPage, db)
  const HeaderMessagesPage = addHeaderToComponent(MessagesPage, db)
  return (
    <ThemeProvider theme={darkTheme(color as unknown as PaletteMode)}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<HeaderHomePage />} />
        <Route path='/Doc' element={<HeaderDocumentationPage />} />
        <Route path='/Messages' element={<HeaderMessagesPage />} />
      </Routes>
    </ThemeProvider>
  )
}






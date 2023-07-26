import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from "react-i18next";
import LanguageSelector from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t("home.welcome")}</h1>
      <h3>{t("home.description")}</h3>
      <button>{t("home.button")}</button>
      <hr></hr>
      <LanguageSelector />
    </div>
  )
}

export default App

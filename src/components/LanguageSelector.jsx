import React from "react";
import '../locales/i18n';
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("es")}>MX</button>
    </div>
  );
}

export default LanguageSelector;
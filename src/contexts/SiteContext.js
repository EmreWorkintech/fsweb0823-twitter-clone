import { createContext, useState } from "react";

export const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [loggedUser, setLoggedUser] = useState(null);

  const localizedTexts = {
    tr: { searchPage: { search_text: "Arama" } },
    en: { searchPage: { search_text: "Search" } },
  };

  const texts = localizedTexts[lang];

  return (
    <SiteContext.Provider
      value={{
        lang,
        theme,
        setLang,
        setTheme,
        texts,
        loggedUser,
        setLoggedUser,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("lang", "en");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [loggedUser, setLoggedUser] = useLocalStorage("user", null);
  const [tweetToEdit, setTweetToEdit] = useState(null);

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
        tweetToEdit,
        setTweetToEdit,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

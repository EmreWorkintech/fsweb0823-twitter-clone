import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

const Search = () => {
  const { texts } = useContext(SiteContext);

  return <div>{texts.searchPage.search_text}</div>;
};

export default Search;

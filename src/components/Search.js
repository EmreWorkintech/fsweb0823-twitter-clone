import { useContext, useState } from "react";
import { SiteContext } from "../contexts/SiteContext";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useDispatch } from "react-redux";
import { getTweets } from "../store/actions/tweetActions";

const Search = () => {
  const { texts } = useContext(SiteContext);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
    axiosWithAuth()
      .get(`/tweets?search=${e.target.value}`)
      .then((res) => {
        dispatch(getTweets(res.data));
      });
  };

  return (
    <form>
      <input
        className="py-2 px-4 bg-slate-400 text-slate-950 border-2 rounded-full"
        placeholder={texts.searchPage.search_text}
        name="search"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;

import { useState } from "react";
import SuggestedUser from "./SuggestedUser";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([
    { name: "Emre" },
    { name: "Erdem" },
  ]);

  return (
    <div>
      {suggestions.map((user) => (
        <SuggestedUser user={user} />
      ))}
    </div>
  );
};

export default Suggestions;

import { useState } from "react";
import Tweet from "./Tweet";

const TweetList = () => {
  const [tweets, setTweets] = useState([
    { tweet: "lorem ipsum1", user: { name: "Emre" } },
    { tweet: "lorem ipsum2", user: { name: "Erdem" } },
  ]);
  return (
    <div>
      {tweets.map((item) => (
        <Tweet tweet={item} />
      ))}
    </div>
  );
};

export default TweetList;

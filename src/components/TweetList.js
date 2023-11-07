import Tweet from "./Tweet";
import { useSelector } from "react-redux";

const TweetList = () => {
  const tweets = useSelector((store) => store.tweets);
  return (
    <div>
      {tweets.map((item) => (
        <Tweet key={item.id} tweet={item} />
      ))}
    </div>
  );
};

export default TweetList;

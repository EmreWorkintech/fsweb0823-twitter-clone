import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const Tweet = ({ tweet }) => {
  return (
    <div className="flex items-start gap-x-8 mb-8">
      <img className="rounded-full w-1/5" src={tweet.avatar} alt={tweet.user} />
      <div className="w-4/5">
        <p className="font-bold">
          {tweet.user} <span className="font-light ml-1">@{tweet.user} </span>
        </p>
        <p className="pt-2 pb-2">{tweet.tweet}</p>
        <p>
          <span className="mr-16">
            <FontAwesomeIcon icon={faHeart} /> {tweet.like_count}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} /> {tweet.comment_count}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Tweet;

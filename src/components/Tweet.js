import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faEdit,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";
import { useDispatch } from "react-redux";
import { deleteTweet } from "../store/actions/tweetActions";
import { axiosWithAuth } from "../api/axiosWithAuth";

const Tweet = ({ tweet }) => {
  const { loggedUser, setTweetToEdit } = useContext(SiteContext);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setTweetToEdit(tweet);
  };

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/tweets/${tweet.id}`)
      .then((res) => {
        dispatch(deleteTweet(tweet.id));
      });
  };

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
          <span className="mr-16">
            <FontAwesomeIcon icon={faComment} /> {tweet.comment_count}
          </span>
          {loggedUser.user === tweet.user && (
            <>
              <span
                className="cursor-pointer text-blue-600 mr-16"
                onClick={handleEdit}
              >
                <FontAwesomeIcon icon={faEdit} />
              </span>
              <span
                className="cursor-pointer text-red-600 mr-16"
                onClick={handleDelete}
              >
                <FontAwesomeIcon icon={faMinusSquare} />
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Tweet;

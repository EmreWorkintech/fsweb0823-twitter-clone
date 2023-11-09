import { useContext, useEffect, useState } from "react";
import { SiteContext } from "../contexts/SiteContext";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useDispatch } from "react-redux";
import { postTweet, updateTweet } from "../store/actions/tweetActions";

const PostTweetForm = () => {
  const { loggedUser, tweetToEdit } = useContext(SiteContext);
  const [newTweet, setNewTweet] = useState({
    tweet: "",
    like_count: 0,
    comment_count: 0,
    user: loggedUser.user,
    avatar: loggedUser.avatar,
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTweet.id) {
      axiosWithAuth()
        .put(`/tweets/${newTweet.id}`, newTweet)
        .then((res) => {
          dispatch(updateTweet(res.data));
        });
    } else {
      axiosWithAuth()
        .post(`/tweets`, newTweet)
        .then((res) => {
          dispatch(postTweet(res.data));
        });
    }
  };

  useEffect(() => {
    if (tweetToEdit) {
      setNewTweet(tweetToEdit);
    }
  }, [tweetToEdit]);

  const handleChange = (e) => {
    setNewTweet({ ...newTweet, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex items-start gap-x-8 mb-8">
      <img
        className="rounded-full w-1/5"
        src={loggedUser.avatar}
        alt={loggedUser.username}
      />
      <form className="w-4/5" onSubmit={handleSubmit}>
        <input
          className="py-2 px-4 text-slate-950 w-full"
          value={newTweet.tweet}
          name="tweet"
          onChange={handleChange}
        />
        <button className="bg-blue-400 text-white rounded-full py-2 px-8 block my-3">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default PostTweetForm;

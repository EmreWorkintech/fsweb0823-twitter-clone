const Tweet = ({ tweet }) => {
  return (
    <div>
      <p>{tweet.tweet}</p>
      <p>
        {tweet.user} - Likes: {tweet.like_count} - Comments:{" "}
        {tweet.comment_count}
      </p>
    </div>
  );
};

export default Tweet;

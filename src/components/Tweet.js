const Tweet = ({ tweet }) => {
  return (
    <div>
      <p>{tweet.tweet}</p>
      <p>{tweet.user.name}</p>
    </div>
  );
};

export default Tweet;

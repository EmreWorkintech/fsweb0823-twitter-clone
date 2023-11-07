export const GET_TWEETS = "gets all tweets";
export const POST_TWEET = "posts a new tweet";
export const DELETE_TWEET = "deletes a tweet by a given id";
export const UPDATE_TWEET = "updates a tweet by id";

export const getTweets = (tweets) => {
  return {
    type: GET_TWEETS,
    payload: tweets,
  };
};

export const postTweet = (tweet) => {
  return {
    type: POST_TWEET,
    payload: tweet,
  };
};

export const deleteTweet = (id) => {
  return {
    type: DELETE_TWEET,
    payload: id,
  };
};

export const updateTweet = (tweet) => {
  return {
    type: UPDATE_TWEET,
    payload: tweet,
  };
};

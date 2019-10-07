import React from "react";
import styled from "styled-components";

import TweetActions from "./tweet-actions";

const StyledTweet = styled.article`
  border-top: 1px solid #ccc;
  color: rgb(20, 23, 26);
  display: flex;
  padding: 15px;
  transition: background 0.2s ease-in-out;

  :hover {
    background-color: aliceblue;
  }
  :first-child {
    border-top: none;
  }
  .avatar-container {
    max-width: 50px;
    padding-right: 15px;

    img {
      border-radius: 50%;
      max-width: 50px;
    }
  }
  .title {
    color: rgb(20, 23, 26);
    font-weight: bold;
    text-decoration: none;
  }
  .title:hover {
    text-decoration: underline;
  }
  .handle-time {
    color: rgb(101, 119, 134);
    font-size: 0.8rem;
    margin-left: 5px;
  }
`;
const Tweet = ({ data }) => {
  const { id, text, image, replies = [], retweets = [], likes = 0 } = data;

  return (
    <StyledTweet aria-haspopup="false" role="article">
      <div className="avatar-container">
        <img src={image} alt="avatar" />
      </div>
      <div className="tweet-body">
        <div className="name-handle-wrapper">
          <a className="title" href="#">
            {id}
          </a>
          <span className="handle-time">@gitMonks - 19h</span>
        </div>
        <div>{text}</div>
        <TweetActions replies={replies} retweets={retweets} likes={likes} />
      </div>
    </StyledTweet>
  );
};

export default Tweet;

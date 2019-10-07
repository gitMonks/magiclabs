import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRetweet, faReply } from "@fortawesome/free-solid-svg-icons";

const replyIcon = <FontAwesomeIcon icon={faReply} />;
const retweetIcon = <FontAwesomeIcon icon={faRetweet} />;
const likeIcon = <FontAwesomeIcon icon={faHeart} />;

const StyledTweetActions = styled.div`
  padding: 5px 0;

  span {
    color: rgb(101, 119, 134);
    cursor: pointer;
    font-size: 0.8rem;
    margin-right: 40px;
  }
`;

const TweetActions = ({ replies, retweets, likes }) => {
  const handleClick = e => {
    // Todo handle actions using optimistic ui principals
    console.log("Update- follow optimistic ui principals");
  };

  return (
    <StyledTweetActions>
      <span onClick={handleClick} role="button">
        <i className="icon">{replyIcon}</i>{" "}
        {replies.length > 0 && replies.length}
      </span>
      <span onClick={handleClick} role="button">
        <i className="icon">{retweetIcon}</i>{" "}
        {retweets.length > 0 && retweets.length}
      </span>
      <span onClick={handleClick} role="button">
        <i className="icon">{likeIcon}</i> {likes > 0 && likes}
      </span>
    </StyledTweetActions>
  );
};

export default TweetActions;

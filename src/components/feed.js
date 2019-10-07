import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

import Tweet from './tweet';

const StyledFeed = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  .container {
    border: 1px solid #ccc;
    max-width: 500px;
  }
  .error {
    background: rgba(195, 9, 42, 0.85);
    bottom: 0;
    color: #fff;
    left: 0;
    padding: 50px 30px;
    position: fixed;
    right: 0;
    text-align: center;
  }
`;

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const doc = document.documentElement;

  // Sort tweets with the newest on top
  const sortTweets = arrTweets =>
    arrTweets.sort((a, b) => (a.id > b.id ? -1 : 1));

  //Remove the duplicate tweets based on the id
  const removeDuplicates = (arrTweets, prop) => {
    return arrTweets.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  };

  const loadTweets = () => {
    setIsLoading(true);
    setError(false);
    fetch('http://5e95b136.ngrok.io/api?count=10')
      .then(results => {
        return results.json();
      })
      .then(newTweets => {
        const sortedTweets = sortTweets([...newTweets, ...tweets]);
        const uniqueTweets = removeDuplicates(sortedTweets, 'id');
        setTweets(uniqueTweets);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
        doc.scrollTop = 0;
        // If there are some tweets already on the screen then
        // hide the error message after 3 seconds
        tweets.length &&
          setTimeout(() => {
            setError(false);
          }, 3000);
      });
  };

  // Load tweets when user scrolls to the bottom
  window.onscroll = debounce(() => {
    // Bails early if:
    // * it's already loading
    // * there's nothing left to load
    if (isLoading) return;

    // Checks that the page has scrolled to the bottom
    if (window.innerHeight + doc.scrollTop === doc.offsetHeight) {
      // doc.scrollTop = 0;
      loadTweets();
    }
  }, 400);

  useEffect(() => {
    loadTweets();
  }, []);

  return (
    <StyledFeed>
      <div className="container">
        {error && (
          <div className="error">
            Ooops our server is having hiccups.
            <h4>Please refresh/scroll again in a moment to load more tweets</h4>
          </div>
        )}
        {tweets.map(tweet => (
          <Tweet key={tweet.id} data={tweet} />
        ))}
      </div>
    </StyledFeed>
  );
};

export default Feed;

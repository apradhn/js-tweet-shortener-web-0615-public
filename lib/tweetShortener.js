'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var substitutedTweet;
    substitutedTweet = tweet.replace("hello", "hi")
    .replace(/\bbe\b/gi, "b")
    .replace(/\byou\b/gi, "u")
    .replace(/\bat\b/gi, "@")
    .replace(/\band\b/gi, "&")
    .replace(/\btwo\b|\btoo\b|\bto\b/gi, "2")
    .replace(/\bfor\b|\bfour\b/gi, "4");
    return substitutedTweet;
  },
  bulkShortener: function(tweets){
    var shortenedTweets = [];
    tweets.forEach(function(tweet){
      shortenedTweets.push(tweetShortener.wordSubstituter(tweet));
    });
    return shortenedTweets;
  },
  selectiveShortener: function(tweet){
      if (tweet.length < 140) { return tweet; }
      else { return tweetShortener.wordSubstituter(tweet); }
  },
  shortenedTruncator: function(tweet){
    var truncated;
    if (tweet.length > 140) {
      truncated = tweet.slice(0, 137) + "...";
      return truncated;
    } else {
      return tweet;
    }
  },
};



import React from 'react'
import Box from '@mui/material/Box';
import TweetField from './TweetField'

const tweetLength = 280

function sliceTweet(longTweet, tweetSize) {
    const numChunksNoNumbering = Math.ceil(longTweet.length / tweetSize)
    const numberingLength = ((numChunksNoNumbering.toString().length) * 2 + 2);
    const size = tweetSize - numberingLength

    const splitted = longTweet.split(' ')
    let tweets = []
    let tweet = ''
    for(let word of splitted){
        if(tweet.length + word.length <= size){
            tweet = tweet + ' ' + word
        } else if (tweet.length + word.length > size){
            tweets.push(tweet)
            tweet = ' ' + word
        }
    }
    tweets.push(tweet)
    return tweets
}

const SlicedTweets = ({tweet}) => {
    const slicedTweets = sliceTweet(tweet, tweetLength)
    return(
        <Box sx={{m: 7, width: '100%', maxWidth: 500}}>
            {slicedTweets.map((slicedTweet, index )=>
                <TweetField key={index} tweet={slicedTweet} index={index} maxSlices={slicedTweets.length}/>
            )}
        </Box>
    )
}

export default SlicedTweets
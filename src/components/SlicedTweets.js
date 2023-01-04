import React from 'react'
import Box from '@mui/material/Box';
import TweetField from './TweetField'

const SlicedTweets = ({tweet}) => {
    //Make this to slice the long tweet to smaller parts.
    return(
        <Box sx={{m: 7, width: '100%', maxWidth: 500}}>
            <TweetField tweet={tweet} />
            <TweetField tweet={tweet} />
            <TweetField tweet={tweet} />
        </Box>
    )
}

export default SlicedTweets
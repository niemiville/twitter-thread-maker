import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const LongTweetField = ({tweet, setTweet}) => {
    return(
        <Box>
        <TextField
            id="outlined-multiline-flexible-fullWidth"
            fullWidth
            label="Long tweet"
            multiline
            placeholder="Write your long tweet here"
            value={tweet}
            onChange={({ target }) => setTweet(target.value)}
        />
        </Box>
    )
}

export default LongTweetField
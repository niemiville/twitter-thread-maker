import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const LongTweetField = ({tweet, setTweet}) => {
    return(
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 7, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
            id="outlined-multiline-static"
            label="Long tweet"
            multiline
            rows={10}
            columns={200}
            placeholder="Write your long tweet here"
            value={tweet}
            onChange={({ target }) => setTweet(target.value)}
        />
        </Box>
    )
}

export default LongTweetField
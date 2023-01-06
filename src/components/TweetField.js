import React from 'react'
import Typography from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CopyToClipboardButton from './CopyToClipboardButton'
import CardActions from '@mui/material/CardActions';

const TweetField = ({tweet, index, maxSlices}) => {
    let finalTweet = ''
    if(tweet !== ' '){
        finalTweet = (index + 1).toString() + "/" + maxSlices + tweet
    } 

    return(
        <Card sx={{ marginBottom: '10px'}}>
            <CardContent sx={{ paddingBottom: '5px'}}>
                <Typography variant="body1">
                    {finalTweet}
                </Typography>
            </CardContent>
            <CardActions  sx={{ paddingTop: '5px', display: 'flex', justifyContent: "flex-end" }}>
                <CopyToClipboardButton tweet={finalTweet}/>
            </CardActions>
        </Card> 
    )
}

export default TweetField
import React from 'react'
import Typography from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CopyToClipboardButton from './CopyToClipboardButton'
import CardActions from '@mui/material/CardActions';

const TweetField = ({tweet, index, maxSlices}) => {
    const finalTweet = (index + 1).toString() + "/" + maxSlices + tweet
    return(
        <Card sx={{ m: 3, minWidth: 275, display: 'flex' }}>
            <CardContent>
                <Typography variant="body1">
                    {finalTweet}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
                <CopyToClipboardButton tweet={finalTweet}/>
            </CardActions>
        </Card> 
    )
}

export default TweetField
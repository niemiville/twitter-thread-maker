import React from 'react'
import Typography from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const TweetField = ({tweet}) => {
    return(
        <Card sx={{ m: 3, minWidth: 275 }}>
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    {tweet}
                </Typography>
            </CardContent>
        </Card> 
    )
}

export default TweetField
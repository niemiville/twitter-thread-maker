import LongTweetField from './components/LongTweetField'
import SlicedTweets from './components/SlicedTweets'
import React, {useState} from 'react'
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function App() {
  const [tweet, setTweet] = useState('')

  const handleEvent = event =>{
    setTweet(event)
  }

  return ( 
      <Grid2 container sx={{ m: '2%' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2}} >
        <Grid2 item sm={12} xs={12} >
          <Typography variant="h4" component="h1" align='center'  sx={{ mb: '1%' }}>
            Twitter Thread Maker
          </Typography>
        </Grid2>
        <Grid2 item sm={8} xs={12} >
          <LongTweetField tweet={tweet} setTweet={handleEvent} />
        </Grid2>
        <Grid2 item sm={4} xs={12} >
          <Typography variant="h5" component="h2" sx={{ mb: '1%'}} >
            Sliced Tweets
          </Typography>
          <SlicedTweets tweet={tweet} />
        </Grid2>
      </Grid2>
  );
}

export default App;

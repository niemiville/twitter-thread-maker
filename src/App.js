import LongTweetField from './components/LongTweetField'
import SlicedTweets from './components/SlicedTweets'
import Box from '@mui/material/Box';
import React, {useState} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  const [tweet, setTweet] = useState('')

  const handleEvent = event =>{
    setTweet(event)
  }

  return (
    <>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <LongTweetField tweet={tweet} setTweet={handleEvent} />
      </Grid>
      <Grid item xs={6}>
        <SlicedTweets tweet={tweet} />
      </Grid>
    </Grid>
    </>
  );
  }

export default App;

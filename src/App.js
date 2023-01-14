import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from '@mui/icons-material/Search';
import emojiData from './assets/EmojiData';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
export default function App() {

  let [data, setData] = useState([]);
  let [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    setData([...emojiData]);
    setDataToShow([...emojiData]);
  }, [])

  const searchData = (val) => {
    let searched = data.filter((e, i) => e.description.toLowerCase().includes(val.toLowerCase()))
    setDataToShow(searched);
  }

  return (
    <div className='mainBox'>

      <div className='searchBox'>
        <SearchIcon />
        <input onChange={(e) => searchData(e.target.value)} className='inputField' placeholder='search here'></input>
      </div>

      <Grid className='dataBox' container spacing={5}>
        {dataToShow && dataToShow.length > 0 ?
          dataToShow.map((e, i) => {
            return <Grid key={i} xl={2} lg={2} md={3} sm={4} xs={6} item >
              <Box className='card'>
                <Typography variant='h3' sx={{ textAlign: 'center' }} >{e.emoji}</Typography>
                <Typography variant='p' className='description' >{e.description}</Typography>
              </Box>
            </Grid>
          }) :
          <div className='warn'>Sorry! Not Found</div>
        }
      </Grid>



    </div>
  )
}

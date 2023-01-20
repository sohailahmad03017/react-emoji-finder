import React, { useEffect, useState } from 'react'
import emojiData from '../assets/EmojiData';
import { Box, Grid} from '@mui/material';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';

export default function EmojiFinder() {

  let [data, setData] = useState([]);
  let [dataToShow, setDataToShow] = useState([]);

  const searchData = (val) => {
    let searched = data.filter((e, i) => e.description.toLowerCase().includes(val.toLowerCase()))
    setDataToShow(searched);
  }

  useEffect(() => {
    setData([...emojiData]);
    setDataToShow([...emojiData]);
  },[])

  return (
    <Box className='mainBox'>
      <SearchBox onChange={searchData} />     
      <Grid className='dataBox' container spacing={5}>
        {dataToShow && dataToShow.length > 0 ? dataToShow.map((e, i) => {
            return <Card key={i} emoji={e.emoji} description={e.description} />
          }) :<Box className='warn'>Sorry! Not Found</Box>}
      </Grid>
    </Box>
  )
}
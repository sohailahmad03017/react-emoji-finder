import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';


export default function SearchBox({onChange}) {
  return (
    <Box className='searchBox'>
        <SearchIcon />
        <input onChange={(e) => onChange(e.target.value)} className='inputField' placeholder='search here'></input>
      </Box>
  )
}

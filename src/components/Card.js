import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Card({emoji,description}) {
    return (
      <Grid xl={2} lg={2} md={3} sm={4} xs={6} item >
         <Box className='card'>
            <Typography variant='h3' sx={{ textAlign: 'center' }} >{emoji}</Typography>
            <Typography variant='p' className='description' >{description}</Typography>
        </Box>
    </Grid>
  )
}

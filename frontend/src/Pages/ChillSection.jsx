import React from 'react'
import { Grid, Box, Paper,Typography } from '@mui/material'
import Spotify from '../Components/Spotify'
import CardSwiper from '../Components/CardSwiper'
const ChillSection = () => {
    return (
        <>
            <Box sx={{ m: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{ height: 500 }}>
                            1
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper>
                        <Typography variant ="h5" sx={{px : 2, pt : 1}}>Memes</Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={12} ><CardSwiper /></Grid>
                                <Grid item xs={12} ><CardSwiper /></Grid>

                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Spotify />
                    </Grid>
                </Grid>
                <Grid container>

                </Grid>

            </Box>
        </>
    )
}

export default ChillSection
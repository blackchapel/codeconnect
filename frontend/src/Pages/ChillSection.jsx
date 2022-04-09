import React from 'react'
import { Grid, Box, Paper } from '@mui/material'
import Spotify from '../Components/Spotify'
import CardSwiper from '../Components/CardSwiper'
const ChillSection = () => {
    return (
        <>
            <Box sx={{ m: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Paper sx={{ height: 500 }}>
                            1
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Spotify />
                    </Grid>
                    <Grid item xs={8}>
                        <Paper sx={{ height: "auto" }}>
                            <CardSwiper></CardSwiper>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container>

                </Grid>

            </Box>
        </>
    )
}

export default ChillSection
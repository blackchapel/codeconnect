import React from "react";
import { Grid, Box, Paper, Typography, Image } from "@mui/material";
import Spotify from "../Components/Spotify";
import CardSwiper from "../Components/CardSwiper";

const ChillSection = () => {
  return (
    <>
      <Box sx={{ m: 1 }}>
        <Grid container spacing={2} rowSpacing={3}>
          <Grid item xs={12} sx={{borderRadius : 5}}>
            
                <img alt="chill section" style={{borderRadius : 10, m : 1}} src="https://media.giphy.com/media/YGV1S4MpyywBbIfc4Y/giphy.gif" height="570px" width="100%"/>
            
          </Grid>
          <Grid item xs={8}>
            <Paper
              sx={{ backgroundColor: "#16213E", color: "white", boxShadow: 0 }}
            >
              <Typography variant="h5" sx={{ px: 2, pt: 1 }}>
                Memes
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <CardSwiper />
                </Grid>
                <Grid item xs={12}>
                  <CardSwiper />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Spotify />
          </Grid>
        </Grid>
        <Grid container></Grid>
      </Box>
    </>
  );
};

export default ChillSection;

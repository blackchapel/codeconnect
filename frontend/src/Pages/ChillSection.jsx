import React from "react";
import { Grid, Box, Paper, Typography, Image } from "@mui/material";
import Spotify from "../Components/Spotify";
import CardSwiper from "../Components/CardSwiper";

const ChillSection = () => {
  return (
    <>
      <Box sx={{ m: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              sx={{backgroundColor: "#1A1A2E", color: "white", borderRadius: "20px" }}
            >
                <img alt="chill section" src="https://media.giphy.com/media/YGV1S4MpyywBbIfc4Y/giphy.gif" height="570px" width="100%"/>
            </Paper>
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

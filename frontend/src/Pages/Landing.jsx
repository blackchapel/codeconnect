import React from "react";
import Video from "../Videos/pexels-cottonbro-9665235.mp4";
import Vid1 from '../Videos/vid1.mp4'
import Vid2 from '../Videos/vid4.mp4'
import Vid3 from '../Videos/vid2 (1).mp4'
import Vid5 from '../Videos/vid3 (2).mp4'
import logo from '../Images/logo.png'
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import BlogCardSwiper from "../Components/BlogCardSwiper";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  width: "100%",
  left: "50%",
  top: "50%",
  height: "230%",
  objectFit: "cover",
  transform: "translate(-50%,-50%)",
  zIndex: "-1",
};

const style2={
  width: "100%",
  left: "50%",
  top: "50%",
  height: "10%",
}
function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <video autoPlay loop muted style={style}>
        <source src={Video} type="video/mp4" />
      </video>

      <Box
        sx={{ display: "flex", flexDirection: "column", margin: "0" }}
        color="secondary"
      >
        <AppBar position="static" sx={{ boxShadow: 0 }}>
          <Toolbar>
            <Typography sx={{flexGrow : 1}}>CodeConnect</Typography>
            <Button
              color="secondary"
              variant="outlined"
              sx={{ mx: 2 }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ m: 2 }}>
          <Grid container spacing={2}>

            <Grid item xs={3}>
              <video autoPlay loop muted >
                <source src={Vid1} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={3}>
            <video autoPlay loop muted >
                <source src={Vid2} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={3}>
            <video autoPlay loop muted >
                <source src={Vid3} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={3}>
            <video autoPlay loop muted >
                <source src={Vid5} type="video/mp4" />
              </video>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ backgroundColor: "transparent", boxShadow: 0 }}>
                <Typography variant="h4" sx={{ color: "white" }}>
                  Blogs
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <BlogCardSwiper />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Landing;

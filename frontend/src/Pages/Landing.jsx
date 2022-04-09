import React from "react";
import Video from "../Videos/pexels-cottonbro-9665235.mp4";

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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CodeConnect
            </Typography>
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
            <Grid item xs={8}>
              <Paper sx={{ height: 250 }}>8</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper sx={{ height: 250, backgroundColor: "red" }}>4</Paper>
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

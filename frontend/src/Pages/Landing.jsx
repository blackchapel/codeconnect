import React from "react";
import Video from "../Videos/Pexels Videos 2759484.mp4"
import { AppBar, Typography, Button, Toolbar, Box, Grid, Paper } from "@mui/material"
function Landing() {
    return (
        <>
            {/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video> */}

                <AppBar sx={{ boxShadow: 0  , zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            CodeConnect
                        </Typography>
                        <Button color="secondary" variant="outlined" sx={{ mx: 2 }}>Sign up</Button>
                        <Button color="secondary" variant="contained">Login</Button>
                    </Toolbar>
                </AppBar>
                <Paper>1</Paper>
     
            sdjfkfjslkfj
        </>
    );
}

export default Landing
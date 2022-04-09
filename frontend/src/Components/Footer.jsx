import React from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#1A1A2E",
        height: "auto",
        color: "white",
        width: "100%",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item sx={{ margin: "10px" }}>
          <h3 style={{ textAlign: "center" }}> Contributors:</h3>
          <ul>
            {[
              "Prateek Ranka",
              "Yash Brahmbhatt",
              "Kunal Chandwani",
              "Vidhita Pai",
            ].map((name) => {
              return (
                <motion.li key={name} whileHover={{ scale: 1.1 }} style={{margin: "3px"}}>
                  {name}
                </motion.li>
              );
            })}
          </ul>
        </Grid>
        <Grid item sx={{ margin: "10px" }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid
              component={motion.div}
              item
              sx={{ fontSize: "80px" }}
              whileInView={{
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  duration: 2,
                  yoyo: Infinity,
                },
              }}
            >
              <FaGithub />
            </Grid>
            <Grid item>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                sx={{color: "#E94560"}}
              >
                {[
                  "Prateek Ranka",
                  "Yash Brahmbhatt",
                  "Kunal Chandwani",
                  "Vidhita Pai",
                ].map((name) => {
                  return <Button sx={{color: "#E94560"}}>{name}</Button>;
                })}
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;

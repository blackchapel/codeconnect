import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import { motion } from "framer-motion";
import { useState, useEffect } from "react"
import axios from "axios"
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import GHButton from '../Components/GHButton'
export default function SignInSide() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',

  })

  const getData = async () => {
    const userData = { name, email, password }
    const response = await axios.post('http://localhost:3001/api/auth/signup', userData)
    console.log(response);
    localStorage.setItem('user',JSON.stringify(response.data.data.newUser))
    localStorage.setItem('user_id',JSON.stringify(response.data.data.newUser.user_id))
    localStorage.setItem('user_blogs',JSON.stringify(response.data.data.newUser.blogsCreated))
    localStorage.setItem('user_posts',JSON.stringify(response.data.data.newUser.postsCreated))
    return response.data

  }

  const { name, email, password } = formData

  const onChange = (e) => {

    setFormData((prevState) => ({

      ...prevState,
      [e.target.name]: e.target.value,

    }))
  }

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault()
    getData();
  }

  useEffect(() => { getData() },[])


  return (
    <motion.div
      style={{
        margin: 40,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      exit={{ opacity: 0, transition: { ease: 'easeInOut', duration: 1 } }}
    >
      <Grid container component="main" sx={{ height: "75vh" }}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ul: { margin: 0, padding: 0, listStyle: "none" },
            body: { margin: 0, backgroundColor: "#16213E" },
          }}
        />
        <Grid
          item
          xs={false}
          sm={3}
          md={7}
          sx={{
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            backgroundImage:
              'url("https://cdn.dribbble.com/users/4189928/screenshots/13274007/media/44720bb0c4def0478388a2cbf0ab7b0a.gif")',
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={9}
          md={5}
          component={Paper}
          square
          sx={{ borderTopRightRadius: 15, borderBottomRightRadius: 15, p: 1 }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label=" Name"
                    name="name"
                    onChange={onChange}
                    autoFocus
                  />
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={onChange}
                autoComplete="email"
                autoFocus
              />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={onChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password2"
                    label="Confirm Password"
                    onChange={onChange}
                    name="password2"
                    type="password"
                    autoFocus
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                sx={{ mt: 3, mb: 2, boxShadow: 0, color: "white" }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Divider color="primary" sx={{ mt: 2 }}>
                <Chip label="OR" />
              </Divider>
              <GHButton />
              <Grid container>
                <Grid item>
                  <Link to="/login">{"Already have an Account ? Sign In"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
}
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate, Link } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react"
import axios from "axios"
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import GHButton from '../Components/GHButton'
export default function SignInSide() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // const [token, setToken] = useState()
  const navigate = useNavigate()

  const getData = async () => {
    const userData = { email, password }
    const response = await axios.post('http://localhost:3001/api/auth/login', userData)

    console.log(response.data);
    // localStorage.setItem('token', response.data.token)
    return response.data

  }
  // console.log(token);
  const { email, password } = formData

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
    navigate('/dash')

  }

  useEffect(() => {
    getData()

  })
    ;
  return (
    <motion.div
      style={{ margin: 60 }}
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
              'url("https://i.pinimg.com/originals/38/a0/cc/38a0cc030a73b8592057bd7d01bfd56d.gif")',
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
          sx={{
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            p: 3,
          }}
        >
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={onChange}
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2, boxShadow: 0, color: "white" }}
              >
                Sign In
              </Button>
              <Divider color="primary" sx={{mt : 2 }}>
                <Chip label="OR" />
              </Divider>
              <GHButton />
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
}
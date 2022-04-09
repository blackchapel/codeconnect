import React from 'react'
import { Grid, Button, Modal, Backdrop, Box, TextField } from '@mui/material'
import BlogCard from '../Components/BlogCard'
import { FaEdit, FaInbox } from "react-icons/fa";
import axios from 'axios';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};


function BlogFeed() {
  const [formData, setFormData] = React.useState({
    Heading: '',
    Content: '',
    Author : JSON.parse( localStorage.getItem( 'user_id' ))
  })
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onChange = (e) => {

    setFormData((prevState) => ({
  
      ...prevState,
      [e.target.name]: e.target.value,
  
    }))
  }
  const handleSubmit = async (e) => {

    console.log(formData);
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/api/blog/create',formData)
    console.log(response);
    setOpen(false)
  }
  return (
    <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Button onClick={handleOpen}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={1}
                >
                  <Grid item sx={{ fontSize: "40px", color: "#E94560" }}>
                    <FaEdit />
                  </Grid>
                  <Grid item sx={{ color: "#E94560" }}>
                    <h4>Write a Blog</h4>
                  </Grid>
                </Grid>
              </Button>
              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Box sx={style} component="form" noValidate>
                  <div style={{fontSize: "50px", textAlign: "center"}}><FaInbox /></div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Heading"
                    label="Heading"
                    name="Heading"
                    onChange={onChange}
                    autoComplete="Heading"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Content"
                    label="Content"
                    type="Content"
                    onChange={onChange}
                    id="Content"
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
                    Submit
                  </Button>
                </Box>
              </Modal>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item>
                  <BlogCard />
                </Grid>
                <Grid item>
                  <BlogCard/>
                </Grid>
                <Grid item>
                  <BlogCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
  )
}

export default BlogFeed


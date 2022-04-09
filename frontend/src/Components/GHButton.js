import React from 'react'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';

const GHButton = () => {

  return (
    <Button href="https://localhost:3001/api/auth/github" variant="contained" sx={{ mt: 4, mb: 2, boxShadow: 0, color: "white" }} fullWidth startIcon={<GitHubIcon />}>

</Button>
  )
}

export default GHButton
import React from 'react'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';

const GHButton = () => {

  return (
    <Button href="http://localhost:3001/api/auth/github" variant="contained" sx={{ mt: 4, mb: 2, boxShadow: 0, color: "white" }} fullWidth startIcon={<GitHubIcon />}>
      Sign In with Github
</Button>
  )
}

export default GHButton
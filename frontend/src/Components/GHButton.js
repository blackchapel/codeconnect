import React, { useEffect,useState } from 'react'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const GHButton = () => {

  const  navigate =useNavigate();
  const [data,setData] = useState();
  const handleAuth = async (req,res) => {
    const response = await axios.get('http://localhost:3001/api/auth/github')
    setData(response.data)
    console.log(data);
    res.redirect('http://localhost:3000/dash')
    return response.data;
  }

  useEffect(()=>{handleAuth()},[])
  return (
    <Button href="http://localhost:3001/api/auth/github" variant="contained" sx={{ mt: 4, mb: 2, boxShadow: 0, color: "white" }} fullWidth startIcon={<GitHubIcon />}>
      Sign In with Github
</Button>
  )
}

export default GHButton
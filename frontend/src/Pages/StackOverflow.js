import React, { useState, useEffect } from 'react'
import { TextField, Typography, Paper, Grid, Button } from '@mui/material'
import axios from 'axios'
const StackOverflow = () => {
    const [query,setQuery]=useState()
    const [answers,setAnswers] = useState()
    const [loading,setLoading] = useState(true)
    // const handleQuestion = async () => {
    //     const response = await axios.post('http://localhost:3001/api/fetch/stackexchange',query)
    //     const answer =response.data.data.filteredAnsBody
    //     setAnswers(answer)
    //     setLoading(false)   
    // }

    // useEffect(()=>{handleQuestion()})
    console.log(query);
    // if(loading){
    //     return(
    //         <div>loading</div>
    //     )
    // }
    return (
        <>  <Paper sx={{ p: 3 }}>
            <Typography variant="h4">Enter your question here</Typography>
            <Grid container>
                <Grid item xs={10}>
                    <TextField
                        margin="small"
                        required
                        fullWidth
                        color='secondary'
                        label="Question"
                        name="question"
                    onChange={(e)=>{setQuery(e.target.value)}}
                    ></TextField>
                </Grid>
                <Grid item xs={2}><Button>Search</Button></Grid>
            </Grid>

            
        </Paper>

            <Grid direction="column" container spacing={2} sx={{ my: 1 }}>
                
            </Grid>
        </>
    )
}

export default StackOverflow
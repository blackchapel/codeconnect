import React, { useState, useEffect } from 'react'
import { TextField, Typography, Paper, Grid, Button } from '@mui/material'
import axios from 'axios'
const StackOverflow = () => {
    // const [query,setQuery]
    const handleQuestion = (req) => {
        const response = axios.post('http://localhost:3001/api/fetch/stackexchange',)
        console.log(response)
        
    }
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
                    // onChange={onChange}
                    ></TextField>
                </Grid>
                <grid item xs={2}><Button onClick={handleQuestion}>Search</Button></grid>
            </Grid>

            
        </Paper>

            <Grid direction="column" container spacing={2} sx={{ my: 1 }}>
                <Grid item>
                    <Paper>
                        q
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default StackOverflow
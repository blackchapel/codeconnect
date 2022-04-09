import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 350,backgroundColor: "#1A1A2E",color : 'white',borderRadius : 4 }}>
      <CardContent>
        <Typography sx={{ mb: 1 }} color="secondary">
          Author
        </Typography>
        <Typography variant="h5" component="div" sx={{mb : 1}}>
          Post Caption
        </Typography>
        <Typography variant="body2">
         Post Content pspkkdfjslkj  ksdjfflskdjffl jsldkfjslk jlkwj welkjckk jksjdvld 
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary' >Im interested</Button>
      </CardActions>
    </Card>
  );
}

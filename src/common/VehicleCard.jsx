import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


export default function VehicleCard({img, name, url}) {
    return (
      <Card sx={{padding : ".3rem", maxWidth: 545, borderRadius : "2rem", boxShadow : "3px 3px 12px grey ", backgroundColor : "#FAFAFA" }}>
        <CardMedia
          sx={{ height: 300 , width : 300}}
          image={img}
          title="green iguana"
        />
        <CardContent>
          <Typography sx={{ textAlign : "center"}} gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          
        </CardContent>
        <CardActions sx={{ display : "flex", justifyContent : "center", paddingBottom : "1rem"}}>
            
            <Link to={url} >
                <Button sx={{color : "white", backgroundColor : "black", borderRadius : "10px"}} variant="outlined">View Product</Button>
            </Link>
        </CardActions>
      </Card>
    );
  }
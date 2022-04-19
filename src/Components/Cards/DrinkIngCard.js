import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'

const DrinkIngCard = ({ cocktail }) => {
  if(cocktail === undefined) console.log("cocktail is undefined")
  else console.log(cocktail)
  return (
    <Card sx={{ maxWidth: "100%", m: 0.5, pt: 1, height: "100%" }}>
      <CardActionArea component={RouterLink} to={`/drinks/${cocktail.id}`}>
        <div
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center"
          }}
        >
          <CardMedia
            component="img"
            image={cocktail.image}
            alt={cocktail.name}
            style={{
                width: "auto",
                maxHeight: "300px",
            }}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {cocktail.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DrinkIngCard
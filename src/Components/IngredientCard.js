import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const IngredientCard = ({ ing }) => {
    let assetsPath = require.context('../assets', false, /\.(png|jpe?g|svg)$/);

  return (
    <Card sx={{ maxWidth: "100%", m: 0.5, pt: 1, height: "100%" }}>
      <CardActionArea>
        <div
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center"
          }}
        >
            <CardMedia
            component="img"
            image={assetsPath(ing.imageUrl)}
            alt={ing.name}
            style={{
                width: "auto",
                maxHeight: "300px",
            }}
            />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ing.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="justify">
            {ing.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default IngredientCard
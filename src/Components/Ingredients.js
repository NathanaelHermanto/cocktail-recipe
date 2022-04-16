import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import IngredientCard from './IngredientCard'

const Ingredients = () => {
  const popularIngredients = [
    { name: 'Gin', imageUrl: './gin.png', text: 'a distilled alcoholic drink that derives its predominant flavour from juniper berries. Gin originated as a medicinal liquor made by monks and alchemists across Europe, particularly in southern Italy, Flanders and the Netherlands, to provide aqua vita from distillates of grapes and grains.' },
    { name: 'Vodka', imageUrl: './vodka.png', text: 'a clear distilled alcoholic beverage. Different varieties originated in Poland, Russia, and Sweden. Vodka is composed mainly of water and ethanol but sometimes with traces of impurities and flavourings. Traditionally, it is made by distilling liquid from fermented cereal grains.'},
    { name: 'Tequila', imageUrl: './tequila.png', text: 'a distilled beverage made from the blue agave plant, primarily in the area surrounding the city of Tequila 65 km northwest of Guadalajara, and in the Jaliscan Highlands of the central western Mexican state of Jalisco.' },
    { name: 'Rum', imageUrl: './rum.png', text: 'a liquor made by fermenting then distilling sugarcane molasses or sugarcane juice. The distillate, a clear liquid, is usually aged in oak barrels. Most rums are produced in Caribbean and North and South American countries, but also in other sugar-producing regions, such as the Philippines and Taiwan.' },
  ]
  return (
    <>
      <Typography textAlign={'center'}>
        Popular Ingredients
      </Typography>
      <Box>
        <Grid 
          container 
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          >
          {popularIngredients.map((ingredient) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={ingredient.name} minWidth={210} maxWidth={500}>
              <IngredientCard ing={ingredient} key={ingredient.name}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Ingredients
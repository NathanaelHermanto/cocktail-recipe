import React from 'react'
import { Box } from '@mui/material'
import IngredientCard from './IngredientCard'

const Ingredients = () => {
  const popularIngredients = [
    { name: 'Gin', imageUrl: './gin.png', text: 'Gin is a distilled alcoholic drink that derives its predominant flavour from juniper berries. Gin originated as a medicinal liquor made by monks and alchemists across Europe, particularly in southern Italy, Flanders and the Netherlands, to provide aqua vita from distillates of grapes and grains.' },
    { name: 'Vodka', imageUrl: './vodka.png', text: 'Vodka is a clear distilled alcoholic beverage. Different varieties originated in Poland, Russia, and Sweden. Vodka is composed mainly of water and ethanol but sometimes with traces of impurities and flavourings. Traditionally, it is made by distilling liquid from fermented cereal grains.'},
    { name: 'Tequila', imageUrl: './tequila.png', text: 'Tequila is a distilled beverage made from the blue agave plant, primarily in the area surrounding the city of Tequila 65 km northwest of Guadalajara, and in the Jaliscan Highlands of the central western Mexican state of Jalisco.' },
    { name: 'Rum', imageUrl: './rum.png', text: 'Rum is a liquor made by fermenting then distilling sugarcane molasses or sugarcane juice. The distillate, a clear liquid, is usually aged in oak barrels. Most rums are produced in Caribbean and North and South American countries, but also in other sugar-producing regions, such as the Philippines and Taiwan.' },
  ]
  return (
    <>
      Choose an ingredient pls
      <Box
        sx={{ display: 'flex', alignItems: 'stretch', bgcolor: 'background.paper',
        borderRadius: 1, flexDirection: 'row' }} 
        >
        {popularIngredients.map((ingredient) => (
          <IngredientCard ing={ingredient} key={ingredient.name}/>
        ))}
      </Box>
    </>
  )
}

export default Ingredients
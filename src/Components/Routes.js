import React from 'react';
import { Routes as RouterLink, Route } from "react-router-dom";
import Home from './Home';
import Drinks from './Drinks';
import About from './About';
import Ingredients from './Ingredients';
import Gin from './Ingredients/Gin';
import Vodka from './Ingredients/Vodka';
import Tequila from './Ingredients/Tequila';
import Rum from './Ingredients/Rum';
import CocktailView from './CocktailView'

const Routes = () => {
  return (
    <>
        <RouterLink>
            <Route exact path="/cocktail-recipe" element={<Home/>} />
            <Route path="/drinks" element={<Drinks/>} />
            <Route path="/drinks/:id" element={<CocktailView />} />
            <Route path="/ingredients" element={<Ingredients/>} />
            <Route path="/ingredients/gin" element={<Gin/>} />
            <Route path="/ingredients/vodka" element={<Vodka/>} />
            <Route path="/ingredients/tequila" element={<Tequila/>} />
            <Route path="/ingredients/rum" element={<Rum/>} />
            <Route path="/about" element={<About/>} />
        
        </RouterLink>
    </>
  )
}

export default Routes
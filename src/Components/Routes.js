import React from 'react';
import { Routes as RouterLink, Route } from "react-router-dom";
import Home from './Home';
import Drinks from './Drinks';
import About from './About';
import Ingredients from './Ingredients';
import Gin from './Gin';
import Vodka from './Vodka';
import Tequila from './Tequila';
import Rum from './Rum';

const Routes = () => {
  return (
    <>
        <RouterLink>
            <Route exact path="/cocktail-recipe" element={<Home/>} />
            <Route path="/drinks" element={<Drinks/>} />
            <Route path="/ingredients" element={<Ingredients/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/ingredients/gin" element={<Gin/>} />
            <Route path="/ingredients/vodka" element={<Vodka/>} />
            <Route path="/ingredients/tequila" element={<Tequila/>} />
            <Route path="/ingredients/rum" element={<Rum/>} />
        
        </RouterLink>
    </>
  )
}

export default Routes
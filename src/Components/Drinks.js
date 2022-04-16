import React from 'react'
// import { useState } from 'react';
// import { Cocktail, Ingredient } from './Cocktail';
import SearchBar from './SearchBar';

// const urlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
// const urlAList = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
// const urlSearchDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const Drinks = () => {
  // const [value, setValue] = useState('')
  // const [data, setData] = useState([])
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(null);

  // const search = (value) => {
  //   const url = `${urlSearchDrink}value`

  //   fetch(url)
  //           .then(function(response){
  //               return response.json();
  //           })
  //           .then(function(data) {
  //               console.log(data.drinks[0]);
  //               setIsLoaded(true);
  //               setData(Cocktail(data.drinks[0].strDrink, 
  //                               data.drinks[0].strCategory,
  //                               [Ingredient(data.drinks[0].strIngredient1, data.drinks[0].strMeasure1), 
  //                               Ingredient(data.drinks[0].strIngredient2, data.drinks[0].strMeasure2),
  //                               Ingredient(data.drinks[0].strIngredient3, data.drinks[0].strMeasure3),
  //                               Ingredient(data.drinks[0].strIngredient4, data.drinks[0].strMeasure4),
  //                               Ingredient(data.drinks[0].strIngredient5, data.drinks[0].strMeasure5),
  //                               Ingredient(data.drinks[0].strIngredient6, data.drinks[0].strMeasure6),
  //                               Ingredient(data.drinks[0].strIngredient7, data.drinks[0].strMeasure7),
  //                               Ingredient(data.drinks[0].strIngredient8, data.drinks[0].strMeasure8),],
  //                               data.drinks[0].strGlass,
  //                               data.drinks[0].strInstructions,
  //                               data.drinks[0].strVideo,
  //                               data.drinks[0].strDrinkThumb,
  //                               data.drinks[0].strAlcoholic
  //                       )
  //                   )
  //               },
  //           function(error) {
  //               setIsLoaded(true);
  //               setError(error);
  //               console.log("error: ", error.message)
  //           })
        

  // }

  return (
    <>
      <SearchBar
                
      />
      <div>Drinks</div>
    </>
   
  )
}

export default Drinks
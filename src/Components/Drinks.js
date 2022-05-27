import React from 'react'
import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Cocktail, Ingredient } from './Cocktail';
import CocktailCard from './Cards/CocktailCard';
import SearchBar from './SearchBar';

const urlSearchDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const Drinks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const search = () => {
    const url = `${urlSearchDrink}${searchQuery}`

    fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data) {
                console.log(data.drinks[0]);
                setData(Cocktail(data.drinks[0].strDrink, 
                                data.drinks[0].strCategory,
                                [Ingredient(data.drinks[0].strIngredient1, data.drinks[0].strMeasure1), 
                                Ingredient(data.drinks[0].strIngredient2, data.drinks[0].strMeasure2),
                                Ingredient(data.drinks[0].strIngredient3, data.drinks[0].strMeasure3),
                                Ingredient(data.drinks[0].strIngredient4, data.drinks[0].strMeasure4),
                                Ingredient(data.drinks[0].strIngredient5, data.drinks[0].strMeasure5),
                                Ingredient(data.drinks[0].strIngredient6, data.drinks[0].strMeasure6),
                                Ingredient(data.drinks[0].strIngredient7, data.drinks[0].strMeasure7),
                                Ingredient(data.drinks[0].strIngredient8, data.drinks[0].strMeasure8),],
                                data.drinks[0].strGlass,
                                data.drinks[0].strInstructions,
                                data.drinks[0].strVideo,
                                data.drinks[0].strDrinkThumb,
                                data.drinks[0].strAlcoholic
                        )
                    )
                },
            function(error) {
                setError(error);
                console.log("error: ", error.message)
            })
  };

  useEffect(() => {
    fetch(apiUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            console.log(data.drinks[0]);
            setData(Cocktail(data.drinks[0].strDrink, 
                            data.drinks[0].strCategory,
                            [Ingredient(data.drinks[0].strIngredient1, data.drinks[0].strMeasure1), 
                            Ingredient(data.drinks[0].strIngredient2, data.drinks[0].strMeasure2),
                            Ingredient(data.drinks[0].strIngredient3, data.drinks[0].strMeasure3),
                            Ingredient(data.drinks[0].strIngredient4, data.drinks[0].strMeasure4),
                            Ingredient(data.drinks[0].strIngredient5, data.drinks[0].strMeasure5),
                            Ingredient(data.drinks[0].strIngredient6, data.drinks[0].strMeasure6),
                            Ingredient(data.drinks[0].strIngredient7, data.drinks[0].strMeasure7),
                            Ingredient(data.drinks[0].strIngredient8, data.drinks[0].strMeasure8),],
                            data.drinks[0].strGlass,
                            data.drinks[0].strInstructions,
                            data.drinks[0].strVideo,
                            data.drinks[0].strDrinkThumb,
                            data.drinks[0].strAlcoholic
                    )
                )
            },
        function(error) {
            setError(error);
            console.log("error: ", error.message)
        })
    }, [])

  if (error) {
    return <>Error: {error.message}</>;
  } else {    
    return (
      <>
        <Box>
          <SearchBar 
            setSearchQuery={setSearchQuery}
            onS={search}
          />
        </Box>
        
        
        <Box> 
          <CocktailCard Cocktail={data} />
        </Box>
      </>
    )
}

  
};

export default Drinks;
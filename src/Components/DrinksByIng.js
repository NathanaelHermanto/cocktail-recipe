import React, { useState, useEffect } from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { CocktailIng } from './Cocktail';
import DrinkIngCard from './DrinkIng';

const DrinksByIng = ({ing}) => {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const url = `${apiUrl}${ing}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setIsLoaded(true);
                setData(data.drinks.map((d) => CocktailIng(d.idDrink, d.strDrink, d.strDrinkThumb)))
            })
            .catch(error => {
                setError({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            })
        }, []);

        if (error) {
            return <>Error: {error.message}</>;
        } else if (!isLoaded) {
            return <>Loading...</>
        } else {
            return (
                <>
                    <Typography textAlign={'center'}>
                        {`Drinks with ${ing}`}
                    </Typography>
                    <Box>
                        <Grid 
                        container 
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        >
                        {data.map((ingredient) => (
                            <Grid item xs={12} sm={4} md={3} lg={3} key={ingredient.name} minWidth={210} maxWidth={500}>
                                <DrinkIngCard ing={ingredient} key={ingredient.name}/>
                            </Grid>
                        ))}
                        </Grid>
                    </Box>
                </>
            )
        }
}

export default DrinksByIng
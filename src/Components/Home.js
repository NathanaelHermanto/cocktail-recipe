import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Cocktail, Ingredient } from './Cocktail';

const apiUrl = 'https:/www.thecocktaildb.com/api/json/v1/1/random.php'

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(function(response){
                return response.json();
            })
            .then(function(data) {
                console.log(data.drinks[0]);
                setIsLoaded(true);
                setData(Cocktail(data.drinks[0].strDrink, 
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
                                data.drinks[0].strDrinkThumb
                        )
                    )
                },
            function(error) {
                setIsLoaded(true);
                setError(error);
                console.log("error: ", error.message)
            })
        }, [])

    const fetchImage = async () => {
        const res = await fetch(data.image);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
    };
    
    useEffect(() => {
        
        fetchImage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    if (error) {
        return <>Error: {error.message}</>;
    } else if (!isLoaded) {
        return <>Loading...</>
    } else {
        return (
            <Box sx={{ mt: '10px', mr: '10px' }}> 
                <img src={image}  width={250} height={250} alt={data.name} /> 
                <>{data.name}</>  
            </Box>
        )
    }
}

export default Home
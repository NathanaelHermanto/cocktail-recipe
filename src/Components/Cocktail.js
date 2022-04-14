export const Cocktail = (name, ingredients, glass, instructions, video, image) => 
    { return { name: name, ingredients: ingredients, glass: glass, instructions: instructions, video: video, image: image}}

export const Ingredient = (ingredient, measure) => 
    { return { ingredient: ingredient, measure: measure}}
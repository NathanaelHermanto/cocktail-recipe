export const Cocktail = (name, category, ingredients, glass, instructions, video, image, alcoholic) => 
    { return { name: name, category: category, ingredients: ingredients, glass: glass, instructions: instructions, video: video, image: image, alcoholic: alcoholic}}

export const Ingredient = (name, measure) => 
    { return { name: name, measure: measure}}
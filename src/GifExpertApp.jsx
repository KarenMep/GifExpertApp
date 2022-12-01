import { useState } from "react"
import { AddCategory, GifGrid } from "./components/"
import { Informacion } from "./components/Informacion"

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Overwatch'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories ])
        
    }

  return (
    <>
        <Informacion/>
        <h1>Buscador de Gifs</h1>

        <AddCategory 
            onNewCategory={(value) => onAddCategory(value)}
        />

            {
                categories.map( (category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
            }

    </>
  )
}

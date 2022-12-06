import { useState } from "react"
import { Provider } from "react-redux"
import { AddCategory, GifGrid } from "./components/"
import { Informacion } from "./components/Informacion"
import { store } from "./store"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])

    }

    return (
            <Provider store={store}>
        <>
                <Informacion />
                <h1>Buscador de Gifs</h1>

                <AddCategory
                    onNewCategory={(value) => onAddCategory(value)}
                />


                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }

        </>
            </Provider>
    )
}

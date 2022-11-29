import { useState } from "react"

    export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Draagon ball'])

    const onAddCategory = () => {
        console.log('Click')
        setCategories([...categories, 'Valorant'])
        
    }

  return (
    <>
    {/* Titulo */}
        <h1>GifExpert App</h1>

        {/* Input */}

        {/* Listado de Gif */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {
                categories.map( category => {
                    return <li key= {category}>{category}</li>
                })
            }
        </ol>

        {/* Gif Item */}
    </>
  )
}

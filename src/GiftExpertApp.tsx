import { useState } from "react"
import { AddCategory,GifGrid } from "./components";


export const GiftExpertApp = ()=>{
    const [categories,setCategories] = useState(['One Punch']);
    
    const onAddCategory=(newCategory:string)=>{

       if ( !categories.includes(newCategory) ) {
        setCategories(cat=>[newCategory,...cat])
       }
        

    }
    return (
        <>
            {/* titulo */}
            <h1>GiftExpertApp</h1>
            {/* input */}
             <AddCategory 
                onNewCategory = {value=>onAddCategory(value)}
                //  setCategories={setCategories}
             />
            {/* Listado de gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
      
                {categories.map(category=>
                     (
                        <GifGrid key={category} category={category}/>
                    )
                )}
                {/* <li></li> */}
    
                {/* gif Item */}
        </>
    )
}
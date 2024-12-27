import { useState } from "react"

interface AddCategoryProps {
  onNewCategory: (newCategory: string) => void;
}


export const AddCategory = ({onNewCategory}:AddCategoryProps)=>{
    const [inputValue, setInputValue] = useState((''));
    const onInputChange =  (event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
        
        setInputValue(event.target.value)
    }
    const onSubmit = (event:  React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length<=1) return;
        // setCategories((r:string[])=> [inputValue,...r])
        onNewCategory(newInputValue);
        setInputValue('');
        
    }
  return ( 
    <form onSubmit={onSubmit} >
        <input type="text" 
            placeholder="Buscar gifts" 
            value={inputValue}
            onChange={onInputChange}/>
    </form>

  )
}
import React, {useState, MouseEvent} from "react";
interface SearchPanelProps {
  onAdd(title:string): void
}

export const SearchPanel: React.FC<SearchPanelProps> = (props) => {
  const [title, setTitle] = useState <string>('')
  
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setTitle(e.target.value)
  }
  const keyPressHandler = (e: React.KeyboardEvent) =>{
    if(e.key === 'Enter'){
      e.preventDefault()
      props.onAdd(title)
      setTitle('')

    }
  }
  const changeHandlerBtn =(e: MouseEvent)=>{
    e.preventDefault()
    setTitle('')
    console.log(title, 'from SearchPanel request')
  }

  return (
    <form className="app-form">
      <input onChange={changeHandler} onKeyPress={keyPressHandler} value={title} type="text" placeholder="Hi there!" id="title" className="app-input" />
      <button onClick={changeHandlerBtn} type="submit" className="btn">
        Search
      </button>
    </form>
  
  
  );
};

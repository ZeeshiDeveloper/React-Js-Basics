import { useState } from "react";
import Backdrop from "./Backdrop";
import Model from "./Model";

function Todo(props){
// states are important for changing what we want to see in the screen dynamically
// for hiding and removing element and in this case for showing and hiding overlay
const [modelIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler(){  
    setModelIsOpen(true);
  }
  function closeModelHandler(){
  setModelIsOpen(false);
  }
    return(
    <div className="card">    {/*class name element in javascript is className and in html class and this is not html file sooo we use here className */}
      <h2>{props.text}</h2> 
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modelIsOpen && <Model onCancel={closeModelHandler} onConfirm={closeModelHandler}/>}
      {modelIsOpen && <Backdrop onClick={closeModelHandler}/>}
    </div>
    );
}

export default Todo;
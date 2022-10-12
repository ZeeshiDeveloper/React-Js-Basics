import Backdrop from './components/Backdrop';
import Model from './components/Model';
import Todo from './components/Todo'; {/*no need to write extention like Todo.js just wirte Todo */}


function App() {         {/*The name of function should start with capital letter */}
  return (
  <div>
    <h1>My Todos</h1>
    <Todo text='Learn React'/>
    <Todo text='Thinking in React'/>
    <Todo text='React Installation'/> 
  </div>
  );
}

export default App;

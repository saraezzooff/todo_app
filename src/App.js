import React, {useState} from 'react';
import TodoList from './TodoList';
import './App.css';
import logo from './delete.png';

function App() {

const [todo, setTodo] = useState("");
const [todosList, setTodosList] = useState([]);
const [remove, setRemove] = useState(true);

const AddTodos = e =>{
  e.preventDefault();
  //alert(todo);
  console.log(todosList);
  
  setTodosList([...todosList, {id : todosList.length + 1, name : todo}]);
  setTodo("");
  
  
}

const removeBlock = (id)=> {

    setRemove(false);
    const filterTodo = todosList.filter(t => t.id !== id);
    setTodosList(filterTodo);
}


  return (
    <>
    <header className="App">
    
      <form id="my-form" onSubmit={AddTodos}>
         <input 
         type="text" 
         placeholder="Enter Something TODO"
         name="todo"
         value={todo}
         onChange={e => {
          setTodo(e.target.value)
        //  console.log(e.target.value);
        }}
          />
         <button type="submit">Add</button>
      </form>
   
      {
          
         todosList.map(todo =>{
         
            return(
              <div className="list"  key = {todo.id}>
                 <p>{todo.name}</p>
                 <img alt="" src={logo}  onClick={(e)=>removeBlock(todo.id)}/>
              </div>
            );

          
        
            })
        }
 
  
    </header>
   
    </>


  );
}

export default App;

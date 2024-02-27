import { useState } from 'react';
import TodosList from './components/TodosList';
import {data} from './data';
import { ITodo } from './interfaces';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState<ITodo[]>(data);

  const addNewTodo = (newTodo: ITodo) => {
    setTodos((prev) => [newTodo, ...prev])
  }

  const completedToggle = (todo: ITodo) => {
    todos.map(item => {
      if (item.id === todo.id){
        item.completed = !item.completed
      }
    })
  }

  const deletTodo = (todo: ITodo) => {
    const filteredTodos: ITodo[] = todos.filter (item => item.id !== todo.id )
    setTodos(filteredTodos);
  }

  const moveTodo = (todo: ITodo, direction: string) => {
    todos.map (item => {
      if (item.id === todo.id){
        const currentIndex: number = todos.indexOf(item);
        const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
        if (newIndex < 0 || newIndex >= todos.length){
          return;
        }
        const updatedTodos = [...todos];
        const currentTodo = updatedTodos[currentIndex];
        updatedTodos[currentIndex] = updatedTodos[newIndex];
        updatedTodos[newIndex] = currentTodo;
        setTodos(updatedTodos);
      }
    })
  }

  return (
    <div className="app">
      <div className="gradient-bg">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="container">
        <AddTodo addNewTodo={addNewTodo} />
        <TodosList
          todos={todos}
          completedToggle={completedToggle}
          deletTodo={deletTodo}
          moveTodo={moveTodo}
        />
      </div>
    </div>
  );
}

export default App

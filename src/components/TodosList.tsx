import TodosListItem from "./TodosListItem";
import { ITodo } from "../interfaces";

interface ITodosListProps {
  todos: ITodo[];
  completedToggle: (todo: ITodo) => void;
  deletTodo: (todo: ITodo) => void;
  moveTodo: (todo: ITodo, direction: string) => void;
}


const todosList: React.FC<ITodosListProps> = (props) => {
  return (
    <div className="todos-list">
      {props.todos.map((todo) => {
        return (
          <TodosListItem
            key={todo.id}
            todo={todo}
            completedToggle={props.completedToggle}
            deletTodo={props.deletTodo}
            moveTodo={props.moveTodo}
          />
        );
      })}
    </div>
  );
};

export default todosList
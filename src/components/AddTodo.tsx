import { useState } from "react";
import { ITodo } from "../interfaces";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IAddTodoProps {
  addNewTodo : (newTodo: ITodo) => void;
}

const AddTodo = (props:IAddTodoProps) => {

const [title, setTitle] = useState<string>('');
const [author, setAuthor] = useState<string>('');
const [date, setDate] = useState<Date | null>(new Date());

const onChangeTitle:React.ChangeEventHandler<HTMLInputElement> = (e) => {
  setTitle(e.target.value)
}

const onChangeAuthor:React.ChangeEventHandler<HTMLInputElement> = (e) => {
  setAuthor(e.target.value)
}

const handleDateChange = (date: Date | null) => {
  setDate(date);
};

const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  if (title !== "" && author !== "" && date) {
    const newTodo: ITodo = {
      id: Date.now(),
      author: author,
      title: title,
      date: date.toDateString(),
      completed: false,
    };
    props.addNewTodo(newTodo);
    setTitle('');
    setAuthor('');
  }
};
  return (
    <form className="add-todo" onSubmit={handleSubmit}>
        <div className="wrapper">
          <input className="title" type="text" placeholder="Enter the Title of Todo.." value={title} onChange={onChangeTitle}/>
          <DatePicker className="datepicker" selected={date} onChange={handleDateChange}/>
        </div>
        <div className="wrapper">
          <input className="author" type="text" placeholder="Enter the Author of Todo.." value={author} onChange={onChangeAuthor}/>
          <button type="submit" className="add-btn">ADD</button>
        </div>
    </form>
  )
}

export default AddTodo
import "./AddTodo.scss"
import { useState } from "react"
import {v4 as uuid} from "uuid";

const AddTodo = ({todoList, setTodoList}) => {
    const [inputValue, setInputValue] = useState("");
    const [showModal, setShowModal] = useState(false);

    const addTodo = () => {
        if (!inputValue.length) return;
        const newTodo = { id: uuid(), text: inputValue, completed: false};
        const updatedTodoList = [...todoList, newTodo];
        setTodoList(updatedTodoList);
        setInputValue("");
    }

    return (
        <div className="add-todo">
            <button onClick={addTodo} className="button">+</button>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="add new todo" />  
        </div>
    )
}

export default AddTodo
import "./TodoList.scss"

const TodoList = ({todoList, setTodoList}) => {

    const handleComplete = (id) => {
        const updatedTodos = todoList.map( (item) => item.id === id ? {...item, completed: !item.completed} : item)
        setTodoList(updatedTodos);
    }

    const removeTodo = (id) => {
        const updatedTodos = todoList.filter((item) => item.id !== id);
        setTodoList(updatedTodos);
    }

    console.log(todoList);
    return (
        <div className={`todosList ${todoList.length > 0 ? "visible" : "" }`}>
            {todoList.map((item, i) => (
                <div key={item.id} className="todo">
                    <span className="removeIcon" onClick={() => removeTodo(item.id)}>X</span>
                    <span style={{textDecoration: item.completed ? "line-through" : ""}}>
                        {i + 1}.{item.text}
                    </span>
                    <button onClick={()=> handleComplete(item.id)} style={{backgroundColor: item.completed ? "yellow" : "red", color: item.completed ? "black" : "white"}}>
                        {item.completed ? "Undone" : "Done"}
                    </button>
                </div>
            ))}
        </div>
    )
}


export default TodoList
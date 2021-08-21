import React, {useState} from 'react';

const Main = (props) => {
    const [todo, setTodo] = useState("");
    const {todoList, setTodoList} = (props);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckBox = (idx) => {
        const updatedTodos = todoList.map((todo, index) => {
            if (idx === index){
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        })
        setTodoList(updatedTodos);
    }

    const handleDeleteTodo = (idx) => {
        let updatedTodosWithoutSelected = todoList.filter((todo, index) => {
            return index !== idx;
        });
        setTodoList(updatedTodosWithoutSelected);
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodoList([...todoList, {
            todo: todo,
            isCompleted :false,
        }]);
        setTodo("")
}

    return(
        <div>
            <div>
                <h1>Todo List</h1>
                <form onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                <input className="input-box" onChange={(e) => {
                    setTodo(e.target.value);
                }} type="text" value={todo}></input>
                <button className="input-btn">Add</button>
                </form>
            </div>
            <div>
                <div>
                {
                    todoList.map((todoItem, idx) => {
                        let strikeThrough = "notCompleted";
                        if(todoItem.isCompleted == true){
                            strikeThrough = "completed"
                        }
                    return (<div key={idx}>
                        <span className={strikeThrough}>{todoItem.todo}</span>
                        <input type="checkbox" checked={todoItem.isCompleted}
                        onChange={(e) => handleCheckBox(idx)} />
                        <button onClick={(e) => handleDeleteTodo(idx)}
                        >Delete</button>
                    </div>
                    )})
                }
                </div>
            </div>
        </div>
    )
}
export default Main;

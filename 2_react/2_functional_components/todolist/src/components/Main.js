import React, {useState} from 'react';

const Main = (props) => {
    const [todo, setTodo] = useState("");
    const {todoList, setTodoList} = (props);
    // const [isCompleted, setIsCompleted] = useState(false);

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
            isCompleted :false
        }]);
        setTodo("")
}

    return(
        <div>
            <div>
                <form onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                <input onChange={(e) => {
                    setTodo(e.target.value);
                }} type="text" value={todo}></input>
                <button>Add</button>
                </form>
            </div>
            <div>
                <div>
                {
                    todoList.map((todoItem, idx) => (
                    <div key={idx}>
                        <span >{todoItem.todo}</span>
                        
                        {/* {
                            todoItem.isCompleted == true?
                            todoClasses = "completed"
                            :todoClasses = "notCompleted"
                        } */}
                        <input type="checkbox" checked={todoItem.isCompleted}
                        onChange={(e) => handleCheckBox(idx)} />
                        <button onClick={(e) => handleDeleteTodo(idx)}
                        >Delete</button>
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
export default Main;

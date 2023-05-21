import React from "react";

const Todo = ({ todo, text, todosList, setTodosList }) => {
    const deleteHandler = () => {
        setTodosList(todosList.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodosList(
            todosList.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>{" "}
            </button>
            <button onClick={deleteHandler} className="delete-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;

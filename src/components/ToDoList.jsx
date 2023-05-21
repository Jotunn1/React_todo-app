import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todosList, setTodosList, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        todo={todo}
                        text={todo.text}
                        key={todo.id}
                        todosList={todosList}
                        setTodosList={setTodosList}
                    />
                ))}
            </ul>
        </div>
    );
};
export default ToDoList;

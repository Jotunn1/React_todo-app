import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todosList, setTodosList, setStatus }) => {
    const inputHandler = (e) => setInput(e.target.value);
    const submitTodosHandler = (e) => {
        e.preventDefault();
        setTodosList([
            ...todosList,
            { text: input, completed: false, id: uuidv4() },
        ]);
        setInput("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <form>
            <input
                value={input}
                onChange={inputHandler}
                className="todo-input"
                type={"text"}
                placeholder="Add your todo"
            />
            <button onClick={submitTodosHandler} className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select
                    onChange={statusHandler}
                    name="todos"
                    className="filter-todo"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;

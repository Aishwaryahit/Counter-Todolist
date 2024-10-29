import React, { useState } from 'react';

function ToDoList() {
  
    const [content, setContent] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (content.trim() !== "") {
            setTasks([...tasks, content]);
            setContent(""); 
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="Cont">  
        <h1>To-do list</h1>
    <div className="sub-cont">
                <input
                    type="text"
                    id="list"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter a task"
                />
                <button id="bttn"onClick={addTask}>ADD</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;

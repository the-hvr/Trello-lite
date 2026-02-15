import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Style/AddTaskForm.css';

export default function AddTaskForm({columnId, setBoard}){
    let [newTask, setNewTask] = useState('');
    let [priority, setPriority] = useState('low');


    function addNewTask(e){
        e.preventDefault();

        const taskObj = {
            id: uuidv4(),
            title: newTask,
            priority: priority,
            createdAt: new Date().toISOString()
        }

        setBoard(prevTasks => ({...prevTasks, 
            [columnId] : [...prevTasks[columnId], taskObj]
        }))

        setNewTask('');
        setPriority('low');
    }

    return (
      <>
        <div className="formBox">
        <form action="" onSubmit={addNewTask}>

            <textarea
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder=" + Add new task"
            ></textarea>

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                >
                <option value="high">HIGH</option>
                <option value="medium">MEDIUM</option>
                <option value="low">LOW</option>
            </select>

            <button type="submit">Add</button>
        </form>
        </div>
      </>
    );
}
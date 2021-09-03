import { useState } from 'react';
import TaskCard from "./TaskCard";

//hämta data
const taskArr = require('../../data/taskData.json');
console.log("taskArr", taskArr);

function TaskList() {
    
    return (
        <div>
            <h2>Master Task List</h2>
            <ul className="task-list-ul">
            {
                taskArr.map( (task) => {
                    return (
                        <TaskCard 
                            isFinish={ false }
                            title={ task.title }
                            deadline={ task.deadline }
                            key = { task.id }
                        />
                    )
                })

            }
            </ul>

        </div>
    )

};

export default TaskList;

//behöver jag sätta key på li?
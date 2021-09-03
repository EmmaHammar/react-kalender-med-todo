import { useState } from 'react';
import TaskCard from "./TaskCard";

//hämta data
const taskArr = require('../../data/taskData.json');
console.log("taskArr", taskArr);




function TaskList() {

    // const printTasklist = Object.keys(taskArr).map(key => {
    //     return (
    //         <TaskCard 
    //             deadline={ taskArr[key].deadline}
    //             title={ taskArr[key].title}
    //             isFinish={ taskArr[key].done}
    //             key={key}
    //         />
    //     )
    // })
    
    
    return (
        <div>
            <h2>Master Task List</h2>
            <ul className="task-list-ul">
            {
                taskArr.map( (task) => {
                    return (
                        <li>
                            {task.title}
                        </li>
                    )
                })

            }
            </ul>

        </div>
    )

};

export default TaskList;

//behöver jag sätta key på li?
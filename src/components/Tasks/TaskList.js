import moment from 'moment';
import { useState } from 'react';
import TaskCard from "./TaskCard";
import GetData from './GetData';

// const taskArr = require('../../data/taskData.json');
// console.log("taskArr", taskArr);


//hämta data fr fetch-komponent som har cb
//skapa state för taskArr (innehåller listan fr db) och uppdatera state




function TaskList() {
    
    return (
        <div>
            <h2>Master Task List</h2>
            <GetData />
            <ul className="task-list-ul">
            {/* {
                taskArr.map( (task) => {
                    
                    return (
                        <TaskCard 
                            isFinish={ false }
                            title={ task.title }
                            date={ moment(task.date).format("YYYY/MM/DD") }
                            key={ task.id } //varför blir denna undefined i TaskCard?
                        />
                    )
                })

            } */}
            </ul>

        </div>
    )

};

export default TaskList;

//behöver jag sätta key på li?
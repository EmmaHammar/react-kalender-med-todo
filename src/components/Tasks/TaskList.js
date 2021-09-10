import './TaskList.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";

function TaskList(props) {

    // <TaskList masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} doUpdate={doUpdate} isUpdate={isFinish}/> 

    const [masterArr, setMasterArr] = useState([]);
    const [checked, setChecked] = useState(false);
  
    //sätta listan som state i denna komp, första gången denna komp körs har GetMasterData() inte hunnit köras o sätta statet masterArr -> behöver köra useEffect när props.masterArr ändras:
    useEffect( () => {
        // console.log("TaskList - props.masterArr", props.masterArr);
        setMasterArr(props.masterArr)
        // console.log("TaskList - state masterArr", masterArr);
    }, [props.masterArr])

    const isChecked = () => {
        setChecked(true); //försöka rendera om TaskCard
        
      } 

    const sortMasterList = props.masterArr.sort( (a,b) => a.date > b.date ? 1: -1)
    const printMasterList = Object.values(sortMasterList).map( (task, index ) => {

        return (
                <TaskCard 
                    isFinish={ task.isFinish }
                    title={ task.title }
                    date={ moment(task.date).format("YYYY/MM/DD") }
                    key={ index }
                    index={index}
                    id={ task._id }
                    deleteTask={ props.deleteTask }
                    masterArr={ props.masterArr } //skillnad ? masterArr={ props.masterArr }
                    doUpdate={props.doUpdate} 
                    isUpdate={props.isUpdate}
                    checked={checked}
                    isChecked={isChecked}
                />
        )
    })
    
    return (
        <div id="task-list">
            <h2>Master task-list</h2>
            { printMasterList }
        </div>
    )
};

export default TaskList;
import './TaskList.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";

function TaskList(props) {

    // <TaskList masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} doUpdate={doUpdate} isUpdate={isFinish}/> 

    const [masterArr, setMasterArr] = useState(props.masterArr);
    const [checked, setChecked] = useState(false);
  
    //sätta listan som state i denna komp, första gången denna komp körs har GetMasterData() inte hunnit köras o sätta statet masterArr -> behöver köra useEffect när props.masterArr ändras:
    useEffect( () => {
        console.log("TaskList - props.masterArr:", props.masterArr);
        setMasterArr(props.masterArr);
        console.log("TaskList - state masterArr", masterArr);
    }, [props.masterArr])

    const isChecked = () => {
        setChecked(true); //försöka rendera om TaskCard
        
      } 

      useEffect( () => {
        console.log("masterArr innan sort", masterArr);
        const sortMasterList = Object.values(masterArr).sort( (a,b) => a.date > b.date ? 1: -1) // här finns inte newTask med
        console.log("sortMasterList", sortMasterList); // här är new task på 4 olika rader
    }, [masterArr])


    const sortMasterList = Object.values(masterArr).sort( (a,b) => a.date > b.date ? 1: -1) // här finns inte newTask med
    console.log("sortMasterList", sortMasterList); // här är new task på 4 olika rader
    // const printMasterList = Object.values(sortMasterList).map( (task, index ) => {

    const printMasterList = Object.values(masterArr).map( (task, index ) => {


    // const printMasterList = Object.values(props.masterArr).map( (task, index ) => {
        // console.log("masterArr som ger task.id undefined:", masterArr);
    console.log("Tasklist - task.id:", task.id);//undefined vid klick men efter 1 rendering är den ej tom
    // console.log("Tasklist - task.title:", task.title);
    // console.log("Tasklist - task.date:", task.date);
    // console.log("Tasklist - task._id:", task._id);



    // console.log("Tasklist - task.title:", task._id);//


        return (
                <TaskCard 
                    isFinish={ task.isFinish }
                    title={ task.title }
                    date={ moment(task.date).format("YYYY/MM/DD") }
                    key={ index }
                    index={index}
                    id={ task.id }
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
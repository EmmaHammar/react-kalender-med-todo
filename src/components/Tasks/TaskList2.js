import moment from 'moment';
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";

function TaskList2(props) {

    // FIXA: denna hinner sättas innan props.masterArr är hämtad fr db -> masterArr ibland blir tom. async await? Ibland körs denna 2 ggr, varför? Samma i MyCalendar: Skrev i state dependcy - skillnad?
    // const masterArr = props.masterArr;
    // console.log("masterArr i TaskList", masterArr);

    const [masterArr, setMasterArr] = useState('');
    
    // //denna useEffect körs vid ladding av sidan - FIXA!!
    useEffect( () => {
        console.log("masterArr i TaskList2:", masterArr);     
        setMasterArr(props.masterArr);
        
    }, [masterArr, props.masterArr]); // masterArr är inte tom men den körs 3 ggr
    // }, []); //den laddas innan masterArr har hunnit uppdateras
    
    //FÖRSÖKER SORTERA
    // const printMasterList = Object.keys(masterArr).sort((a, b) => a.date - b.date).map(key => {
    // const sortedArr = Object.keys(masterArr).sort( (a, b) => a.date - b.date).map( (task) => {
    //     return (<div><li>title: {task.title} date: {task.date}</li></div>)
    // })

    // const sortedArr = Object.keys(masterArr).sort((a, b) =>
    // moment(a.date, 'DD-MM-YYYY').isBefore(moment(b.date, 'DD-MM-YYYY')) ? -1 : 1,)
    // console.log("sortedArr", sortedArr);

    // const printMasterList = Object.keys(masterArr).map(key => {
    const printMasterList = Object.values(masterArr).map( (task, index ) => {
        // console.log("masterArr._id", masterArr._id);
        // const printMasterList = masterArr.sort((a, b) => a.date - b.date).map(key => {
        // const printMasterList = Object.entries(masterArr).map(key => {


        return (
                <TaskCard 
                    isFinish={ task.isFinish }
                    title={ task.title }
                    date={ moment(task.date).format("YYYY/MM/DD") }
                    key={ index }
                    index={index}
                    id={ task._id }
                    deleteTask={ props.deleteTask }


                        // isFinish={ masterArr[key].isFinish }
                        // title={ masterArr[key].title }
                        // date={ moment(masterArr[key].date).format("YYYY/MM/DD") }
                        // key={ masterArr[key]._id }
                        // id={ masterArr[key]._id }
                        // deleteTask={ props.deleteTask }
                        
                />
        )
    })
    
    return (
        <div id="task-list">
            <h2>Master Task List</h2>
            { printMasterList }
            {/* {isUser ? printList : ""} */}
        </div>
    )
};

export default TaskList2;
// import './TaskList.css';
// import moment from 'moment';
// import { useEffect, useState } from 'react';
// import TaskCard from "./TaskCard";

// function TaskList(props) {

//     const [masterArr, setMasterArr] = useState(props.masterArr);
//     const [checked, setChecked] = useState(false);
  
//     useEffect( () => {
//         setMasterArr(props.masterArr);
//     }, [props.masterArr])

//     const isChecked = () => {
//         setChecked(true); //försöka rendera om TaskCard
        
//     } 

//     const sortMasterList = Object.values(masterArr).sort( (a,b) => a.date > b.date ? 1: -1);
//     const printMasterList = Object.values(sortMasterList).map( (task, index ) => {

//         return (
//                 <TaskCard 
//                     isFinish={ task.isFinish }
//                     title={ task.title }
//                     date={ moment(task.date).format("YYYY/MM/DD") }
//                     key={ index }
//                     index={index}
//                     id={ task.id }
//                     deleteTask={ props.deleteTask }
//                     masterArr={ props.masterArr } 
//                     doUpdate={props.doUpdate} 
//                     isUpdate={props.isUpdate}
//                     checked={checked}
//                     isChecked={isChecked}
//                 />
//         )
//     })
    
//     return (
//         <div id="task-list">
//             <h2>Master task-list</h2>
//             { printMasterList }
//         </div>
//     )
// };

// export default TaskList;
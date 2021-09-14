// import { useState, useEffect } from 'react';

// function PrintDayList(props) {

//   const [masterArr, setMasterArr] = useState(props.masterArr);

//   //sätta listan som state i denna komp:
//   useEffect( () => {
//     setMasterArr(props.masterArr);
//   }, [props.masterArr])

//   const handleClick = ( (evt) => {
//     let updateTask = { 
//         id: evt.target.id,
//         isFinish: true
//     };

//     props.deleteTask(updateTask) //kallar på funktionen deleteTask() i app.js som ska spara i db + uppdat state
//   });

//   return (
//     <div>
//       <h3>Task-list för: {props.selectedDate}</h3>
//       <ul>
//         {
//           Object.values(masterArr).map( (task, index) => (task.date === props.selectedDate) ? <div key={index}> <input id={task.id} type="checkbox" onClick={handleClick}></input><li>{task.title}</li></div> : "")
//         }
//       </ul>
//     </div>
//   );
// }
  
// export default PrintDayList;





import { useState, useEffect } from 'react';
import './DayList.css';

function DayList (props) {

  const [masterList, setMasterList] = useState([]);

  //sätta listan som state i denna komp:
  useEffect( () => {
    setMasterList(props.masterList);
  }, [props.masterList])

  const handleClick = ( (evt) => {
      console.log("klick klar-btn DayList.js", evt.target.id);
      let deleteTaskId = evt.target.id;
//     let updateTask = { 
//         id: evt.target.id,
//         isFinish: true
    // };

    props.deleteTask(deleteTaskId) //kallar på funktionen deleteTask() i app.js som ska spara i db + uppdat state
  });

  return (
    <div id='daylist-container'>
      <h3>Task-list för: {props.selectedDate}</h3>
      <ul>
        {
          Object.values(masterList).map( (task, index) => (task.date === props.selectedDate) ? <div key={index} className='day-list'><button id={task.id} onClick={handleClick}>Klar</button><p>{task.title}</p></div> : "")
        }
      </ul>
    </div>
  )
}
  
export default DayList;
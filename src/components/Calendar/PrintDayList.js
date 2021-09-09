// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import UpdateCheckbox from '../Tasks/UpdateCheckbox';

function PrintDayList(props) {

  const [masterArr, setMasterArr] = useState([]);
  const [checked, setChecked] = useState(false);

  //sätta listan som state i denna komp:
  useEffect( () => {
    setMasterArr(props.masterArr);
  }, [])

  useEffect( () => {
    setMasterArr(props.masterArr);
  }, [checked])

  //remove() db when checked task in daylist:
  const handleClick = ( (evt) => {
    // console.log("klick checkbox daylist:", evt.target.id);

    let updateTask = { 
        id: evt.target.id,
        isFinish: true
    };

    props.deleteTask(updateTask) //kallar på funktionen deleteTask() i app.js som ska spara i db 

    // //ändra - hitta index o splice
    // const findIndex = masterArr.findIndex(obj => obj._id === evt.target.id)
    // // console.log("findIndex", findIndex);

    // const taskToRemove = masterArr.splice(findIndex, 1);
    // // console.log("taskToRemove", taskToRemove);
    // // console.log("masterArr efter splice:", masterArr);
    
    // setMasterArr(masterArr);
    // setChecked(!checked); 

  });

  return (
    <div>
      <h3>Task-list för: {props.selectedDate}</h3>
      <ul>
        {
          Object.values(masterArr).map( (task) => (task.date === props.selectedDate) ? <div key={task._id}> <input id={task._id} type="checkbox" onClick={handleClick}></input><li>{task.title}</li></div> : "")
        }
      </ul>
    </div>
  );
}
  
export default PrintDayList;





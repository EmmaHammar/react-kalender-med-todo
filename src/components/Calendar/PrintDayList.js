// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import UpdateCheckbox from '../Tasks/UpdateCheckbox';

function PrintDayList(props) {

  const [masterArr, setMasterArr] = useState("");

  useEffect( () => {
    setMasterArr(props.masterArr);
    console.log("props.masterArr i PrintDayList", props.masterArr);
  }, [])

  console.log("mm", props.masterArr);

  //remove() db when checked task in daylist:
  const handleClick = ( (evt) => {
    // console.log("klick evt wee:", evt.target.id);

    let updateTask = { 
        id: evt.target.id,
        isFinish: evt.target.checked
    };

    // console.log("klick updateTask", updateTask);
    UpdateCheckbox(updateTask);

  });

  return (
    <div>
      <h3>Task-list för: {props.selectedDate}</h3>
      <ul>
        {
          props.masterArr.map( (task, index) => 
            (task.date === props.selectedDate) ? <div key={index}> <input id={task._id} type="checkbox" onClick={handleClick}></input><li>{task.title}</li></div> : ""
          )

        }
      </ul>
    </div>
  );
}
  
export default PrintDayList;





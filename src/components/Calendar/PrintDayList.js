import { useState, useEffect } from 'react';

function PrintDayList(props) {

  console.log("mm", props.masterArr);

  const handleClick = ( (evt) => {
    // console.log("klick evt wee:", evt.target.id);

    //UPPDATERA DB 
    let updateTask = { 
        id: props.id,
        isFinish: evt.target.checked
    };

    console.log("klick updateTask", updateTask);
    // UpdateCheckbox(updateTask);

    // if (evt.target.checked === true) {
    //     console.log("isFinish=true för id:", props.id); 
    // } else {
    //     console.log("isFinish=false för id:", props.id);
    // }

})


  return (
    <div>
      <h3>Task-list för: {props.selectedDate}</h3>
      <ul>
        {
          props.masterArr.map( (task, index) => 
            (task.date === props.selectedDate) ? <div key={index} id={task.id}> <input type="checkbox" onClick={handleClick}></input><li>{task.title}</li></div> : ""
          )
        }
      </ul>
    </div>
  );
}
  
export default PrintDayList;





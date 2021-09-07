import { useState, useEffect } from 'react';

function PrintDayList(props) {

  console.log("mm", props.masterArr);
  return (
    <div>
      <h3>Task-list för: {props.selectedDate}</h3>
      <ul>
        {
          props.masterArr.map( (task, index) => 
            (task.date === props.selectedDate) ? <li key={index}>{task.title}</li> : ""
          )
        }
      </ul>
    </div>
  );
}
  
export default PrintDayList;
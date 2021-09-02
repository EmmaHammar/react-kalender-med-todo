import { useState, useEffect } from 'react';

function PrintMasterListCard(props) {

  const [tasks, setTasks] = useState('');
  
  

  fetch(`http://localhost:3010/task`)
  .then(data => data.json())
  .then(taskData => {

    for (let task in taskData) {
      console.log("taskDataArray:", taskData[task]);
    }

    //printa taskData - HUR?
    // const saveAllTasks = (taskData) => {
    //   //spara statet getTasks
    //   setTasks(taskData);    
    // }
    
    //min cb är getAllTasks -> skicka tillbaka nya statet taskData till App.js som ska spara det. Blir oändligt med get-anrop
    // props.getAllTasks(taskData)
    
  });




  return (
    <div id="masterListCard">
      <h2>Master Task List</h2>
      {/* { tasks } */}
    </div>
  );

};

  export default PrintMasterListCard;
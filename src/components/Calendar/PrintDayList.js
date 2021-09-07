import { useState, useEffect } from 'react';

function PrintDayList(selectedDate, masterArr) {


    
  return (
    <div>
      <h3>Task-list för: {selectedDate.selectedDate}</h3>
      {/* <ul>
        {masterArr.map( (task, index) => {
          return(
            <li>task.</li>
          )
        })}
      </ul> */}
      
    </div>
  );
}
  
export default PrintDayList;
const data = require('../data/taskInfo.json');

function GetTaskInfo() {

    console.log(data);
    
    //jämföra klickade datumet med data[i].date i json:
    //använda moment för att få ut year + month? 
    console.log(data[0].date);

    return (
      <div>
          <h2>Hej från GetTaskInfo</h2>
      </div>
    );
  }
  
  export default GetTaskInfo;
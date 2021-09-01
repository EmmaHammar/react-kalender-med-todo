const data = require('../data/taskInfo.json');

function GetTaskInfo() {

    console.log(data);

    return (
      <div>
          <h2>Hej från GetTaskInfo</h2>
      </div>
    );
  }
  
  export default GetTaskInfo;
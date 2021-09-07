function SaveData(newTask) {
    fetch(`http://localhost:3012/task/add`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(newTask)
  })
  .then(data => data.json())
  .then(res => {
    //   console.log("res from fetch SaveData():", res);
  });
}

export default SaveData;
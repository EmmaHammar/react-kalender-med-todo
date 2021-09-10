function SaveData(newTask) {
    fetch(`http://localhost:3012/task`, {
    // fetch(`https://react-kalender-med-to-do-be.herokuapp.com/task`, {

    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(newTask)
  })
  .then(data => data.json())
  .then(res => {
      console.log("newTask är sparad", res);
  });
}

export default SaveData;
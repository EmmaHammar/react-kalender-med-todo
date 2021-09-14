function DeleteTask(taskId) {
    console.log("taskId");
    fetch(`http://localhost:3012/delete`, {
    // fetch(`https://react-kalender-med-to-do-be.herokuapp.com/checkbox`, { //obs ändra /checkbox till /delete

        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(taskId)
        })
    .then(data => data.json())
    .then(res => {
        console.log("res from fetch DeleteTask.js:", res);
    });

}

export default DeleteTask;
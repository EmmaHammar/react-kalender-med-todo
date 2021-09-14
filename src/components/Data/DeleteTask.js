function DeleteTask(taskId) {
    // fetch(`http://localhost:3012/delete`, {
    fetch(`https://react-kalender-med-to-do-be.herokuapp.com/delete`, {

        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(taskId)
    })
    .then(data => data.json())
    .then(res => {
        // console.log("res from fetch Del eteTask.js:", res);
    });
}
export default DeleteTask;
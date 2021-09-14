function DeleteTask(taskId) {
    // console.log("taskId i DeleteTask.js", taskId);

    // fetch(`http://localhost:3012/delete`, {
    // fetch(`https://react-kalender-med-to-do-be.herokuapp.com/delete`, {
    fetch(`https://cors-anywhere.herokuapp.com/https://react-kalender-med-to-do-be.herokuapp.com/delete`, {

        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({"id": taskId})
    })
    .then(data => data.json())
    .then(res => {
        // console.log("res from fetch Del eteTask.js:", res);
    });
}
export default DeleteTask;
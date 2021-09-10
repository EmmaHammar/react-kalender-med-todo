function UpdateCheckbox(updateTask) {
    fetch(`http://localhost:3012/checkbox`, {
    // fetch(`https://react-kalender-med-to-do-be.herokuapp.com/checkbox`, {

        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(updateTask)
        })
    .then(data => data.json())
    .then(res => {
        console.log("res from fetch updateCheckbox():", res);
    });

}

export default UpdateCheckbox;
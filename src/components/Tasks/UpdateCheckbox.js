function UpdateCheckbox(updateTask) {
    fetch(`http://localhost:3012/checkbox`, {
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
function GetData (cb) {

    fetch('http://localhost:3010/task')
    .then(response => response.json())
    .then(data => {
        console.log("data from fetch", data[0]);
        cb(data); 
    });
}

export default GetData;
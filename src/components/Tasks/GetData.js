function GetData (cb) {

    fetch(`http://localhost:3011/list`)
    .then(response => response.json())
    .then(data => {
        console.log("data from fetch", data[0]);
        cb(data); 
    });
}

export default GetData;
function GetMasterData () {

    fetch(`http://localhost:3012/masterlist`)
    .then(response => response.json())
    .then(data => {
        console.log("masterData to spread:", data[0]);
    });
}

export default GetMasterData;
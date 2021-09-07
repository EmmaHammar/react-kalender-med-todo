function GetMasterData (cb) {

    fetch(`http://localhost:3012/masterlist`)
    .then(response => response.json())
    .then(data => {
        // console.log("masterData to spread:", data);

        //cb tillbaka till app:
        cb(data)
    });

}

export default GetMasterData;

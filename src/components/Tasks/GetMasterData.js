function GetMasterData (cb) {

    fetch(`http://localhost:3012/masterlist`)
    // fetch(`https://react-kalender-med-to-do-be.herokuapp.com/masterlist`)


    .then(response => response.json())
    .then(data => {
        // console.log("masterData to App:", data);

        //cb tillbaka till app:
        cb(data)
    });

}

export default GetMasterData;

function GetList (cb) {
    // fetch(`http://localhost:3012/masterlist`)
    fetch(`https://react-kalender-med-to-do-be.herokuapp.com/masterlist`)
    .then(response => response.json())
    .then(data => {
        // console.log("GetList:", data);
        cb(data) //GetList() blir cb i app
    });
};

export default GetList;

function GetList (cb) {
    fetch(`https://sholiday.faboul.se/dagar/v2.1/2021`)
    // fetch(`https://react-kalender-med-to-do-be.herokuapp.com/holidays`)
    .then(response => response.json())
    .then(data => {
        // console.log("Fetch GetHolidays.js:", data.dagar);
        cb(data.dagar) //GetHolidays() blir cb i app
    });
};

export default GetList;

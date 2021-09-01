function printDayCard() {
  const dayCardBody = document.getElementById("dayCardBody");
  
    return (
  
      dayCardBody.innerHTML = `
        <div id="DayCardMain">
          <div id="AddTaskCardContainer">
            <h3>Lägg till ny uppgift</h3>
            <input placeholder="Skriv din uppgift"></input>
            <h4>Sätt deadline</h4>
            <p>finns detta i react-calendar?</p>
            <button>Spara</button>
          </div>

          <div id="DayListContainer">
            <h3>Dagens lista</h3>
            <ul>
              <li>
                <input type="checkbox">06:00 Vakna</input>
              </li>
              <li>
                <input type="checkbox">07:30 Lämna barn</input>
              </li>
              <li>
                <input type="checkbox">09:15 Möte</input>
              </li>
            </ul>
          </div>
        </div>
      `
      );
  }
  
  export default printDayCard;
function PrintDayCard() {

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit form");
    //ändra state
  }
  
  return (
    
    <div id="DayCardMain">

      <div id="AddTaskCardContainer"> 
        <h3>Lägg till ny uppgift</h3>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Skriv din uppgift"></input>
          <button type="submit">Spara</button>
        </form>

        <h4>Sätt deadline</h4>
      </div>

    </div>
    
  );
      
};
  
export default PrintDayCard;
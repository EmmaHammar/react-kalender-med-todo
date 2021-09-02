function PrintMasterListCard() {

  fetch(`http://localhost:3010/task`)
  .then(data => data.json())
  .then(taskData => {
    console.log("taskData", taskData);
    // console.log("data", data);


    // fetch(`https://api.mymemory.translated.net/get?q=${textForTranslation}!&langpair=${this.props.selectFrom}|${this.props.selectTo}`) 
    // .then( res => res.json() )
    // .then( translation => {
    //     console.log("translated text:", translation.responseData.translatedText);

    //     //Skicka översatta texten som prop till app.js, via funktionen som kallas på i Translate??
    //     //vår callback är getNewText - skicka tillbaka nya statet till App.js (som sen ska spara det)
    //     this.props.getNewText( translation.responseData.translatedText )
    
  })


  return (
    <div id="masterListCard">
      <h2>Master Task List</h2>
    </div>
  );

};

  export default PrintMasterListCard;
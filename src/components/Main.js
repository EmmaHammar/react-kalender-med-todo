import PrintCalendar from "./PrintCalendar";
import PrintMasterListCard from './PrintMasterListCard';

function Main() {
    return (
      <main>
        <div id="calendarMasterListContainer">
            <PrintCalendar />
            <PrintMasterListCard />
        </div>
        <div id="dayCardBody"></div>
      </main>
    );
  }
  
  export default Main;
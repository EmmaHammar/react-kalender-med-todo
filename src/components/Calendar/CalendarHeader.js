export default function CalendarHeader({value, setValue}) {

    function currMonthName() {
        return value.format("MMMM")
    }

    function currYear() {
        return value.format("YYYY")
    }
    
    function prevMonth() {
        return value.clone().subtract(1, "month");
    };

    function nextMonth() {
        return value.clone().add(1, "month");
    };

    // function thisMonth() {
    //     return value.isSame(new Date(), "month");
    // }
    return(
        <div className="calendar-header">
                <div className="prev" onClick={ () => setValue(prevMonth()) }>
                    {String.fromCharCode(171)}
                </div>
                    
                <div className="curr">{currYear()} {currMonthName()}</div>
                <div className="next" onClick={ () => setValue(nextMonth()) }>
                    {String.fromCharCode(187)}
                </div>    
        </div>
    )
};



//!thisMonth - kollar omd et är sant eller falskt. om det inte är denna månad -> visa pilen till vänster


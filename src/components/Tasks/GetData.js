function GetData () {

    fetch('http://localhost:3010/task')
    .then(response => response.json())
    .then(data => {
        console.log("data from fetch", data[0]);
    })
    return (
        <div>

            <h3>Hej från GetData</h3>
                        
        </div>
    );
};

export default GetData;
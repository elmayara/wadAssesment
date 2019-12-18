function init() {
    document.getElementById("btn1").addEventListener("click", searchAcom);
  
}

function searchAcom(){
    var loc = document.getElementById("loc").value;
    var type = document.getElementById("type").value;

    var ajaxConnection = new XMLHttpRequest();
    // Set up the callback function. Here, the callback is an arrow function.
    ajaxConnection.addEventListener ("load",e => 
        { 
            if(e.target.status==404){
                alert("There are no places with those values");
            }else{
                var output="   <table border=1>";
                var allAcom = JSON.parse(e.target.responseText);
          // Loop through each 
                allAcom.forEach( curAcoms =>{
                    // add the details of the current flight to the "output" variable
                output = output + `<tr> <script type='text/javascript' src='script.js'></script>
                                   <td> ${curAcoms.name}</td>
                                   <td> ${curAcoms.type} </td> 
                                   <td> ${curAcoms.description} </td> 
                                   <td> ${curAcoms.location} </td>   
                                   <td><input type='button' id='btn2' value='order one'/></td>
                                </tr> `;



                                
                } );    
             var output=output+"</table>";
            document.getElementById("response").innerHTML =output;
            }
        });
    ajaxConnection.open("GET" , `https://edward2.solent.ac.uk/~wad1941/assesment/allAcom/${loc}/type/${type}`);
    // Send the request.
    ajaxConnection.send();
} 














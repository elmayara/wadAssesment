function init(){
    document.getElementById("btn1").addEventListener("click", searchAcom);
}
function searchAcom(){    
    var type = document.getElementById("type").value;
    var ajaxConnection = new XMLHttpRequest();
    // Set up the callback function. Here, the callback is an arrow function.
    ajaxConnection.addEventListener ("load",e => 
        { 
            if(e.target.status==404){
                alert("There are no places with those values");
            }else{
                var allAcom = JSON.parse(e.target.responseText);
            // Loop through each 
                allAcom.forEach( curAcoms =>{
                   
                    // add the details of the current flight to the "output" variable
                    let newDiv=document.createElement("div");
                    newDiv.setAttribute("id", "newDiv");
                    var newContent=document.createTextNode(
                    "Name"+curAcoms.name+"Type"+curAcoms.type+"Decripcion"+curAcoms.description);
                    newDiv.appendChild(newContent); 
                      // add the newly created element and its content into the DOM 
                  //  var currentDiv = document.getElementById("response"); 
                  //  document.body.appendChild(newDiv); 
                    document.getElementById('response').appendChild(newDiv); 
                  
                    }
                );    
            }
        });
    ajaxConnection.open("GET" , `https://edward2.solent.ac.uk/~wad1941/assesment/Hamps/${type}`);
    // Send the request.
    ajaxConnection.send();
} 

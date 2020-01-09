var canvas;

function init(){
    document.getElementById("btn1").addEventListener("click", searchAcom);

   /* var elements=document.getElementsByClassName("creations");
      for (var i=0 ; i < elements.length;i++){
        elements[i].onclick= function(){
          console.log(this);
        }
    }*/

   /* var elements=document.getElementById("object");
    elements.onclick=function(onClick){
        console.log(log);
    }*/
    
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
                var output="<table border=1> <tr><th>Places to Stay</th></tr>";
                var allAcom = JSON.parse(e.target.responseText);
            // Loop through each 
                allAcom.forEach( curAcoms =>{
                    // add the details of the current flight to the "output" variable
                output = output + `
                                  
                                 <tr id="object">
                                   <td> ${curAcoms.name}</td>
                                   <td> ${curAcoms.type} </td> 
                                   <td> ${curAcoms.description} </td> 
                                   <td> ${curAcoms.location} </td>   
                                   <td id="canvas"> Search a place </td>
                                  </tr>`;
                } );    

             canvas = document.getElementById('canvas1').addEventListener ("click", handleDivEvent);

             var output=output+"</table>";
            document.getElementById("response").innerHTML=output;
            }
        });
    ajaxConnection.open("GET" , `https://edward2.solent.ac.uk/~wad1941/assesment/Hamps/${type}`);
    // Send the request.
    ajaxConnection.send();
} 

function handleDivEvent(){
    console.log(this);
}
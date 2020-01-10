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
                   
                    let newDiv=document.createElement("div");
                    newDiv.setAttribute("id", "newDiv");
                    newDiv.style.cssText="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";

                    var img = document.createElement('img'); 
                    if(curAcoms.type=="hotel"){
                        img.src = '\hotel.png'; 
                        img.style.cssText="border: 1px solid #ddd; border-radius: 4px; padding: 5px; width: 150px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
                    }
                    if(curAcoms.type=="BandB"){
                        img.src = '\bandb.png'; 
                        img.style.cssText="border: 1px solid #ddd; border-radius: 4px; padding: 5px; width: 150px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
                    }
                    if(curAcoms.type=="campsite"){
                        img.src = '\campsite.png'; 
                        img.style.cssText="border: 1px solid #ddd; border-radius: 4px; padding: 5px; width: 150px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
                    }
                   
                    var newContent=document.createTextNode("Name:  "+curAcoms.name+" "+"Type:  "+curAcoms.type+"Decripcion:  "+curAcoms.description);
                    newDiv.style.cssText="color: blue; border: 1px solid black";
                   // newDiv.style.textAlign = "center";
                   // newContent.style.textAlign = "center";
                    
                    newDiv.appendChild(newContent);
                    newDiv.appendChild(img);
                    
                    
                    
                   
        



                    document.getElementById('response').appendChild(newDiv); 
                  
                    }
                );    
            }
        });
    ajaxConnection.open("GET" , `https://edward2.solent.ac.uk/~wad1941/assesment/Hamps/${type}`);
    // Send the request.
    ajaxConnection.send();
} 

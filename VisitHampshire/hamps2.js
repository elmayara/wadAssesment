var charged=false;
var place="";


function init(){
    document.getElementById("btn1").addEventListener("click", whatTodo);
    document.getElementById("form").style.display = "none";
    document.getElementById("response").addEventListener("click",Availability);
}

function whatTodo(){
    if(charged==true){       
        charged=false;
        location.reload();
        searchAcom();
        //div.style.display = "none";
    }else{
        searchAcom();
        charged=true;
     }
}

function searchAcom(){    
        
        var type = document.getElementById("type").value;
        var ajaxConnection = new XMLHttpRequest();
        // Set up the callback function. Here, the callback is an arrow function.
        ajaxConnection.addEventListener ("load",e => 
            { 
                if(e.target.status==404){
                       // alert("There are no places with those values");
                        let newDiv=document.createElement("div");
                        newDiv.setAttribute("id", "newDiv");
                        var newContent=document.createTextNode(" 404:no data available")
                        newDiv.style.cssText="padding:20px;background-color: #f44336;color: white;";
                        //newContent.style.cssText="padding:20px;background-color: #f44336;color: white;";
                        newDiv.appendChild(newContent);
                        document.getElementById('response').appendChild(newDiv); 
                        
                }else{
                    var allAcom = JSON.parse(e.target.responseText);
                // Loop through each 
                    allAcom.forEach( curAcoms =>{
                            
                                let newDiv=document.createElement("button");
                                
                                newDiv.style.cssText="";

                                var img = document.createElement('img'); 

                                        if(curAcoms.type=="hotel"){
                                            img.src = '\hotel.png'; 
                                            img.style.cssText=" max-width: 65%;height: 20%;border: double;border-color:black;";
                                            
                                        }
                                        if(curAcoms.type=="BandB"){
                                            img.src = '\bandb.png'; 
                                            img.style.cssText="max-width: 65%;height: 20%;border: double;border-color:black;";
                                        }
                                        if(curAcoms.type=="campsite"){
                                            img.src = '\campsite.png'; 
                                            img.style.cssText="max-width: 65%;height: 20%;border: double;border-color:black;";
                                        }
                                    
                                //var newContent=document.createTextNode("     "+"Name:  "+curAcoms.name+" "+"Type:  "+curAcoms.type+"Decripcion:  "+curAcoms.description);
                                var newContent=document.createElement("div");
                                var newName=document.createTextNode("Name:  "+curAcoms.name+" ");
                                var newType=document.createTextNode("Type:  "+curAcoms.type+" ");
                                var newDesc=document.createTextNode("Descripcion:  "+curAcoms.description+" ");
                                newContent.appendChild(newName);
                                newContent.appendChild(document.createElement("br"));
                                newContent.appendChild(newType);
                                newContent.appendChild(document.createElement("br"));
                                newContent.appendChild(newDesc);
            
                            // newContent.appendChild(document.createElement("br"));
                                newDiv.style.cssText="color: blue; border: 1px solid black; align-content: center;";
                            // newContent.style.textAlign = "center";
                            newDiv.appendChild(document.createElement("br"));
                            newDiv.appendChild(img);
                            newDiv.appendChild(newContent);
                            newDiv.setAttribute("id", curAcoms.name);
                            newContent.style.textAlign = "left";
                            document.getElementById('response').appendChild(newDiv); 
                            
                            newDiv.onclick = function(event){
                                //alert(event.currentTarget.id);
                                document.getElementById("form").style.display = "block";
                                //document.getElementById("placetostay").setAttribute(value,event.currentTarget.id);
                                place=event.currentTarget.id;
                                console.log(place.getElementById.toString);
                                console.log(document.getElementById("placetostay"));
                            }
                        }
                    );    
                }
            });
        ajaxConnection.open("GET" , `https://edward2.solent.ac.uk/~wad1941/assesment/Hamps/${type}`);
        // Send the request.
        ajaxConnection.send();
} 

function Availability(){
    //console.log("availability");
    //console.log(document.getElementById.toString);
    
   
    //object.style.visibility = "visible|hidden|collapse|initial|inherit"
}
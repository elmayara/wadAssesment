var marker1;
var map;
const allPlaces=[];
var i;

function init() {

    document.getElementById("btn1").addEventListener("click", searchAcom);
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition (
                gpspos=> {
                    mylati=gpspos.coords.latitude;
                    mylong=gpspos.coords.longitude;
                    map.setView([mylati,mylong],13);
                   marker1=L.marker([mylati,mylong]).addTo(map);
                    marker1.bindPopup("You are here");
                },
                err=> {
                    alert(`An error occurred: ${err.code}`);
                }
            );
        }
        else{
            alert("Sorry, geolocation not supported in this browser");
        }
        map = L.map ("map1");
        var attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";
        L.tileLayer
            ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                { attribution: attrib } ).addTo(map);
    }

function Places(name, description,  latitude ,longitude) {
        this.FirstName = name;
        this.Desc = description;
        this.Lat = latitude;
        this.Long = longitude;  
    }

function searchAcom(){
        map.removeLayer(marker1);

        var loc = document.getElementById("loc").value;
        var type = document.getElementById("type").value;
        console.log("")
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
                                    
                         var temp = new Places(curAcoms.name,curAcoms.description,curAcoms.latitude,curAcoms.longitude);
                         allPlaces.push(temp);
                            allPlaces.forEach(function(element) {
                                var lon=element.Long;
                                var lat=element.Lat;
                                var popupText=element.FirstName+": "+element.Desc;
                                var markerLocation= new L.LatLng(lat, lon);
                                var marker= new L.marker(markerLocation);
                                map.addLayer(marker);
                                marker.bindPopup(popupText)
                                map.setView([element.Lat,element.Long],13);
                            });
                    } );    
                 var output=output+"</table>";
                document.getElementById("response").innerHTML=output;
                }
            });
        ajaxConnection.open("GET" , `https://edward2.solent.ac.uk/~wad1941/assesment/allAcom/${loc}/type/${type}`);
        // Send the request.
        ajaxConnection.send();
    } 
/*
function markerify(){
        allPlaces.forEach((){
            var lon=allPlaces.;
            var lat=allPlaces[i][3];
            var popupText=allPlaces[i][1]+""+allPlaces[i][2];
            var markerLocation= new L.LatLng(lat, lon);
            var marker= new L.marker(markerLocation);
            map.addLayer(marker);
            marker.bindPopup(popupText);
        });
       
        allPlaces.forEach(Places =>
            var lon= Places.lon;
            var lat=Places.lat];
            var popupText=allPlaces[i][1]+""+allPlaces[i][2];
            var markerLocation= new L.LatLng(lat, lon);
            var marker= new L.marker(markerLocation);
            map.addLayer(marker);
            marker.bindPopup(popupText);
            )

        const anyAdult = people.some(person => person.age >= 18);
        myArray.forEach((element, index, array) => {
            console.log(element.x); // 100, 200, 300
            console.log(index); // 0, 1, 2
            console.log(array); // same myArray object 3 times
        });
} 
*/



// L.marker([curAcoms.latitude,curAcoms.longitude],).addTo(map1);} ); 
 /*L.marker([curAcoms.latitude,curAcoms.longitude]).addTo(map);
                      L.marker([0,0]).addTo(map);*/
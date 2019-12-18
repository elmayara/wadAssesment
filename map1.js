var place;

function init(){
    var blackIcon = L.icon({
        iconUrl: 'leaf.png',
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition (
            gpspos=> {
                console.log(`Lat ${gpspos.coords.latitude} Lon ${gpspos.coords.longitude}`); // show on the console
                mylati=gpspos.coords.latitude;
                mylong=gpspos.coords.longitude;
                map.setView([mylati,mylong],13);

                var marker1=L.marker([mylati,mylong],{icon: blackIcon}).addTo(map);
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
    var map = L.map ("map1");
    var attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";
    L.tileLayer
        ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            { attribution: attrib } ).addTo(map);
}

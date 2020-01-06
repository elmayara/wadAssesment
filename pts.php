<html>  
    <head>
        <meta charset="UTF-8">
        <title>PlacesToStay </title>
        <link rel="stylesheet" href="pts.css">
        <link rel='stylesheet' href='https://unpkg.com/leaflet@1.5.1/dist/leaflet.css'/>
        <script type='text/javascript' src='https://unpkg.com/leaflet@1.5.1/dist/leaflet.js'></script>
        
    </head>
    <body onload=" init()">
    <script type='text/javascript' src='scriptmap2.js'></script>
    
            <div class="header">
                <h1>PlacesToStay</h1>
                <p>Broad to you by SolentTech Iberia.</p>
              </div>

              <div class="topnav">
                <a href="https://edward2.solent.ac.uk/~wad1941/assesment/pts.php">Search for Your Place</a>
                <a href="https://edward2.solent.ac.uk/~wad1941/assesment/ptsG.php">Geolocation</a>
                <a href="https://edward2.solent.ac.uk/~wad1941/assesment/ptsH.php">Visit Hampshire</a>
                <a href="#" style="float:right">Log in</a>
              </div>

        <div class="row">
              <div class="leftcolumn">
                    <br>
                    <div class="search">  Location:<input id="loc">      Type:<input id="type">      <input type="button" id="btn1" value="Go!">           </div>
                    <br>
                    <br>
                    <div class="response" id="response"></div>
                    <br>
                    <br>
                    <div id="map1" style="width:800px; height:600px"></div>
                    <br>
                    
              </div>

              
              <div class="rightcolumn">
              </div>
        </div>

        <div class="footer">
          <h2>Footer</h2>
        </div>
    </body>
</html>



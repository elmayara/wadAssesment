<html>  
<head>
    <meta charset="UTF-8">
    <title>PlacesToStay </title>
    <link rel="stylesheet" href="pts.css">
    <link rel='stylesheet' href='https://unpkg.com/leaflet@1.5.1/dist/leaflet.css'/>
    <script type='text/javascript' src='https://unpkg.com/leaflet@1.5.1/dist/leaflet.js'></script>
</head>
<body onload="init()" >
<script type='text/javascript' src='scriptmap2.js'></script>
  
    </div>   
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
      Location:<input id="loc">
      Type:<input id="type">
      <input type="button" id="btn1" value="Go!">

      <div id="response"></div>


      <div id="map1" style="width:800px; height:600px"> </div>
</div>
 <?php
  /*$name = "Hampshire";

   $connection = curl_init();
        curl_setopt($connection, CURLOPT_URL, "https://edward2.solent.ac.uk/~wad1941/assesment/allAcom/$name");
        curl_setopt($connection,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($connection,CURLOPT_HEADER, 0);
        $response= curl_exec($connection);
        $data = json_decode($response, true);
            for($i=0;$i<count($data);$i++){
              echo "<form method='post'  action ='clientreview.php'>";
              echo "<textarea name='review'> </textarea>";
              echo "<input type='hidden'  name='id' value=' .$data[$i]['id'] . '/>";
              echo "<input type='submit'  value='Order'  />";
              echo "</form>";
              echo "ID " . $data[$i]["ID"] . " " .
                "Name " . $data[$i]["name"] . " " .
                "Type " . $data[$i]["type"] . " " .
                "Location " . $data[$i]["location"] . "<br/>".
                "Longitude " . $data[$i]["longitude"] . "<br/>".
                "Latitude " . $data[$i]["latitude"] . "<br/>".
                "Description " . $data[$i]["description"] . "<br/>"."<br/>"."<br/>";

            }
           curl_close($connection);*/ ?>
      <br>
     
  </div>
  <div class="rightcolumn">
  </div>
</div>

<div class="footer">
  <h2>Footer</h2>
</div>

</body>
</body>
</html>

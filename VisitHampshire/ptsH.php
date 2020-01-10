<html>  
<head>
    <meta charset="UTF-8">
    <title>PlacesToStay </title>
    <link rel="stylesheet" href="pts.css">
    <link rel='stylesheet' href='https://unpkg.com/leaflet@1.5.1/dist/leaflet.css'/>
    <script type='text/javascript' src='https://unpkg.com/leaflet@1.5.1/dist/leaflet.js'></script>
</head>
<body onload="init()" >
<script type='text/javascript' src='hamps2.js'></script>
  
    </div>   
<div class="header">
  <h1>Visit Hampshire</h1>
  <p>Broad to you by SolentTech Iberia.</p>
</div>

<div class="topnav">
  <a href=""></a>
  <a href=""></a>
  <a href="#" style="float:right">Log in</a>
</div>

<div class="row">
  <div class="leftcolumn">
        
        <h4>Discover Hampshire<h4>
            <p> Your official guide

            Hampshire is the perfect blend of city, coast and country, blessed with natural beauty of two National Parks, thriving culture, with history and heritage at its heart.

            Whether visiting for a day trip or short break, you’ll find tons of things to do, with so many attractions and experiences available.

            Discover exciting events throughout the year from arts, culture, festivals, music, sports and much more.

            Stay in amazing accommodation and sample Hampshire’s hearty food and drink.

            Whether you visit with friends or family and looking for a relaxing or invigorating break Hampshire has it all!
            </p>
           
            <br>
            <div id="overlay" class="search">Type:<input id="type">             <input type="button" id="btn1" value="Search/Reload"></div>
           
            <div class="form-popup" id="form">

                <form action="/action_page.php" class="form-container">
                  <h1>Booking</h1>

                  <input  id="placetostay" name="date" value="place">

                  <label for="date"><b>Date</b></label>
                  <input type="date" placeholder="Enter date" name="date" required>

                  <label for="nmbr"><b>Password</b></label>
                  <input type="number" placeholder="Enter number" name="nmbr" required>

                  <button type="submit" class="btn">Booking</button>
                  <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                </form>
              </div>
            <br>
              <br>
            <div class="response" id="response"></div>
            <br>
            <br>

           

  </div>
  <div class="rightcolumn">
  <img src="hampshire.jpg" alt="Hampshire">
  </div>
</div>

<div class="footer">
  <h2>Footer</h2>
</div>

</body>
</body>
</html>

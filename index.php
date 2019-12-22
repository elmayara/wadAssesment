<?php 

require '/var/www/html/share/vendor/autoload.php';

$app = new \Slim\App;

$container = $app->getContainer();

$container['db'] = function() {
    $conn = new PDO("mysql:host=localhost;dbname=wad1941", "wad1941", "ochahdof");
    return $conn;
};


$app->get('/allAcom', function($req,$res, array $args){
	$stmt = $this -> db -> prepare("SELECT * FROM `accommodation` ORDER BY `location` ASC" );
	$stmt ->execute();
	$results = $stmt->fetchALL(PDO::FETCH_ASSOC); 
	return $res->withJson($results);
    });
    
$app->get('/allAcom/{loc}', function($req,$res, array $args){
   $stmt = $this -> db -> prepare ("SELECT * FROM `accommodation` where `location`=? ORDER BY `location` ASC ");
   $stmt->bindParam(1,$args['loc']);
   $stmt ->execute();
   $results = $stmt->fetchALL(PDO::FETCH_ASSOC); 
   return $res->withJson($results);
    });
    $app->get('/Hamps/{tipe}', function($req,$res, array $args){
        $stmt = $this -> db -> prepare("SELECT * FROM `acc_users` WHERE 'username'=$user and 'password'=$passw " );
        $stmt ->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC); 
        if ($row==null){
            return $res->withStatus(401);
        }else{
        $stmt2 = $this -> db -> prepare("SELECT * FROM `accommodation` where `location`= 'Hampshire' and `type`= :typo  " );
        $stmt2->bindParam(':typo',$args['typo']);
        $stmt2 ->execute();
        $results = $stmt2->fetchALL(PDO::FETCH_ASSOC); 
        return $res->withJson($results);
        }
         });
         
    $app->get('/Map/{loc}/type/{typo}', function($req,$res, array $args){
        $stmt = $this -> db -> prepare("SELECT `name`,`latitude`,`longitude` FROM `accommodation` where `location`= :loc and `type`= :typo " );
        $stmt->bindParam(':loc',$args['loc']);
        $stmt->bindParam(':typo',$args['typo']);
        $stmt ->execute();
        $results = $stmt->fetchALL(PDO::FETCH_ASSOC); 
        return $res->withJson($results);
             });   

$app->get('/allAcom/{loc}/type/{typo}', function($req,$res, array $args){
    $stmt = $this -> db -> prepare("SELECT * FROM `accommodation` where `location`= :loc and `type`= :typo " );
    $stmt->bindParam(':loc',$args['loc']);
    $stmt->bindParam(':typo',$args['typo']);
    $stmt ->execute();
    $results = $stmt->fetchALL(PDO::FETCH_ASSOC); 
    return $res->withJson($results);
    });

//Hay que cambiar el hecho de que no se autentifiquen si está vacío o completo 
//Mirar más codigos http para cada acción 

$app->get('/book/{name}/number/{number}/date/{date}', function($req,$res, array $args){
    $stmt = $this -> db -> prepare("SELECT id FROM `accommodation` where `name` = :name " );
    $stmt->bindParam(':name',$args['name']);
    $stmt ->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $id=$row["id"];
        
      $stmt2 = $this -> db -> prepare("SELECT * FROM `acc_dates` where `accId` = $id " );
      $stmt2 ->execute();
      $row2 = $stmt2->fetch(PDO::FETCH_ASSOC); 

        if($row2["availability"] < $args['number'] ){

            $stmt3=$this ->db -> prepare("INSERT INTO 'acc_bookings' (`accID`, `thedate`, `npeople`) VALUES ( $id, :dato , :numbero ) ");
            $stmt3->bindParam(':dato',$args['date']);
            $stmt3->bindParam(':numbero',$args['number']);
            $stmt3 ->execute();
            
            $stmt4=$this ->db -> prepare(" UPDATE  'acc_dates' SET availability=availability -:numbero where id=$id");
            $stmt4->bindParam(':numbero',$args['number']);
            $stmt4 ->execute();
            return $res->withStatus(200);
        }else{
            return $res->withStatus(401);
        }});

$app->run();
?>
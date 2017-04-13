<?php
require("common.php");

  $query = "
       Select * FROM dbe4mkopon42.pizza
    ";
      try
    {
        $stmt = $db->prepare($query);
        $stmt->execute($query_params);
    }
    catch(PDOException $ex)
    {
header('HTTP/1.0 503 Service Unavailable');
die();
//  die("Faild to run query: " . $ex->getMessage());
    }

    $rows = $stmt->fetchAll();


    $data = array();
    foreach($rows as $row):
      $data[] = $row;
    endforeach;

      echo json_encode($data,JSON_UNESCAPED_UNICODE);


die();

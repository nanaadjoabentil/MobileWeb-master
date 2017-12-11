<?php
require_once "connect.php";


header("Content-Type: application/json; charset=UTF-8");

if(isset($_GET['search']))
{
  search($_GET['search']);
}
else
{
  displayTable();
}


function displayTable()
{
  $db = new Connect;

    $sql = "SELECT * FROM incidents";

    $run = $db->query($sql);

    $result = $db->fetch();

    echo "<table>";
    echo "<tr><th>Incident ID</th><th>Time</th><th>Location</th><th>Details</th><th>Picture</th></tr>";

    foreach ($result as $row) {
        echo "<tr>";
        echo "<td>".$result['id']."</td>";
        echo "<td>".$result['time']."</td>";
        echo "<td>".$result['location']."</td>";
        echo "<td>".$result['details']."</td>";
        echo "<td>".$result['picture']."</td>";
        echo "</tr>";
    }
    echo "</table>";
  }


 if(isset($_GET['searchbutton']) && !empty($_GET['search']))
 {
   search($_GET['search']);
}
  function search($keyword)
  {
    $db = new Connect;

      $sql = "SELECT * FROM incidents WHERE details LIKE '%". $keyword."%'";

      $run = $db->query($sql);

      $result = $db->fetch();

      echo "<table>";
      echo "<tr><th>Incident ID</th><th>Time</th><th>Location</th><th>Details</th><th>Picture</th></tr>";

      foreach( $result as $row) {
        echo "<tr>";
        echo "<td>".$result['id']."</td>";
        echo "<td>".$result['time']."</td>";
        echo "<td>".$result['location']."</td>";
        echo "<td>".$result['details']."</td>";
        echo "<td>".$result['picture']."</td>";
        echo "</tr>";
      }
      echo "</table>";
    }

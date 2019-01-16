<html>
 <body>

 <?php
$servername = "localhost";
$username = "id8152687_lcornelius";
$password = "Leojack2005";
$dbname = "id8152687_main";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    echo "conection failure. Abort";
}

$sql = "SELECT Name FROM Users";
$name = mysqli_query($conn, $sql);
$sqlq = "SELECT Password FROM Users";
$pword = mysqli_query($conn, $sqlq);
$uname = $_POST["uname"];
$psw = $_POST["psw"];
if ($uname == $name && $psw == $pword) {
    echo "Welcome!";
 } else {
    echo "Incorect password or username! Please try again";
    $test = "SELECT Name FROM Users";
    $namee = mysqli_query($conn, $test);
    $nameeo = mysqli_fetch_assoc($namee);

    echo $nameeo;
 }

mysqli_close($conn);
?> 

</body
</html>
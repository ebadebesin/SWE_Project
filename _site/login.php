<?php
session_start();
//include "db_connect.php";
$host = "localhost";
$port = "5432";
$dbname = "wellweb";
$user = "postgres";
$password = "aliciakeys22"; 
$connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password} ";
$dbconn = pg_connect($connection_string);

////////////////////////////////
if(isset($_POST['submit'])&&!empty($_POST['submit'])){
    
    $sql = "insert into public.user(name,email,password)values('".$_POST['name']."','".$_POST['email']."','".md5($_POST['pwd'])."')";
  $ret = pg_query($dbconn, $sql);
  if($ret){
      
        echo "Data saved Successfully";
  }
  else{
      
        echo "Something Went Wrong";
  }
}

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>My Wellness Website</title>
  <link rel="stylesheet" href="style.css">
  <script src ="index.js"></script>
  

<div class="container">

    <form class="form form--hidden" id="createAccount">
          <h1 class="form__title">Create Account</h1>
          <div class="form__message form__message--error"></div>
          <!-- Incorrect username/password combination. 
          This is an error message-->
          <div class="form__input-group">
            <input type="text" id="signupUsername" class="form__input" autofocus placeholder ="Username">
            <div class="form__input--error-message"></div>
          </div> 

          <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder ="Email Address">
            <div class="form__input--error-message"></div>
          </div> 

          <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder ="Password">
            <div class="form__input-error-message"></div>
          </div> 

          <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder ="Confirm password">
            <div class="form__input--error-message"></div>
          </div> 

          <button class="form__button" type = "submit" >Continue</button>

          <p class="form__text">
            <a  class="form__link" href="index.php" id="linkLogin">Already have an Account? Sign in!</a>
          </p>


    </form>


</div> 

</body>
</html>

<!-- ////////////////////////////////

//if(isset($_POST['uname']) && isset ($_POST['password'])){

//         function validate($data) {
//         $data = trim($data);
//         $data = stripslashes ($data);
//         $data = htmlspecialchars($data)
//         return data;
//         }
// }
// $uname = validate ($_POST [ ' uname ' ]) ;
// $pass = validate ($_POST [ 'password' ]);

// if (empty ($uname)) {
//     header ("Location: index.php?erro=User Name is required");
//     exit();
// }
// else if (empty ($pass)) {
//     header ("Location: index.php?erro=Password is required");
//     exit();
// }

// $sq1 = "SELECT * FROM users WHERE user_name= '$uname' AND password='$pass'";

// $result = mysqli _query ($conn, $sql);

// if(mysqli_num_rows ($result) === 1) {
//     $row = mysqli_fetch_assoc($result);

//     if(Srow[ 'user_name '] === $uname && $row['password'] === $pass) {
//         echo "Logged In!";
//         $_SESSION['user_name'] = $row['user_name'];
//         $_SESSION['name'] = $row['name'];
//         $_SESSION['id'] = $row['id'];
//         header ("Location: user.html");
//         exit();

//     }
//     else{
//         header ("Location: index.php?error=Incorrect User Name or Password");
//         exit();
//     }
       
// }
// else {
//     header ("Location: index.php");
//     exit();
// }

 -->

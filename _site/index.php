<?php
$host = "localhost";
$port = "5432";
$dbname = "wellweb";
$user = "postgres";
$password = "postgres"; 
$connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password} ";
$dbconn = pg_connect($connection_string);
session_start();
//include "db_connect.php";

if(isset($_POST['submit'])&&!empty($_POST['submit'])){
    
    $hashpassword = md5($_POST['pwd']);
    $sql ="select *from public.user where email = '".pg_escape_string($_POST['email'])."' and password ='".$hashpassword."'";
    $data = pg_query($dbconn,$sql); 
    $login_check = pg_num_rows($data);
    if($login_check > 0){ 
        
        echo "Login Successfully";    
    }else{
        
        echo "Invalid Details";
    }
}

?>
<!DOCTYPE html>
<html>
<head>

    <title>LOGIN</title>

    <link rel="stylesheet" type="text/css" href="login.css">

</head>

<body>

<!-- <form class="form" id="login"> -->
    <form action="login.php" method="post">
          <h1 class="form__title">Login</h1>
          <div class="form__message form__message--error"> </div>
          <!-- Incorrect username/password combination. 
          This is an error message-->
          <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder ="Username or email">
            <div class="form__input--error-message"></div>
          </div> 

          <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder ="Password">
            <div class="form__input-error-message"></div>
          </div> 

          <button class="form__button" type = "submit" >Continue</button>
          <button type="submit"><a href="index.php">Login</a></button> 

          <p class="form__text">
            <a href="#" class="form__link">Forgot your password?</a>
          </p>
          <p class="form__text">
            <a  class="form__link" href="#" id="linkCreateAccount">Don't have an Account? Create one!</a>
          </p>


    </form>

     <!-- <form action="login.php" method="post">

        <h2>LOGIN</h2>

        <?php if (isset($_GET['error'])) { ?>

            <p class="error"><?php echo $_GET['error']; ?></p>

        <?php } ?>

        <label>User Name</label>

        <input type="text" name="uname" placeholder="User Name"><br>

        <label>Password</label>

        <input type="password" name="password" placeholder="Password"><br> 

        <button type="submit">Login</button>

     </form> -->

</body>

</html>
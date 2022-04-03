<?php
echo "PHP works";
$con=mysqli_connect('localhost','root');
mysqli_select_db($con,'sample_login');
if($_SERVER['REQUEST_METHOD']=='POST')
{
    $username=$_POST['uname'];
    $pswd=$_POST['pswd'];
    $sql="SELECT * FROM `sample_table` WHERE `name` LIKE '$username' AND `password` LIKE '$pswd'";
    $result=mysqli_query($con,$sql);
    $num=mysqli_num_rows($result);
    if($num==1)
    {
        session_start();
        $success="Login Successfull";
        $_SESSION['loggedin']=true;
        $_SESSION['username']=$username;
        echo($success);
        header('location: ../Markup/index.html');
    }
    else
    {
        $error="Invalid Username or password or you don't have an account";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/login.css">
    <title>Login Yourself</title>
</head>

<body>

    <div class="login-box">
        <h2>Login</h2>
        <form name="loginform" onsubmit="validate()" action="register.php" method="POST">
            <div class="user-box">
                <input type="text" name="uname" required="" id="uname">
                <label>Username</label>
            </div>
            <div class="user-box">
                <input type="password" name="pswd" required="" id="pswd">
                <label>Password</label>
            </div>
            <span>Don't Have An Account ? <a href="register.php" id="reglink">Click Here</a></span>
            <a href="" id="submit" onclick="submitform()">Submit</a>
        </form>
    </div>
    <script>
        function submitform(){
            console.log("Submitform");
            document.loginform.submit();
        }
    </script>
    <script src="../JS/login.js"></script>
</body>

</html>
<?php
$con=mysqli_connect('localhost','root');
mysqli_select_db($con,'sample_login');
if($_SERVER['REQUEST_METHOD']=='POST')
{
    $name=$_POST['name'];
    $username=$_POST['uname'];
    $email=$_POST['email'];
    $mono=$_POST['mono'];
    $pswd=$_POST['pswd'];
    $rpswd=$_POST['rpswd'];
    $exists=false;
    $sql="INSERT INTO `sample_table` (`username`, `password`, `mobileno`) VALUES ('$username', '$pswd', '$mono');";
    $checkusr="SELECT * FROM `sample_table` WHERE `username` LIKE '$username' AND `password` LIKE '$pswd'";
    $result=mysqli_query($con,$checkusr);
    $num=mysqli_num_rows($result);
    if($num==0)
    {
        mysqli_query($con,$sql);
    }
    else
    {
        echo "There is already an account associated with this username try another one";
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/register.css">
    <title>Login Yourself</title>
</head>

<body>

    <div class="login-box">
        <h2>Sign Up</h2>
        <form method="POST">
            <div class="user-box">
                <input type="text" name="name" required="">
                <label>Name</label>
            </div>
            <div class="user-box">
                <input type="text" name="uname" required="">
                <label>username</label>
            </div>
            <div class="user-box">
                <input type="email" name="email" required="">
                <label>Email ID</label>
            </div>
            <div class="user-box">
                <input type="tel" name="mono" required="">
                <label>Mobile No</label>
            </div>
            <div class="user-box">
                <input type="password" name="pswd" required="">
                <label>Password</label>
            </div>
            <div class="user-box">
                <input type="password" name="rpswd" required="">
                <label>Confirm Password</label>
            </div>
            <span>Alrady Have An Account ? <a href="login.php" id="reglink">Click Here</a></span>
            <a href="#" id="submit">Submit</a>
        </form>
    </div>
    <script src="../JS/register.js"></script>
</body>

</html>
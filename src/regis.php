<?

   // require_once 'connect.php';
    $last_name = $_POST['last_name'];//имя
    $full_name = $_POST['full_name'];//фамилия
    $patronymic_name = $_POST['patronymicl_name'];//отчество
    $number = $_POST['number'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $info= $last_name.'~'.$full_name.'~'.$patronymic_name.'~'.$email.'~'.$password.'~'.$number;
    file_put_contents("regis.txt", $info, FILE_APPEND | LOCK_EX);


    // if ($password === $password_confirm) {

    //     $path = 'uploads/' . time() . $_FILES['avatar']['name'];
    //     if (!move_uploaded_file($_FILES['avatar']['tmp_name'], '../' . $path)) {
    //         $_SESSION['message'] = 'Ошибка при загрузке сообщения';
    //         header('Location: ../register.php');
    //     }

    //     $password = md5($password);
    //     //INSERT INTO `user` (`id`, `first_name`, `last_name`, `patronymic`, `email`, `number`, `password`) VALUES (NULL, '', '', '', '', '', '')

    //     mysqli_query($connect, "INSERT INTO `user` (`id`, `first_name`, `last_name`, `patronymic`, `email`, `number`, `password`) VALUES (NULL, '', '', '', '', '', '')");

    //     $_SESSION['message'] = 'Регистрация прошла успешно!';
    //     header('Location: ../index.php');


    // } else {
    //     $_SESSION['message'] = 'Пароли не совпадают';
    //     header('Location: ../register.php');
    // }




?>

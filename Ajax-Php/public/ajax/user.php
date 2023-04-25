<?php

require "../../config.php";


use app\models\User;


$user = new User;

sleep(5);

// var_dump($user->all());

// echo 'teste dentro do user';

$id = $_GET['id'];


echo json_encode($user->find('id', $id));
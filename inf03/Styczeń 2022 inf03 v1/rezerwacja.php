<?php
    $server = "localhost";
    $user = "root";
    $password = "";
    $databaseName = "baza";

    $database = mysqli_connect($server, $user, $password, $databaseName);
    if(!$database){
        die("Błąd połączenia: " . mysqli_connect_error());
    }
    
    $date = $_POST["date"];
    $people = $_POST["people"];
    $phone = $_POST["phone"];
    
    $query = "INSERT INTO rezerwacje (data_rez, liczba_osob, telefon) VALUES ('$date', $people, '$phone')";

    if(mysqli_query($database, $query)){
        echo("Dodano rezerwację do bazy");
    }
    else{
        echo("Błąd: " . mysqli_error($query));
    }

    mysqli_close($database);
?>
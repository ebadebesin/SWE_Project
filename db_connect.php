<?php
$host = "localhost";
$port = "5432";
$dbname = "wellweb";
$user = "postgres";
$password = "aliciakeys22"; 
$connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password} ";
$dbconn = pg_connect($connection_string);

    if (!$dbconn) {
        echo "Connection failed!";
    }
<?php

class Database {
    private $hostname = "localhost";
    private $database = "compras-benzo";
    private $username = "root";
    private $password = "perro321";
    private $charset = "utf8";

    funcion conectar()
    {
        try{
        $conexion = "mysql:host=" . $this->hostname . "; dbname=" . $this->database . ";
        charset=" . $this->charset;
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXEPTION,
            PDO::ATTR_EMULATE_PREPARES => false
        ];
        $pdo = new PDO($conexion, $this->username, $this->password, $options);

        return $pdo;
    }catch(PDOException $e){
        echo 'Error de conexion: ' . $e->getMessage();
    }
    }


}

?>
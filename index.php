<?php

require 'config/database.php';
$db = new Database();
$con = $db->conectar();

$sql = $con->prepare("SELECT id, nombre, precio FROM productos");
$sql->execute();
$resultado = $sql->fetchAll(PDO::FETCH_ASSOC);


?>


<!DOCTYPE html>
<html lang="es">

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benzo</title>
    <link rel="shortcut icon" href="./css/logos/benzo-logo.png">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
</head>

<body>
    <header class="header">
        <h1>Menu</h1>
        <img src="./css/logos/benzo-logo.png" alt="logo de benzo" class="logo-benzo">
        <nav>
            <ul>
                <li><a href="#">Burritos</a></li>
                <li><a href="#">Frituras</a></li>
                <li><a href="#">Refrescos</a></li>
                <li><a href="#">Otros</a></li>
            </ul>
        </nav>
    </header>

    <section class="contenedor">
        <div class="menu-seccion">
            <section>
                <h2>Burritos</h2>
                <div class="menu-Productos">
                    <div class="item">
                        <div class="tarjeta-producto">
                            <img class="foto-producto" src="https://lh3.googleusercontent.com/proxy/kVM_-admjTNRNckY_vLFti-Dhh4EIz8psPEpyi3_HxD5c_TdbP2OFoQKBTGetBzmpPJV2w8Z9vznUnxjKGfeT-dKFijiHjrwLk8ltzqurB05R4C-K_PyKIrWR8frJ-g" alt="Burrito">
                            <button class="agregar-carrito">+</button>
                            <span class="texto-tarjeta">Burrito de frijoles</span>
                        </div>
                        <span class="precio-item">$22.000</span>
                    </div>

                    <div class="item">
                        <div class="tarjeta-producto">
                            <img class="foto-producto" src="https://lh3.googleusercontent.com/proxy/kVM_-admjTNRNckY_vLFti-Dhh4EIz8psPEpyi3_HxD5c_TdbP2OFoQKBTGetBzmpPJV2w8Z9vznUnxjKGfeT-dKFijiHjrwLk8ltzqurB05R4C-K_PyKIrWR8frJ-g" alt="Burrito">
                            <button class="agregar-carrito">+</button>
                            <span class="texto-tarjeta">Burrito de frijoles</span>
                        </div>
                        <span class="precio-item">$22.000</span>
                    </div>

                    <div class="item">
                        <div class="tarjeta-producto">
                            <img class="foto-producto" src="https://lh3.googleusercontent.com/proxy/kVM_-admjTNRNckY_vLFti-Dhh4EIz8psPEpyi3_HxD5c_TdbP2OFoQKBTGetBzmpPJV2w8Z9vznUnxjKGfeT-dKFijiHjrwLk8ltzqurB05R4C-K_PyKIrWR8frJ-g" alt="Burrito">
                            <button class="agregar-carrito">+</button>
                            <span class="texto-tarjeta">Burrito de frijoles</span>
                        </div>
                        <span class="precio-item">$22.000</span>
                    </div>

                    <div class="item">
                        <div class="tarjeta-producto">
                            <img class="foto-producto" src="https://lh3.googleusercontent.com/proxy/kVM_-admjTNRNckY_vLFti-Dhh4EIz8psPEpyi3_HxD5c_TdbP2OFoQKBTGetBzmpPJV2w8Z9vznUnxjKGfeT-dKFijiHjrwLk8ltzqurB05R4C-K_PyKIrWR8frJ-g" alt="Burrito">
                            <button class="agregar-carrito">+</button>
                            <span class="texto-tarjeta">Burrito de frijoles</span>
                        </div>
                        <span class="precio-item">$22.000</span>
                    </div>

                    <div class="item">
                        <div class="tarjeta-producto">
                            <img class="foto-producto" src="https://lh3.googleusercontent.com/proxy/kVM_-admjTNRNckY_vLFti-Dhh4EIz8psPEpyi3_HxD5c_TdbP2OFoQKBTGetBzmpPJV2w8Z9vznUnxjKGfeT-dKFijiHjrwLk8ltzqurB05R4C-K_PyKIrWR8frJ-g" alt="Burrito">
                            <button class="agregar-carrito">+</button>
                            <span class="texto-tarjeta">Burrito de frijoles</span>
                        </div>
                        <span class="precio-item">$22.000</span>
                    </div>
                    <!-- Repetir para otros productos -->
                </div>
            </section>
        </div>

        <section class="carrito">
            <div class="header-carrito">
                <h2>Tu Carrito</h2>
            </div>
            <div class="carrito-items">
                <!-- Items del carrito -->
            </div>
            <div class="carrito-total">
                <div class="fila">
                    <strong>Tu Total</strong>
                    <span class="carrito-precio-total">$0,00</span>
                </div>
                <button class="btn-pagar">Pagar <i class="fa-solid fa-bag-shopping"></i></button>
            </div>
        </section>
    </section>

    <script src="./jss/index.js"></script>
</body>

</html>

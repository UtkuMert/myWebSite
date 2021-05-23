


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">


    <title>Ana Sayfa</title>
</head>

<body>
    <nav class="navbar bg-dark navbar-expand-sm navbar-dark">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="index.html" class="nav-link active">Hakkında</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link active">Özgeçmiş</a>
                </li>
                <li class="nav-item">
                    <a href="sehrimiz.html" class="nav-link active">Şehrim</a>
                </li>
                <li class="nav-item">
                    <a href="mirasimiz.html" class="nav-link active">Mirasımız</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link active">İlgi Alanlarım</a>
                </li>
                <li class="nav-item">
                    <a href="login.html" class="nav-link active">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class='aciklama'><h3>
    <?php 
            $name = $_POST['ad'];
            $telefon = $_POST['telefon'];
            $email = $_POST['eposta'];
            $message = $_POST['message'];
            echo "Hoşgeldin ". $name .'<br>'. "Telefon Numaranız : " . $telefon .'<br>'."Mesajınız : ". $message.'<br>'. " tarafımıza iletildi.";
        ?>
    </h3></div> 


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
    integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
    crossorigin="anonymous"></script>
</body>
</html>
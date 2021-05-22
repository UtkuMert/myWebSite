<?php 
            $name = $_POST['name'];
            $telefon = $_POST['telefon'];
            $email = $_POST['email'];
            $message = $_POST['message'];
            echo "Hoşgeldin ". $name .'<br>'. "Telefon Numaranız : " . $telefon .'<br>'."Mesajınız : ". $message.'<br>'. " tarafımıza iletilmiştir.";
        ?>
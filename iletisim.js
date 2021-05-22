function Kontrol() {
            
    var mailKontrol = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    var isim    = document.getElementById("form_name").value;
    var soyisim = document.getElementById("form_lastname").value;
    var mail    = document.getElementById("form_email").value;
    var numara  = document.getElementById("form_phone").value;
    var mesaj   = document.getElementById("form_message").value;
   
    if (isim == "") {
        alert("Lütfen Adınızı Giriniz!");
        return false;
    }

    if (soyisim == "") {
        alert("Lütfen Soyadınızı Giriniz!");
        return false;
    }

    if (mailKontrol.test(mail) == false) {
        alert('Lütfen E-Posta Adresinizi Kontrol Ediniz!');
        return false;
    }

    if (isNaN(numara) == true || numara.length != 10) {
        alert('Hatalı Telefon Numarası Girişi Yaptınız.');
        return false;
    }

    if (mesaj == "") {
        alert("Lütfen Mesaj Giriniz!");
        return false;
    }

    return true;
}

function Temizle(form)
{
    form.reset();
}
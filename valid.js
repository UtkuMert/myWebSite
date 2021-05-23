var kullaniciAdi = "g171210051@gmail.com";
var password = "g171210051"

function Validation(){

    var isimKontrol = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    var isim = document.forms["login-form"]["username"].value;
    var sifre= document.forms["login-form"]["password"].value;

    console.log(isim);
    console.log(sifre);

    if(isim == kullaniciAdi && sifre == password){
        return true;
    }

    else if(isimKontrol.test(isim) == false) {
         
        alert('Lütfen Kullanıcı Adı Formatınızı Kontrol Edin.');
        return false;
        
    }

    else if(isim == null || isim == "")
    {
        alert("Lütfen isim kısmını boş bırakmayınız.");
        return false;
    }

    else if(sifre == null || sifre == "")
    {
        alert("Lütfen şifre kısmını boş bırakmayınız.");
        return false;
    }
    
    else{
        alert("Kullanıcı adı veya şifre hatalı");
        return false;
    }
}
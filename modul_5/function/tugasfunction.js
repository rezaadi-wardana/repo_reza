function runn() {
    let namaa = document.getElementById("nama").value;
    let noabsen = parseInt( document.getElementById("angka").value);
    let kelompok= "";
        switch(noabsen){
            case 1:
            case 8 :
            case 13 :
            case 7 :
                kelompok = "5";
                break;
            case 12 :
            case 2 :
            case 21:
                kelompok = "4";
                break;
            case 19:
            case 16 :
            case 10:
                kelompok = "3";
                break;
            case 18:
            case 4 :
            case 9 :
                kelompok = "2";
                break;
            case 11:
            case 20 :
            case 17:
                kelompok = "1";
                break;
            case 14: 
            case 5 : 
            case 3 :
            case 15:
                kelompok = "mandiri";
                break;
            default:
                kelompok = "tidak valid"
                
        }
        
        document.getElementById("hasil").innerHTML = "Nama :" + namaa + "<br>Kelompok : " + kelompok;
    
   
    let anggota = "";
    if(kelompok == 5){
        anggota = "Reza,Teguh,Roykhan,Bowo";
    }else if(kelompok == 4){
        anggota = "Rozin,Tegar,Lana";
    }
    else if(kelompok == 3){
        anggota = "Zainal,Winda,Salsa";
    }
    else if(kelompok == 2){
        anggota = "Zaenur,Niken,Sabila";
    }
    else if(kelompok == 1){
        anggota = "Tarissa,Zakaria,Yuli";
    }
    else if(kelompok == "mandiri"){
        anggota = "Nizar,Ulya,Selfi,Nadia";
    }else{
        anggota = "tidak valid"
    }
    document.getElementById("hasil").innerHTML = "Nama :" + namaa + "<br>Kelompok : " + kelompok + "<br>Anggota :" + anggota;

}
let kelas = "Selasa";
let nomor;

switch (kelas) {
    case "Senin" :
        nomor = "R2.1";
        break;
    
    case "Selasa" :
        nomor = "Lab 1";
        break;
    
    case "Rabu" :
        nomor = "R2.2";
        break;
    
    case "Kamis" :
        nomor = "R2.5";
        break;
    
    case "Jum'at" :
        nomor = "R2.3";
        break;
    
    case "Sabtu" :
        nomor = "Rebahan";
        break;
    
    case "Minggu" :
        nomor = "jalan-Jalan";
        break;
    default:
        nomor = 'Maaf masukan Anda SVGAnimatedLength';
}
console.log(nomor);
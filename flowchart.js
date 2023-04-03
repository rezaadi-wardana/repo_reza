//flowchhart  

document.write('PROGRAM FLOWCHART MENENTUKAN KELULUSAN');

//Input
document.write('<br>Memasukkan rata-rata niliai' );
let value = 80;
document.write('<br>Nilai yang dimasukkan andalah ' + value);

//Proses
if ( value > 75){
    var outputt ='<br>Hasil : Anda Lulus';
}else{
    var outputt= '<br>Hasil : Maaf Anda Tidak Lulus';
}

//Output
document.write(outputt);

let jeneng = [];
let tahun = [];
let nowa = [];

function tampilke() {
    var uotput = document.getElementById('otput');
    var hasil = " ";

    for (var i = 0; i < jeneng.length; i++) {
        hasil += "<br>"
        hasil += "<p>Nama : " + jeneng[i] +"</p>";
        hasil += "<p>Tahun Lahir : " + tahun[i] +"</p>";
        hasil += "<p>NO WA: " + nowa[i] +"</p>";
        hasil += "<br>"
        hasil += "<hr>"
    }
    uotput.innerHTML = hasil;
}

function tambah() {
    var nam = prompt("Nama Mahasiswa : ");
    var tah = prompt("Tahun Lahir : ");
    var no = prompt("Nomor WA : ")

   jeneng.push(nam);
   tahun.push(tah);
   nowa.push(no);

    tampilke();
}
function unshift() {
    var nam = prompt("Nama Mahasiswa : ");
    var tah = prompt("Tahun Lahir : ");
    var no = prompt("Nomor WA : ")

   jeneng.unshift(nam);
   tahun.unshift(tah);
   nowa.unshift(no);

    tampilke();
}
function delet() {
    var u = parseInt(prompt("Index yang dihapus"));

    if(u >= 0 && u < jeneng.length) {
         jeneng.splice(u,1);
         tahun.splice(u,1);
         nowa.splice(u,1);
      
        tampilke();
    } else {
        alert("coba lagi");
    }
}



//DATA ARRAY
let dataMahasiswa = [];
let mahasiswa1 = ["Muhammad Reza",2004,089516628719];
let mahasiswa2 = ["Reza Adi",2003,08982194477];
let mahasiswa3 = ["Adi Wardana",2004,089615645470];
let mahasiswa4 = ["Reza Wardana",2024,089123456789];
dataMahasiswa.push(mahasiswa1,mahasiswa2,mahasiswa3,mahasiswa4);

const keterangan = ["Nama Mahasiswa","Tahun Lahir", "Nomor Handphone"];
dataMahasiswa.unshift(keterangan);

dataMahasiswa.pop(mahasiswa4);//Belum Lahir

for(const arrayItem of dataMahasiswa){
    console.log(arrayItem+"<br>");
}

dataObject = {};
document.write("<table>");
dataMahasiswa.forEach(function(baris,indeks){
    document.write( "<tr>");
         document.write( "<td>" + indeks + "</td>");
         document.write( "<td>" + baris[0] + "</td>");
         document.write( "<td>"+ baris[1] + "</td>");
         document.write( "<td>"+ baris[2]+ "</td>");
    document.write( "</tr>");
});
document.write("</table>");

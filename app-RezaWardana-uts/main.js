const arraySatu = [];

daftar.onsubmit = async (e) => {
    e.preventDefault();

    let data = new FormData(daftar);

    let object = {}
    data.forEach((val,key) => {
        object[key] = val 
        const rata = (Number(object['uas']) + Number(object['uts']) + Number(object['tugas'])) / 3;
        let huruf;
        let keterangan;
        if (rata >= 80){
            huruf = 'A';
            keterangan = 'Lulus';
        }
        else if (rata >= 70){
            huruf = 'B';
            keterangan = 'Lulus';
        }
        else if (rata >= 60){
            huruf = 'C';
            keterangan = 'Lulus';
        }
        else if (rata >= 50){
            huruf = 'D';
            keterangan = 'Tidak Lulus';
        }
        else if (rata >= 50){
            huruf = 'E';
            keterangan = 'Tidak Lulus';
        }
        object['rata'] = rata;
        object['huruf'] = huruf;
        object['keterangan'] = keterangan;
    });
    arraySatu.push(object);

    let outputHTML = "";
    outputHTML += "<table>";
    outputHTML += "<tr>";
    outputHTML += "<th>No.</th>"
    outputHTML += "<th>NIM</th>"
    outputHTML += "<th>Nama.</th>"
    outputHTML += "<th>Rata</th>"
    outputHTML += "<th>Huruf</th>"
    outputHTML += "<th>keterangan</th>"
    outputHTML += "</tr>"

    let no = 1;
    arraySatu.forEach((val) => {
        outputHTML += "<tr>";
        outputHTML += "<td>"+ no++ + "</td>";
        outputHTML += "<td>"+ val.nim + "</td>";
        outputHTML += "<td>"+ val.nama + "</td>";
        outputHTML += "<td>"+ val.rata + "</td>";
        outputHTML += "<td>"+ val.huruf + "</td>";
        outputHTML += "<td>"+ val.keterangan + "</td>";
        outputHTML += "</tr>";

        
    });
    outputHTML += "</table>"

    document.getElementById("tdaftar").innerHTML = outputHTML;
}

// var btn_nama = document.getElementById("nama");
// let btn_nim = document.getElementById("nim");
// let btn_matkul = document.getElementById("matkul");
// let btn_nilai = document.getElementById("nilai");


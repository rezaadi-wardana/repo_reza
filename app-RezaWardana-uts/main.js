const arraySatu = [];

daftar.onsubmit = async (e) => {
    e.preventDefault();

    let data = new FormData(daftar);

    let object = {}
    
    data.forEach((val,key) => {
        object[key] = val 
        const nilaiAkhir = (Number(object['nilaiAkhir']));
        let huruf;
        let indeks;
        let keterangan;
        if (nilaiAkhir >= 85 && nilaiAkhir <= 100){
            huruf = 'A';
            indeks = 4.00;
            keterangan = 'Lulus';
        }
        else if (nilaiAkhir >= 79 && nilaiAkhir <85){
            huruf = 'A-';
            indeks = 3.67;
            keterangan = 'Lulus';
        }
        else if (nilaiAkhir >= 74 && nilaiAkhir <79){
            huruf = 'B+';
            indeks = 3.33;
            keterangan = 'Lulus';
        }
        else if (nilaiAkhir >= 69 && nilaiAkhir <74){
            huruf = 'B';
            indeks = 3.00;
            keterangan = 'Lulus';
        }
        else if (nilaiAkhir >= 64 && nilaiAkhir <69){
            huruf = 'B-';
            indeks = 2.67;
            keterangan = 'Lulus';
        }
        else if (nilaiAkhir >= 59 && nilaiAkhir <64){
            huruf = 'C+';
            indeks = 2.33;
            keterangan = 'Lulus';
        }
        else if (nilaiAkhir >= 54 && nilaiAkhir <59){
            huruf = 'C';
            indeks = 2.00;
            keterangan = 'Lulus';
        }
        else if (nilaiAkhir >= 41 && nilaiAkhir <54){
            huruf = 'D';
            indeks = 1.00;
            keterangan = 'Tidak Lulus';
        }
        else if (nilaiAkhir >= 0 && nilaiAkhir <41){
            huruf = 'E';
            indeks = 0.00;
            keterangan = 'Tidak Lulus';
        }
        object['nilaiAkhir'] = nilaiAkhir;
        object['huruf'] = huruf;
        object['indeks'] = indeks;
        object['keterangan'] = keterangan;
    });

    arraySatu.push(object);

    let outputHTML = "";
    outputHTML += "<table>";
    outputHTML += "<tr>";
    outputHTML += "<th>No.</th>"
    outputHTML += "<th>NIM</th>"
    outputHTML += "<th>Nama</th>"
    outputHTML += "<th>Matkul</th>"
    outputHTML += "<th>Nilai Angka</th>"
    outputHTML += "<th>Huruf</th>"
    outputHTML += "<th>Indeks</th>"
    outputHTML += "<th>Keterangan</th>"
    outputHTML += "</tr>"

    let no = 1;
    arraySatu.forEach((val) => {
        outputHTML += "<tr>";
        outputHTML += "<td>"+ no++ + "</td>";
        outputHTML += "<td>"+ val.nim + "</td>";
        outputHTML += "<td>"+ val.name + "</td>";
        outputHTML += "<td>"+ val.matkul + "</td>";
        outputHTML += "<td>"+ val.nilaiAkhir + "</td>";
        outputHTML += "<td>"+ val.huruf + "</td>";
        outputHTML += "<td>"+ val.indeks + "</td>";
        outputHTML += "<td>"+ val.keterangan + "</td>";
        outputHTML += "</tr>";
    });
    
    outputHTML += "</table>"
    document.getElementById("tdaftar").innerHTML = outputHTML;
    
    
    
}


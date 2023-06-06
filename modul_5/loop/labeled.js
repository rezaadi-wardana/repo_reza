let keterangan = " ";
let induex = 0;
loop:
for (induex; induex<5; induex++){
if (induex===1){
continue loop;
}
keterangan = keterangan + induex;
console.log(keterangan);
document.write("<br>"+keterangan);
}
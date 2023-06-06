
// OPYIONAL FUNCTION
function hitungratarata(nilai_a, nilai_b, nilai_c ) {
    
    let total = nilai_a + nilai_b;
    let hitung = 1;
    hitung++;
    if(typeof nilai_c !== "undefined"){
        total += nilai_c;
        hitung++;
    }
    const ratarata = total/hitung;
    return "The Rata-Rata is => " +  ratarata;
    
}
const hasile = hitungratarata(20,10);
document.write("<br><br>" + hasile);
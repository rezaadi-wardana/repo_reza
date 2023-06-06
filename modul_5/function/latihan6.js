// REST PARAMETER
function getrata(... paramet)  {
    let total = 0, count = 0, index =0;
    for (index; index < paramet.length; index++) {
        total += paramet[index];
        count++;
    }
    const rataa = total/count;
    return "The Rata Rata is "+ rataa;
}
const res = getrata(3, 4, 4,4, 24,4 );
document.write(res);
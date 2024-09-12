var chon = document.getElementById("searchTxt").value;

var lastchanged = 1; // Apenas em caso de alguém reclamar de algo
function Testy(){
    if(lastchanged == 1){Testytest();}
    if(lastchanged == 2){Testytest2();}
}

function Testytest() {
    var chon = document.getElementById("searchTxt").value;
    var descBox = document.getElementById("testrara");

    lastchanged = 1;

    if(chon < 5){
        document.getElementById("searchTxt").value = 5;
        chon = 5;
    }

    var joules = 0
    if(document.getElementById("anime").checked == true){
        if(chon < 10) {joules = 0.000001195*38.4170784359**chon} 
        else if(chon < 180) {joules = 532649904.7301444 * 1.317097671 ** chon} 
        else if(chon < 1500) {joules = (4.4156936*10**29) * 1.007868277 ** chon} 
        else if(chon < 8000) {joules = (1.15188825*10**34) * 1.001058601 ** chon} 
        else if(chon < 32000) {joules = 6.8285950416667*10**33*(chon)+1.5866666667413*10**32} 
        else if(chon < 530000) {joules = (1.1292941855671602182134549239*10**38)*1.00002062810551633073473583223**chon} 
        else {joules = 1.1928333444838*10**37*chon-1.6725764367096*10**37}
    }
    else{
        if(chon < 10) {joules = 0.000001195*38.4170784359**chon} 
        else if(chon < 180) {joules = 532649904.7301444*1.317097671**chon} 
        else if(chon < 8000) {joules = (1.62441517*10**30)*1.000601175**chon} 
        else if(chon < 180000) {joules = 1445930232558139657815064576*chon+187392558139534887408670882136064} 
        else if(chon < 530000) {joules = (8.7400757*10**28)*1.000047453**chon} 
        else {joules = 13785997667759417203128790455156736*chon+349836087509182289609426021314985984}
    }

    TierManager(joules);

    document.getElementById("resultTxt").value = joules.toExponential(3);
    if(chon > 10000000000000000000){
        document.getElementById("searchTxt").value = chon.toExponential(3);
    }
}

function TierManager(numb){ 
    var tier = "Nothing Level";
    numb = Math.ceil(numb);
    if(numb < 60) {tier = "Below Average Human Level"} 
    else if(numb < 106) {tier = "Human Level"} 
    else if(numb < 300) {tier = "Athlete Level"} 
    else if(numb < 15000) {tier = "Street Level"} 
    else if(numb < 2.092*10**7) {tier = "Wall Level"} 
    // continua o resto dos níveis...
    document.getElementById("tierTxt").value = tier;
}

function Testytest2() {
    var joules = document.getElementById("resultTxt").value;

    lastchanged = 2;
    joules = Number(joules);

    if(joules < 100){
        document.getElementById("resultTxt").value = 100;
        joules = 100;
        joules = Number(joules);
    }

    if(document.getElementById("anime").checked == true){
        if(joules < 8.368*10**9){chon = Math.log(joules / 0.000001195) / Math.log(38.4170784359)} 
        // continua o resto do cálculo...
    }

    document.getElementById("resultTxt").value = joules.toExponential(3);
}

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
    else if(numb < 1.046*10**9) {tier = "Small Building Level"} 
    else if(numb < 8.368*10**9) {tier = "Building Level"} 
    else if(numb < 4.6024*10**10) {tier = "Large Building Level"} 
    else if(numb < 4.184*10**11) {tier = "City Block Level"} 
    else if(numb < 4.184*10**12) {tier = "Multi-City Block Level"} 
    else if(numb < 2.42672*10**13) {tier = "Small Town Level"} 
    else if(numb < 4.184*10**14) {tier = "Town Level"} 
    else if(numb < 4.184*10**15) {tier = "Large Town Level"} 
    else if(numb < 2.63592*10**16) {tier = "Small City Level"} 
    else if(numb < 4.184*10**17) {tier = "City Level"} 
    else if(numb < 4.184*10**18) {tier = "Mountain Level"} 
    else if(numb < 1.79912*10**19) {tier = "Large Mountain Level"} 
    else if(numb < 4.184*10**20) {tier = "Island Level"} 
    else if(numb < 4.184*10**21) {tier = "Large Island Level"} 
    else if(numb < 2.9288*10**22) {tier = "Small Country Level"} 
    else if(numb < 4.184*10**23) {tier = "Country Level"} 
    else if(numb < 3.17984*10**24) {tier = "Large Country Level"} 
    else if(numb < 1.855604*10**25) {tier = "Continent Level"} 
    else if(numb < 1.24*10**27) {tier = "Multi-Continent Level"} 
    else if(numb < 1.81*10**30) {tier = "Moon Level"} 
    else if(numb < 2.487*10**32) {tier = "Small Planet Level"} 
    else if(numb < 1.13*10**34) {tier = "Planet Level"} 
    else if(numb < 6.906*10**37) {tier = "Large Planet Level"} 
    else if(numb < 3.139*10**40) {tier = "Dwarf Star Level"} 
    else if(numb < 5.639*10**41) {tier = "Small Star Level"} 
    else if(numb < 3.182*10**42) {tier = "Star Level"} 
    else if(numb < 2.277*10**45) {tier = "Large Star Level"} 
    else if(numb < 2.008*10**57) {tier = "Solar System Level"} 
    else if(numb < 1.053*10**66) {tier = "Multi-Solar System Level"} 
    else if(numb < 8.593*10**68) {tier = "Galaxy Level"} 
    else if(numb < 2.825*10**92) {tier = "Multi-Galaxy Level"} 
    else {tier = "Universe Level"}
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
        else if(joules < 1.810*10**30){chon = Math.log(joules / 532649904.7301444) / Math.log(1.317097671)} 
        else if(joules < 5.631997*10**34){chon = Math.log(joules / (4.4156936*10**29)) / Math.log(1.007868277)} 
        else if(joules < 5.462892*10**37){chon = Math.log(joules / (1.15188825*10**34)) / Math.log(1.001058601)} 
        else if(joules < 2.185152*10**38){chon = (joules-10**32*1.5866666667413)/(10**33*6.8285950416667)} 
        else if(joules < 6.322000*10**42){chon = Math.log(joules / (1.1292941855671602182134549239*10**38)) / Math.log(1.00002062810551633073473583223)} 
        else {chon = (joules + 10**37*1.6725764367096)/(10**37*1.1928333444838)}
    }
    else{
        if(joules < 8.368*10**9){chon = Math.log(joules / 0.000001195) / Math.log(38.4170784359)} 
        else if(joules < 1.810*10**30){chon = Math.log(joules / 532649904.7301444) / Math.log(1.317097671)} 
        else if(joules < 1.000000*10**31){chon = Math.log(joules / (1.62441517*10**30)) / Math.log(1.000601175)} 
        else if(joules < 1.000000*10**34){chon = (joules-187392558139534887408670882136064)/(1445930232558139657815064576)} 
        else if(joules < 6.322000*10**42){chon = Math.log(joules / (8.7400757*10**28)) / Math.log(1.000047453)} 
        else {chon = (joules+349836087509182289609426021314985984)/(13785997667759417203128790455156736)}
    }

    document.getElementById("searchTxt").value = Math.ceil(chon);
    TierManager(joules);
}

var pathRS = new Path2D();
var pathSC = new Path2D();
var pathPR = new Path2D();
var ctx = ""
var canvas = ""

function drawRS(execEvent) {
    pathRS.moveTo(3.2 * 100, 5.0 * 100);
    pathRS.lineTo(3.6 * 100, 5.1 * 100);
    pathRS.lineTo(3.8 * 100, 5.3 * 100);
    pathRS.lineTo(3.9 * 100, 5.4 * 100);
    pathRS.lineTo(3.7 * 100, 5.9 * 100);
    pathRS.lineTo(3.6 * 100, 5.8 * 100);
    pathRS.lineTo(3.7 * 100, 5.6 * 100);
    pathRS.lineTo(3.3 * 100, 6.1 * 100);
    pathRS.lineTo(3.1 * 100, 5.8 * 100);
    pathRS.lineTo(2.9 * 100, 5.8 * 100);
    pathRS.lineTo(2.7 * 100, 5.6 * 100);
    pathRS.lineTo(3.2 * 100, 5.0 * 100);
    pathRS.closePath();
    if (execEvent == "onLoad") {
        ctx.fillStyle = "#FF9A00";
        ctx.fill(pathRS);
        ctx.strokeStyle = "#003300";
    } else if (execEvent == "mouseOver")
        ctx.strokeStyle = "#C0C0C0";
    else if (execEvent == "mouseLeft")
        ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke(pathRS);
}

function drawSC(execEvent) {
    pathSC.moveTo(3.9 * 100, 5.4 * 100);
    pathSC.lineTo(4.1 * 100, 5.3 * 100);
    pathSC.lineTo(4.1 * 100, 4.9 * 100);
    pathSC.lineTo(3.8 * 100, 4.9 * 100);
    pathSC.lineTo(3.6 * 100, 5.0 * 100);
    pathSC.lineTo(3.2 * 100, 4.9 * 100);
    pathSC.lineTo(3.2 * 100, 5.0 * 100);
    pathSC.lineTo(3.6 * 100, 5.1 * 100);
    pathSC.lineTo(3.8 * 100, 5.3 * 100);
    pathSC.lineTo(3.9 * 100, 5.4 * 100);
    pathSC.closePath();
    if (execEvent == "onLoad") {
        ctx.fillStyle = "#FF9A00";
        ctx.fill(pathSC);
        ctx.strokeStyle = "#003300";
    } else if (execEvent == "mouseOver")
        ctx.strokeStyle = "#C0C0C0";
    else if (execEvent == "mouseLeft")
        ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke(pathSC);
}

//PARANA
function drawPR(execEvent) {
    pathPR.moveTo(3.2 * 100, 4.9 * 100);
    pathPR.lineTo(3.1 * 100, 4.8 * 100);
    pathPR.lineTo(3.2 * 100, 4.6 * 100);
    pathPR.lineTo(3.4 * 100, 4.36 * 100);
    pathPR.lineTo(3.9 * 100, 4.5 * 100);
    pathPR.lineTo(4.0 * 100, 4.7 * 100);
    pathPR.lineTo(4.2 * 100, 4.7 * 100);
    pathPR.lineTo(4.1 * 100, 4.9 * 100);
    pathPR.lineTo(3.8 * 100, 4.9 * 100);
    pathPR.lineTo(3.6 * 100, 5.0 * 100);
    pathPR.lineTo(3.2 * 100, 4.9 * 100);
    pathPR.closePath();
    if (execEvent == "onLoad") {
        ctx.fillStyle = "#FF9A00";
        ctx.fill(pathPR);
        ctx.strokeStyle = "#003300";
    } else if (execEvent == "mouseOver")
        ctx.strokeStyle = "#C0C0C0";
    else if (execEvent == "mouseLeft")
        ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke(pathPR);
}

//SAO PAULO
function drawSP() {
    ctx.beginPath();
    ctx.moveTo(4.2 * 100, 4.7 * 100);
    ctx.lineTo(4.7 * 100, 4.4 * 100);
    ctx.lineTo(4.7 * 100, 4.3 * 100);
    ctx.lineTo(4.4 * 100, 4.4 * 100);
    ctx.lineTo(4.4 * 100, 4.2 * 100);
    ctx.lineTo(4.3 * 100, 4.0 * 100);
    ctx.lineTo(4.1 * 100, 4.0 * 100);
    ctx.lineTo(3.7 * 100, 4.0 * 100);
    ctx.lineTo(3.4 * 100, 4.36 * 100);
    ctx.lineTo(3.9 * 100, 4.5 * 100);
    ctx.lineTo(4.0 * 100, 4.7 * 100);
    ctx.lineTo(4.2 * 100, 4.7 * 100);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//MINAS GERAIS
function drawMG() {
    ctx.beginPath();
    ctx.moveTo(4.4 * 100, 4.4 * 100);
    ctx.lineTo(4.7 * 100, 4.3 * 100);
    ctx.lineTo(4.8 * 100, 4.3 * 100);
    ctx.lineTo(5.0 * 100, 4.2 * 100);
    ctx.lineTo(5.2 * 100, 4.0 * 100);
    ctx.lineTo(5.4 * 100, 3.7 * 100);
    ctx.lineTo(5.4 * 100, 3.6 * 100);
    ctx.lineTo(5.4 * 100, 3.5 * 100);
    ctx.lineTo(5.5 * 100, 3.4 * 100);
    ctx.lineTo(5.2 * 100, 3.4 * 100);
    ctx.lineTo(5.1 * 100, 3.3 * 100);
    ctx.lineTo(5.0 * 100, 3.2 * 100);
    ctx.lineTo(4.8 * 100, 3.1 * 100);
    ctx.lineTo(4.7 * 100, 3.1 * 100);
    ctx.lineTo(4.5 * 100, 3.3 * 100);
    ctx.lineTo(4.4 * 100, 3.3 * 100);
    ctx.lineTo(4.3 * 100, 3.4 * 100);
    ctx.lineTo(4.3 * 100, 3.7 * 100);
    ctx.lineTo(4.1 * 100, 3.8 * 100);
    ctx.lineTo(3.8 * 100, 3.8 * 100);
    ctx.lineTo(3.7 * 100, 3.9 * 100);
    ctx.lineTo(3.7 * 100, 4.0 * 100);
    ctx.lineTo(4.1 * 100, 4.0 * 100);
    ctx.lineTo(4.3 * 100, 4.0 * 100);
    ctx.lineTo(4.4 * 100, 4.2 * 100);
    ctx.lineTo(4.4 * 100, 4.4 * 100);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//RIO DE JANEIRO
function drawRJ() {
    ctx.beginPath();
    ctx.moveTo(4.7 * 100, 4.3 * 100);
    ctx.lineTo(4.7 * 100, 4.4 * 100);
    ctx.lineTo(5.1 * 100, 4.4 * 100);
    ctx.lineTo(5.3 * 100, 4.1 * 100);
    ctx.lineTo(5.2 * 100, 4.0 * 100);
    ctx.lineTo(5.0 * 100, 4.2 * 100);
    ctx.lineTo(4.8 * 100, 4.3 * 100);
    ctx.lineTo(4.7 * 100, 4.3 * 100);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//ESPIRITO SANTO
function drawES() {
    ctx.beginPath();
    ctx.moveTo(5.3 * 100, 4.1 * 100);
    ctx.lineTo(5.5 * 100, 4.0 * 100);
    ctx.lineTo(5.5 * 100, 3.8 * 100);
    ctx.lineTo(5.4 * 100, 3.7 * 100);
    ctx.lineTo(5.2 * 100, 4.0 * 100);
    ctx.lineTo(5.3 * 100, 4.1 * 100);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//MATO GROSSO DO SUL
function drawMS() {
    ctx.beginPath();
    ctx.moveTo(2.7 * 100, 3.7 * 100);
    ctx.lineTo(2.9 * 100, 3.5 * 100);
    ctx.lineTo(3.1 * 100, 3.6 * 100);
    ctx.lineTo(3.2 * 100, 3.6 * 100);
    ctx.lineTo(3.7 * 100, 3.9 * 100);
    ctx.lineTo(3.7 * 100, 4.0 * 100);
    ctx.lineTo(3.2 * 100, 4.6 * 100);
    ctx.lineTo(3.0 * 100, 4.6 * 100);
    ctx.lineTo(2.9 * 100, 4.4 * 100);
    ctx.lineTo(2.6 * 100, 4.3 * 100);
    ctx.lineTo(2.7 * 100, 3.7 * 100);
    ctx.fillStyle = "#FFD500";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//GOIAS
function drawGO() {
    ctx.beginPath();
    ctx.moveTo(3.2 * 100, 3.6 * 100);
    ctx.lineTo(3.7 * 100, 3.9 * 100);
    ctx.lineTo(3.8 * 100, 3.8 * 100);
    ctx.lineTo(4.1 * 100, 3.8 * 100);
    ctx.lineTo(4.3 * 100, 3.7 * 100);
    ctx.lineTo(4.3 * 100, 3.4 * 100);
    ctx.lineTo(4.4 * 100, 3.3 * 100);
    ctx.lineTo(4.5 * 100, 3.3 * 100);
    ctx.lineTo(4.5 * 100, 3.2 * 100);
    ctx.lineTo(4.5 * 100, 3.0 * 100);
    ctx.lineTo(4.4 * 100, 2.8 * 100);
    ctx.lineTo(4.2 * 100, 2.9 * 100);
    ctx.lineTo(4.1 * 100, 2.9 * 100);
    ctx.lineTo(4.0 * 100, 2.8 * 100);
    ctx.lineTo(3.9 * 100, 2.9 * 100);
    ctx.lineTo(3.7 * 100, 2.8 * 100);
    ctx.lineTo(3.7 * 100, 3.1 * 100);
    ctx.lineTo(3.6 * 100, 3.3 * 100);
    ctx.lineTo(3.2 * 100, 3.6 * 100);
    ctx.fillStyle = "#FFD500";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//MATO GROSSO
function drawMT() {
    ctx.beginPath();
    ctx.moveTo(3.2 * 100, 3.6 * 100);
    ctx.lineTo(3.6 * 100, 3.3 * 100);
    ctx.lineTo(3.7 * 100, 3.1 * 100);
    ctx.lineTo(3.7 * 100, 2.8 * 100);
    ctx.lineTo(3.8 * 100, 2.4 * 100);
    ctx.lineTo(2.7 * 100, 2.3 * 100);
    ctx.lineTo(2.7 * 100, 2.2 * 100);
    ctx.lineTo(2.1 * 100, 2.2 * 100);
    ctx.lineTo(2.1 * 100, 2.5 * 100);
    ctx.lineTo(2.2 * 100, 2.6 * 100);
    ctx.lineTo(2.2 * 100, 2.6 * 100);
    ctx.lineTo(2.3 * 100, 2.8 * 100);
    ctx.lineTo(2.2 * 100, 3.0 * 100);
    ctx.lineTo(2.2 * 100, 3.4 * 100);
    ctx.lineTo(2.5 * 100, 3.4 * 100);
    ctx.lineTo(2.7 * 100, 3.7 * 100);
    ctx.lineTo(2.9 * 100, 3.5 * 100);
    ctx.lineTo(3.1 * 100, 3.6 * 100);
    ctx.lineTo(3.2 * 100, 3.6 * 100);
    ctx.fillStyle = "#FFD500";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//BAHIA
function drawBA() {
    ctx.beginPath();
    ctx.moveTo(5.9 * 100, 2.7 * 100);
    ctx.lineTo(5.8 * 100, 2.9 * 100);
    ctx.lineTo(5.6 * 100, 2.9 * 100);
    ctx.lineTo(5.6 * 100, 3.1 * 100);
    ctx.lineTo(5.5 * 100, 3.8 * 100);
    ctx.lineTo(5.4 * 100, 3.7 * 100);
    ctx.lineTo(5.4 * 100, 3.6 * 100);
    ctx.lineTo(5.4 * 100, 3.5 * 100);
    ctx.lineTo(5.5 * 100, 3.4 * 100);
    ctx.lineTo(5.2 * 100, 3.4 * 100);
    ctx.lineTo(5.1 * 100, 3.3 * 100);
    ctx.lineTo(5.0 * 100, 3.2 * 100);
    ctx.lineTo(4.8 * 100, 3.1 * 100);
    ctx.lineTo(4.7 * 100, 3.1 * 100);
    ctx.lineTo(4.5 * 100, 3.3 * 100);
    ctx.lineTo(4.5 * 100, 2.5 * 100);
    ctx.lineTo(4.6 * 100, 2.6 * 100);
    ctx.lineTo(4.7 * 100, 2.5 * 100);
    ctx.lineTo(4.8 * 100, 2.4 * 100);
    ctx.lineTo(4.9 * 100, 2.3 * 100);
    ctx.lineTo(5.0 * 100, 2.3 * 100);
    ctx.lineTo(5.2 * 100, 2.3 * 100);
    ctx.lineTo(5.3 * 100, 2.4 * 100);
    ctx.lineTo(5.5 * 100, 2.3 * 100);
    ctx.lineTo(5.8 * 100, 2.4 * 100);
    ctx.lineTo(5.8 * 100, 2.5 * 100);
    ctx.lineTo(5.7 * 100, 2.65 * 100);
    ctx.lineTo(5.9 * 100, 2.7 * 100);
    ctx.fillStyle = "#0099FF";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//SERGIPE
function drawSE() {
    ctx.beginPath();
    ctx.moveTo(5.9 * 100, 2.7 * 100);
    ctx.lineTo(6.0 * 100, 2.5 * 100);
    ctx.lineTo(5.8 * 100, 2.4 * 100);
    ctx.lineTo(5.8 * 100, 2.5 * 100);
    ctx.lineTo(5.7 * 100, 2.65 * 100);
    ctx.lineTo(5.9 * 100, 2.7 * 100);
    ctx.fillStyle = "#0099FF";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//ALAGOAS
function drawAL() {
    ctx.beginPath();
    ctx.moveTo(5.8 * 100, 2.4 * 100);
    ctx.lineTo(5.82 * 100, 2.3 * 100);
    ctx.lineTo(5.9 * 100, 2.35 * 100);
    ctx.lineTo(6.2 * 100, 2.3 * 100);
    ctx.lineTo(6.3 * 100, 2.1 * 100);
    ctx.lineTo(6.0 * 100, 2.1 * 100);
    ctx.lineTo(5.9 * 100, 2.2 * 100);
    ctx.lineTo(5.9 * 100, 2.1 * 100);
    ctx.lineTo(5.8 * 100, 2.1 * 100);
    ctx.lineTo(5.6 * 100, 2.2 * 100);
    ctx.lineTo(5.5 * 100, 2.1 * 100);
    ctx.lineTo(5.3 * 100, 2.1 * 100);
    ctx.lineTo(5.2 * 100, 2.3 * 100);
    ctx.lineTo(5.3 * 100, 2.4 * 100);
    ctx.lineTo(5.5 * 100, 2.3 * 100);
    ctx.lineTo(5.8 * 100, 2.4 * 100);
    ctx.fillStyle = "#0099FF";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//PARAÍBA
function drawPB() {
    ctx.beginPath();
    ctx.moveTo(5.6 * 100, 2.2 * 100);
    ctx.lineTo(5.8 * 100, 2.1 * 100);
    ctx.lineTo(5.9 * 100, 2.1 * 100);
    ctx.lineTo(5.9 * 100, 2.2 * 100);
    ctx.lineTo(6.0 * 100, 2.1 * 100);
    ctx.lineTo(6.3 * 100, 2.1 * 100);
    ctx.lineTo(6.2 * 100, 1.9 * 100);
    ctx.lineTo(6.0 * 100, 1.9 * 100);
    ctx.lineTo(5.9 * 100, 2.0 * 100);
    ctx.lineTo(5.8 * 100, 1.9 * 100);
    ctx.lineTo(5.6 * 100, 1.9 * 100);
    ctx.lineTo(5.6 * 100, 2.2 * 100);
    ctx.fillStyle = "#0099FF";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}
//PERNAMBUCO
function drawPE() {
    ctx.beginPath();
    ctx.moveTo(5.8 * 100, 2.4 * 100);
    ctx.lineTo(5.82 * 100, 2.3 * 100);
    ctx.lineTo(5.9 * 100, 2.35 * 100);
    ctx.lineTo(6.2 * 100, 2.3 * 100);
    ctx.lineTo(6.0 * 100, 2.5 * 100);
    ctx.lineTo(5.8 * 100, 2.4 * 100);
    ctx.fillStyle = "#0099FF";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//AMAZONAS
function drawAM() {
    ctx.beginPath();
    ctx.moveTo(1.6 * 100, 0.6 * 100);
    ctx.lineTo(1.8 * 100, 0.7 * 100);
    ctx.lineTo(1.9 * 100, 0.8 * 100);
    ctx.lineTo(1.9 * 100, 1.0 * 100);
    ctx.lineTo(2.0 * 100, 1.1 * 100);
    ctx.lineTo(2.2 * 100, 1.0 * 100);
    ctx.lineTo(2.4 * 100, 1.0 * 100);
    ctx.lineTo(2.5 * 100, 1.0 * 100);
    ctx.lineTo(2.6 * 100, 1.2 * 100);
    ctx.lineTo(2.7 * 100, 1.2 * 100);
    ctx.lineTo(2.8 * 100, 1.3 * 100);
    ctx.lineTo(2.6 * 100, 2.0 * 100);
    ctx.lineTo(2.7 * 100, 2.2 * 100);
    ctx.lineTo(2.1 * 100, 2.2 * 100);
    ctx.lineTo(1.8 * 100, 2.1 * 100);
    ctx.lineTo(1.4 * 100, 2.5 * 100);
    ctx.lineTo(1.3 * 100, 2.5 * 100);
    ctx.lineTo(0.1 * 100, 2.0 * 100);
    ctx.lineTo(0.1 * 100, 1.9 * 100);
    ctx.lineTo(0.2 * 100, 1.9 * 100);
    ctx.lineTo(0.2 * 100, 1.8 * 100);
    ctx.lineTo(0.5 * 100, 1.6 * 100);
    ctx.lineTo(0.7 * 100, 1.6 * 100);
    ctx.lineTo(0.8 * 100, 1.1 * 100);
    ctx.lineTo(0.7 * 100, 0.9 * 100);
    ctx.lineTo(0.8 * 100, 0.8 * 100);
    ctx.lineTo(0.8 * 100, 0.7 * 100);
    ctx.lineTo(1.0 * 100, 0.7 * 100);
    ctx.lineTo(1.1 * 100, 0.6 * 100);
    ctx.lineTo(1.3 * 100, 0.8 * 100);
    ctx.lineTo(1.5 * 100, 0.8 * 100);
    ctx.lineTo(1.6 * 100, 0.6 * 100);
    ctx.fillStyle = "#72DC00";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//RORAIMA
function drawRR() {
    ctx.beginPath();
    ctx.moveTo(2.5 * 100, 0.7 * 100);
    ctx.lineTo(2.3 * 100, 0.6 * 100);
    ctx.lineTo(2.3 * 100, 0.5 * 100);
    ctx.lineTo(2.4 * 100, 0.3 * 100);
    ctx.lineTo(2.3 * 100, 0.1 * 100);
    ctx.lineTo(2.1 * 100, 0.1 * 100);
    ctx.lineTo(2.0 * 100, 0.3 * 100);
    ctx.lineTo(1.6 * 100, 0.3 * 100);
    ctx.lineTo(1.6 * 100, 0.6 * 100);
    ctx.lineTo(1.8 * 100, 0.7 * 100);
    ctx.lineTo(1.9 * 100, 0.8 * 100);
    ctx.lineTo(1.9 * 100, 1.0 * 100);
    ctx.lineTo(2.0 * 100, 1.1 * 100);
    ctx.lineTo(2.2 * 100, 1.0 * 100);
    ctx.lineTo(2.4 * 100, 1.0 * 100);
    ctx.lineTo(2.5 * 100, 1.0 * 100);
    ctx.lineTo(2.5 * 100, 0.7 * 100);
    ctx.fillStyle = "#72DC00";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//TOCANTINS
function drawTO() {
    ctx.beginPath();
    ctx.moveTo(3.8 * 100, 2.4 * 100);
    ctx.lineTo(4.0 * 100, 2.2 * 100);
    ctx.lineTo(4.0 * 100, 2.1 * 100);
    ctx.lineTo(4.1 * 100, 1.9 * 100);
    ctx.lineTo(4.1 * 100, 1.7 * 100);
    ctx.lineTo(4.3 * 100, 1.8 * 100);
    ctx.lineTo(4.2 * 100, 2.1 * 100);
    ctx.lineTo(4.4 * 100, 2.1 * 100);
    ctx.lineTo(4.3 * 100, 2.2 * 100);
    ctx.lineTo(4.3 * 100, 2.3 * 100);
    ctx.lineTo(4.5 * 100, 2.5 * 100);
    ctx.lineTo(4.5 * 100, 3.0 * 100);
    ctx.lineTo(4.4 * 100, 2.8 * 100);
    ctx.lineTo(4.2 * 100, 2.9 * 100);
    ctx.lineTo(4.1 * 100, 2.9 * 100);
    ctx.lineTo(4.0 * 100, 2.9 * 100);
    ctx.lineTo(3.9 * 100, 2.9 * 100);
    ctx.lineTo(3.7 * 100, 2.8 * 100);
    ctx.lineTo(3.8 * 100, 2.4 * 100);
    ctx.fillStyle = "#72DC00";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//RONDONIA
function drawRO() {
    ctx.beginPath();
    ctx.moveTo(2.2 * 100, 3.0 * 100);
    ctx.lineTo(2.1 * 100, 3.0 * 100);
    ctx.lineTo(1.6 * 100, 2.9 * 100);
    ctx.lineTo(1.5 * 100, 2.8 * 100);
    ctx.lineTo(1.4 * 100, 2.5 * 100);
    ctx.lineTo(1.8 * 100, 2.1 * 100);
    ctx.lineTo(2.1 * 100, 2.2 * 100);
    ctx.lineTo(2.1 * 100, 2.5 * 100);
    ctx.lineTo(2.2 * 100, 2.6 * 100);
    ctx.lineTo(2.3 * 100, 2.6 * 100);
    ctx.lineTo(2.3 * 100, 2.8 * 100);
    ctx.lineTo(2.2 * 100, 3.0 * 100);
    ctx.fillStyle = "#72DC00";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//ACRE
function drawAC() {
    ctx.beginPath();
    ctx.moveTo(1.3 * 100, 2.5 * 100);
    ctx.lineTo(0.1 * 100, 2.0 * 100);
    ctx.lineTo(0.1 * 100, 2.1 * 100);
    ctx.lineTo(0.4 * 100, 2.5 * 100);
    ctx.lineTo(0.6 * 100, 2.5 * 100);
    ctx.lineTo(0.7 * 100, 2.4 * 100);
    ctx.lineTo(0.7 * 100, 2.6 * 100);
    ctx.lineTo(1.0 * 100, 2.7 * 100);
    ctx.lineTo(1.3 * 100, 2.5 * 100);
    ctx.fillStyle = "#72DC00";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//PARÁ
function drawPA() {
    ctx.beginPath();
    ctx.moveTo(2.7 * 100, 2.3 * 100);
    ctx.lineTo(3.8 * 100, 2.4 * 100);
    ctx.lineTo(4.0 * 100, 2.2 * 100);
    ctx.lineTo(4.0 * 100, 2.1 * 100);
    ctx.lineTo(4.1 * 100, 1.9 * 100);
    ctx.lineTo(4.1 * 100, 1.7 * 100);
    ctx.lineTo(4.3 * 100, 1.5 * 100);
    ctx.lineTo(4.5 * 100, 1.0 * 100);
    ctx.lineTo(4.2 * 100, 0.9 * 100);
    ctx.lineTo(4.0 * 100, 1.19 * 100);
    ctx.lineTo(3.5 * 100, 1.19 * 100);
    ctx.lineTo(3.1 * 100, 0.5 * 100);
    ctx.lineTo(2.5 * 100, 0.7 * 100);
    ctx.lineTo(2.5 * 100, 1.0 * 100);
    ctx.lineTo(2.6 * 100, 1.2 * 100);
    ctx.lineTo(2.7 * 100, 1.2 * 100);
    ctx.lineTo(2.8 * 100, 1.3 * 100);
    ctx.lineTo(2.6 * 100, 2.0 * 100);
    ctx.lineTo(2.7 * 100, 2.2 * 100);
    ctx.lineTo(2.7 * 100, 2.3 * 100);
    ctx.moveTo(4.0 * 100, 1.0 * 100);
    ctx.lineTo(4.0 * 100, 1.08 * 100);
    ctx.lineTo(3.95 * 100, 1.14 * 100);
    ctx.lineTo(3.80 * 100, 1.14 * 100);
    ctx.lineTo(3.74 * 100, 1.08 * 100);
    ctx.lineTo(3.84 * 100, 0.95 * 100);
    ctx.lineTo(4.0 * 100, 1.0 * 100);
    ctx.fillStyle = "#72DC00";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//AMAPÁ
function drawAP() {
    ctx.beginPath();
    ctx.moveTo(3.63 * 100, 0.21 * 100);
    ctx.lineTo(3.75 * 100, 0.46 * 100);
    ctx.lineTo(3.75 * 100, 0.63 * 100);
    ctx.lineTo(3.9 * 100, 0.63 * 100);
    ctx.lineTo(3.95 * 100, 0.75 * 100);
    ctx.lineTo(3.68 * 100, 1.0 * 100);
    ctx.lineTo(3.67 * 100, 1.1 * 100);
    ctx.lineTo(3.5 * 100, 1.19 * 100);
    ctx.lineTo(3.2 * 100, 0.67 * 100);
    ctx.lineTo(3.40 * 100, 0.56 * 100);
    ctx.lineTo(3.43 * 100, 0.38 * 100);
    ctx.lineTo(3.63 * 100, 0.21 * 100);
    ctx.fillStyle = "#72DC00";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//MARANHÃO
function drawMA() {
    ctx.beginPath();
    ctx.moveTo(4.5 * 100, 1 * 100);
    ctx.lineTo(4.75 * 100, 1.25 * 100);
    ctx.lineTo(4.75 * 100, 1.36 * 100);
    ctx.lineTo(4.88 * 100, 1.27 * 100);
    ctx.lineTo(5.12 * 100, 1.36 * 100);
    ctx.lineTo(5 * 100, 1.53 * 100);
    ctx.lineTo(5 * 100, 1.78 * 100);
    ctx.lineTo(4.9 * 100, 1.87 * 100);
    ctx.lineTo(4.98 * 100, 1.97 * 100);
    ctx.lineTo(4.81 * 100, 2.01 * 100);
    ctx.lineTo(4.62 * 100, 2.12 * 100);
    ctx.lineTo(4.54 * 100, 2.26 * 100);
    ctx.lineTo(4.5 * 100, 2.53 * 100);
    ctx.lineTo(4.3 * 100, 2.3 * 100);
    ctx.lineTo(4.3 * 100, 2.2 * 100);
    ctx.lineTo(4.4 * 100, 2.1 * 100);
    ctx.lineTo(4.2 * 100, 2.1 * 100);
    ctx.lineTo(4.28 * 100, 1.81 * 100);
    ctx.lineTo(4.11 * 100, 1.71 * 100);
    ctx.lineTo(4.3 * 100, 1.5 * 100);
    ctx.lineTo(4.50 * 100, 1 * 100);
    ctx.fillStyle = "#0099FF";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//PIAUÍ
function drawPI() {
    ctx.beginPath();
    ctx.lineTo(5.12 * 100, 1.36 * 100);
    ctx.lineTo(5 * 100, 1.53 * 100);
    ctx.lineTo(5 * 100, 1.78 * 100);
    ctx.lineTo(4.9 * 100, 1.87 * 100);
    ctx.lineTo(4.98 * 100, 1.97 * 100);
    ctx.lineTo(4.81 * 100, 2.01 * 100);
    ctx.lineTo(4.62 * 100, 2.12 * 100);
    ctx.lineTo(4.54 * 100, 2.26 * 100);
    ctx.lineTo(4.5 * 100, 2.5 * 100);
    ctx.lineTo(4.6 * 100, 2.6 * 100);
    ctx.lineTo(4.7 * 100, 2.5 * 100);
    ctx.lineTo(4.8 * 100, 2.4 * 100);
    ctx.lineTo(4.9 * 100, 2.3 * 100);
    ctx.lineTo(5.0 * 100, 2.3 * 100);
    ctx.lineTo(5.2 * 100, 2.3 * 100);
    ctx.lineTo(5.3 * 100, 2.1 * 100);
    ctx.lineTo(5.2 * 100, 1.8 * 100);
    ctx.lineTo(5.2 * 100, 1.4 * 100);
    ctx.lineTo(5.12 * 100, 1.36 * 100);
    ctx.fillStyle = "#0099FF";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//CEARÁ
function drawCE() {
    ctx.beginPath();
    ctx.lineTo(5.3 * 100, 2.1 * 100);
    ctx.lineTo(5.2 * 100, 1.8 * 100);
    ctx.lineTo(5.2 * 100, 1.4 * 100);
    ctx.lineTo(5.4 * 100, 1.3 * 100);
    ctx.lineTo(5.6 * 100, 1.45 * 100);
    ctx.lineTo(5.8 * 100, 1.7 * 100);
    ctx.lineTo(5.7 * 100, 1.8 * 100);
    ctx.lineTo(5.7 * 100, 1.9 * 100);
    ctx.lineTo(5.6 * 100, 1.9 * 100);
    ctx.lineTo(5.6 * 100, 2.2 * 100);
    ctx.lineTo(5.5 * 100, 2.1 * 100);
    ctx.lineTo(5.3 * 100, 2.1 * 100);
    ctx.fillStyle = "#0099FF";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

//RIO GRANDE DO NORTE
function drawRN() {
    ctx.beginPath();
    ctx.lineTo(5.8 * 100, 1.7 * 100);
    ctx.lineTo(5.7 * 100, 1.8 * 100);
    ctx.lineTo(5.7 * 100, 1.9 * 100);
    ctx.lineTo(5.6 * 100, 1.9 * 100);
    ctx.lineTo(5.6 * 100, 1.9 * 100);
    ctx.lineTo(5.8 * 100, 1.9 * 100);
    ctx.lineTo(5.9 * 100, 2.0 * 100);
    ctx.lineTo(6.0 * 100, 1.9 * 100);
    ctx.lineTo(6.2 * 100, 1.9 * 100);
    ctx.lineTo(6.2 * 100, 1.7 * 100);
    ctx.lineTo(5.8 * 100, 1.7 * 100);
    ctx.fillStyle = "#0099FF";
    ctx.fill();
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke();
}

function ClearMouse() {
    drawRS("mouseLeft");
    drawSC("mouseLeft");
    drawPR("mouseLeft");
}

function OverCanvas(evt) {
    var posX = evt.clientX - canvas.offsetLeft;
    var posY = evt.clientY - canvas.offsetTop;

    switch (true) {
        case ctx.isPointInPath(pathRS, posX, posY):
            ClearMouse();
            drawRS("mouseOver");
            canvas.style.cursor = "pointer";
            break;
        case ctx.isPointInPath(pathSC, posX, posY):
            ClearMouse();
            drawSC("mouseOver");
            canvas.style.cursor = "pointer";
            break;
        case ctx.isPointInPath(pathPR, posX, posY):
            ClearMouse();
            drawPR("mouseOver");
            canvas.style.cursor = "pointer";
            break;
        default:
            ClearMouse();
            canvas.style.cursor = "default";
    }
}

function CanvasClick(evt) {
    console.clear();
    // posição dos cliques descontando a distância da borda da janela
    var posX = evt.clientX - canvas.offsetLeft;
    var posY = evt.clientY - canvas.offsetTop;
    console.log("Posição do clique: ", posX + "," + posY);
    switch (true) {
        case ctx.isPointInPath(pathRS, posX, posY):
            alert("RS");
            break;
        case ctx.isPointInPath(pathSC, posX, posY):
            alert("SC");
            break;
        case ctx.isPointInPath(pathPR, posX, posY):
            alert("PR");
            break;
    }
}

window.onload = function(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener('click', CanvasClick, true);
    canvas.addEventListener('mousemove', OverCanvas, true);
    canvas.addEventListener('mouseover', OverCanvas, true);
    drawRS("onLoad");
    drawSC("onLoad");
    drawPR("onLoad");
    drawSP();
    drawMG();
    drawRJ();
    drawES();
    drawMS();
    drawGO();
    drawMT();
    drawBA();
    drawSE();
    drawAL();
    drawPB();
    drawPE();
    drawAM();
    drawRR();
    drawTO();
    drawRO();
    drawAC();
    drawPA();
    drawAP();
    drawMA();
    drawPI();
    drawCE();
    drawRN();
};
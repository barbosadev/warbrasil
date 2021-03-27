var canvas = ""
var ctx = ""
var pathRS = new Path2D();
var pathSC = new Path2D();
var pathPR = new Path2D();
var pathSP = new Path2D();
var pathMG = new Path2D();
var pathRJ = new Path2D();
var pathES = new Path2D();
var pathMS = new Path2D();
var pathGO = new Path2D();
var pathMT = new Path2D();
var pathBA = new Path2D();
var pathSE = new Path2D();
var pathAL = new Path2D();
var pathPB = new Path2D();
var pathPE = new Path2D();
var pathAM = new Path2D();
var pathRR = new Path2D();
var pathTO = new Path2D();
var pathRO = new Path2D();
var pathAC = new Path2D();
var pathPA = new Path2D();
var pathAP = new Path2D();
var pathMA = new Path2D();
var pathPI = new Path2D();
var pathCE = new Path2D();
var pathRN = new Path2D();

var statesDrawFunctionDict = {"RS":drawRS, "SC":drawSC, "PR":drawPR, "SP":drawSP, "MG":drawMG, "RJ":drawRJ, "ES":drawES, "MS":drawMS, "GO":drawGO, "MT":drawMT, "BA":drawBA, "SE":drawSE, "AL":drawAL, "PB":drawPB, "PE":drawPE, "AM":drawAM, "RR":drawRR, "TO":drawTO, "RO":drawRO, "AC":drawAC, "PA":drawPA, "AP":drawAP, "MA":drawMA, "PI":drawPI, "CE":drawCE, "RN":drawRN}

//RIO GRANDE DO SUL
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
    treatEvent(execEvent, pathRS, "#FF9A00")
}

//SANTA CATARINA
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
    treatEvent(execEvent, pathSC, "#FF9A00")
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
    treatEvent(execEvent, pathPR, "#FF9A00")
}

//SAO PAULO
function drawSP(execEvent) {
    pathSP.moveTo(4.2 * 100, 4.7 * 100);
    pathSP.lineTo(4.7 * 100, 4.4 * 100);
    pathSP.lineTo(4.7 * 100, 4.3 * 100);
    pathSP.lineTo(4.4 * 100, 4.4 * 100);
    pathSP.lineTo(4.4 * 100, 4.2 * 100);
    pathSP.lineTo(4.3 * 100, 4.0 * 100);
    pathSP.lineTo(4.1 * 100, 4.0 * 100);
    pathSP.lineTo(3.7 * 100, 4.0 * 100);
    pathSP.lineTo(3.4 * 100, 4.36 * 100);
    pathSP.lineTo(3.9 * 100, 4.5 * 100);
    pathSP.lineTo(4.0 * 100, 4.7 * 100);
    pathSP.lineTo(4.2 * 100, 4.7 * 100);
    pathSP.closePath()
    treatEvent(execEvent, pathSP, "#FF0000")
}

//MINAS GERAIS
function drawMG(execEvent) {
    pathMG.moveTo(4.4 * 100, 4.4 * 100);
    pathMG.lineTo(4.7 * 100, 4.3 * 100);
    pathMG.lineTo(4.8 * 100, 4.3 * 100);
    pathMG.lineTo(5.0 * 100, 4.2 * 100);
    pathMG.lineTo(5.2 * 100, 4.0 * 100);
    pathMG.lineTo(5.4 * 100, 3.7 * 100);
    pathMG.lineTo(5.4 * 100, 3.6 * 100);
    pathMG.lineTo(5.4 * 100, 3.5 * 100);
    pathMG.lineTo(5.5 * 100, 3.4 * 100);
    pathMG.lineTo(5.2 * 100, 3.4 * 100);
    pathMG.lineTo(5.1 * 100, 3.3 * 100);
    pathMG.lineTo(5.0 * 100, 3.2 * 100);
    pathMG.lineTo(4.8 * 100, 3.1 * 100);
    pathMG.lineTo(4.7 * 100, 3.1 * 100);
    pathMG.lineTo(4.5 * 100, 3.3 * 100);
    pathMG.lineTo(4.4 * 100, 3.3 * 100);
    pathMG.lineTo(4.3 * 100, 3.4 * 100);
    pathMG.lineTo(4.3 * 100, 3.7 * 100);
    pathMG.lineTo(4.1 * 100, 3.8 * 100);
    pathMG.lineTo(3.8 * 100, 3.8 * 100);
    pathMG.lineTo(3.7 * 100, 3.9 * 100);
    pathMG.lineTo(3.7 * 100, 4.0 * 100);
    pathMG.lineTo(4.1 * 100, 4.0 * 100);
    pathMG.lineTo(4.3 * 100, 4.0 * 100);
    pathMG.lineTo(4.4 * 100, 4.2 * 100);
    pathMG.lineTo(4.4 * 100, 4.4 * 100);
    pathMG.closePath()
    treatEvent(execEvent, pathMG, "#FF0000")
}

//RIO DE JANEIRO
function drawRJ(execEvent) {
    pathRJ.moveTo(4.7 * 100, 4.3 * 100);
    pathRJ.lineTo(4.7 * 100, 4.4 * 100);
    pathRJ.lineTo(5.1 * 100, 4.4 * 100);
    pathRJ.lineTo(5.3 * 100, 4.1 * 100);
    pathRJ.lineTo(5.2 * 100, 4.0 * 100);
    pathRJ.lineTo(5.0 * 100, 4.2 * 100);
    pathRJ.lineTo(4.8 * 100, 4.3 * 100);
    pathRJ.lineTo(4.7 * 100, 4.3 * 100);
    pathRJ.closePath()
    treatEvent(execEvent, pathRJ, "#FF0000")
}

//ESPIRITO SANTO
function drawES(execEvent) {
    pathES.moveTo(5.3 * 100, 4.1 * 100);
    pathES.lineTo(5.5 * 100, 4.0 * 100);
    pathES.lineTo(5.5 * 100, 3.8 * 100);
    pathES.lineTo(5.4 * 100, 3.7 * 100);
    pathES.lineTo(5.2 * 100, 4.0 * 100);
    pathES.lineTo(5.3 * 100, 4.1 * 100);
    pathES.closePath()
    treatEvent(execEvent, pathES, "#FF0000")
}

//MATO GROSSO DO SUL
function drawMS(execEvent) {
    pathMS.moveTo(2.7 * 100, 3.7 * 100);
    pathMS.lineTo(2.9 * 100, 3.5 * 100);
    pathMS.lineTo(3.1 * 100, 3.6 * 100);
    pathMS.lineTo(3.2 * 100, 3.6 * 100);
    pathMS.lineTo(3.7 * 100, 3.9 * 100);
    pathMS.lineTo(3.7 * 100, 4.0 * 100);
    pathMS.lineTo(3.2 * 100, 4.6 * 100);
    pathMS.lineTo(3.0 * 100, 4.6 * 100);
    pathMS.lineTo(2.9 * 100, 4.4 * 100);
    pathMS.lineTo(2.6 * 100, 4.3 * 100);
    pathMS.lineTo(2.7 * 100, 3.7 * 100);
    pathMS.closePath()
    treatEvent(execEvent, pathMS, "#FFD500")
}

//GOIAS
function drawGO(execEvent) {
    pathGO.moveTo(3.2 * 100, 3.6 * 100);
    pathGO.lineTo(3.7 * 100, 3.9 * 100);
    pathGO.lineTo(3.8 * 100, 3.8 * 100);
    pathGO.lineTo(4.1 * 100, 3.8 * 100);
    pathGO.lineTo(4.3 * 100, 3.7 * 100);
    pathGO.lineTo(4.3 * 100, 3.4 * 100);
    pathGO.lineTo(4.4 * 100, 3.3 * 100);
    pathGO.lineTo(4.5 * 100, 3.3 * 100);
    pathGO.lineTo(4.5 * 100, 3.2 * 100);
    pathGO.lineTo(4.5 * 100, 3.0 * 100);
    pathGO.lineTo(4.4 * 100, 2.8 * 100);
    pathGO.lineTo(4.2 * 100, 2.9 * 100);
    pathGO.lineTo(4.1 * 100, 2.9 * 100);
    pathGO.lineTo(4.0 * 100, 2.8 * 100);
    pathGO.lineTo(3.9 * 100, 2.9 * 100);
    pathGO.lineTo(3.7 * 100, 2.8 * 100);
    pathGO.lineTo(3.7 * 100, 3.1 * 100);
    pathGO.lineTo(3.6 * 100, 3.3 * 100);
    pathGO.lineTo(3.2 * 100, 3.6 * 100);
    pathGO.closePath()
    treatEvent(execEvent, pathGO, "#FFD500")
}

//MATO GROSSO
function drawMT(execEvent) {
    pathMT.moveTo(3.2 * 100, 3.6 * 100);
    pathMT.lineTo(3.6 * 100, 3.3 * 100);
    pathMT.lineTo(3.7 * 100, 3.1 * 100);
    pathMT.lineTo(3.7 * 100, 2.8 * 100);
    pathMT.lineTo(3.8 * 100, 2.4 * 100);
    pathMT.lineTo(2.7 * 100, 2.3 * 100);
    pathMT.lineTo(2.7 * 100, 2.2 * 100);
    pathMT.lineTo(2.1 * 100, 2.2 * 100);
    pathMT.lineTo(2.1 * 100, 2.5 * 100);
    pathMT.lineTo(2.2 * 100, 2.6 * 100);
    pathMT.lineTo(2.2 * 100, 2.6 * 100);
    pathMT.lineTo(2.3 * 100, 2.8 * 100);
    pathMT.lineTo(2.2 * 100, 3.0 * 100);
    pathMT.lineTo(2.2 * 100, 3.4 * 100);
    pathMT.lineTo(2.5 * 100, 3.4 * 100);
    pathMT.lineTo(2.7 * 100, 3.7 * 100);
    pathMT.lineTo(2.9 * 100, 3.5 * 100);
    pathMT.lineTo(3.1 * 100, 3.6 * 100);
    pathMT.lineTo(3.2 * 100, 3.6 * 100);
    pathMT.closePath()
    treatEvent(execEvent, pathMT, "#FFD500")
}

//BAHIA
function drawBA(execEvent) {
    pathBA.moveTo(5.9 * 100, 2.7 * 100);
    pathBA.lineTo(5.8 * 100, 2.9 * 100);
    pathBA.lineTo(5.6 * 100, 2.9 * 100);
    pathBA.lineTo(5.6 * 100, 3.1 * 100);
    pathBA.lineTo(5.5 * 100, 3.8 * 100);
    pathBA.lineTo(5.4 * 100, 3.7 * 100);
    pathBA.lineTo(5.4 * 100, 3.6 * 100);
    pathBA.lineTo(5.4 * 100, 3.5 * 100);
    pathBA.lineTo(5.5 * 100, 3.4 * 100);
    pathBA.lineTo(5.2 * 100, 3.4 * 100);
    pathBA.lineTo(5.1 * 100, 3.3 * 100);
    pathBA.lineTo(5.0 * 100, 3.2 * 100);
    pathBA.lineTo(4.8 * 100, 3.1 * 100);
    pathBA.lineTo(4.7 * 100, 3.1 * 100);
    pathBA.lineTo(4.5 * 100, 3.3 * 100);
    pathBA.lineTo(4.5 * 100, 2.5 * 100);
    pathBA.lineTo(4.6 * 100, 2.6 * 100);
    pathBA.lineTo(4.7 * 100, 2.5 * 100);
    pathBA.lineTo(4.8 * 100, 2.4 * 100);
    pathBA.lineTo(4.9 * 100, 2.3 * 100);
    pathBA.lineTo(5.0 * 100, 2.3 * 100);
    pathBA.lineTo(5.2 * 100, 2.3 * 100);
    pathBA.lineTo(5.3 * 100, 2.4 * 100);
    pathBA.lineTo(5.5 * 100, 2.3 * 100);
    pathBA.lineTo(5.8 * 100, 2.4 * 100);
    pathBA.lineTo(5.8 * 100, 2.5 * 100);
    pathBA.lineTo(5.7 * 100, 2.65 * 100);
    pathBA.lineTo(5.9 * 100, 2.7 * 100);
    pathBA.closePath()
    treatEvent(execEvent, pathBA, "#0099FF")
}

//SERGIPE
function drawSE(execEvent) {
    pathSE.moveTo(5.9 * 100, 2.7 * 100);
    pathSE.lineTo(6.0 * 100, 2.5 * 100);
    pathSE.lineTo(5.8 * 100, 2.4 * 100);
    pathSE.lineTo(5.8 * 100, 2.5 * 100);
    pathSE.lineTo(5.7 * 100, 2.65 * 100);
    pathSE.lineTo(5.9 * 100, 2.7 * 100);
    pathSE.closePath()
    treatEvent(execEvent, pathSE, "#0099FF")
}

//ALAGOAS
function drawAL(execEvent) {
    pathAL.moveTo(5.8 * 100, 2.4 * 100);
    pathAL.lineTo(5.82 * 100, 2.3 * 100);
    pathAL.lineTo(5.9 * 100, 2.35 * 100);
    pathAL.lineTo(6.2 * 100, 2.3 * 100);
    pathAL.lineTo(6.3 * 100, 2.1 * 100);
    pathAL.lineTo(6.0 * 100, 2.1 * 100);
    pathAL.lineTo(5.9 * 100, 2.2 * 100);
    pathAL.lineTo(5.9 * 100, 2.1 * 100);
    pathAL.lineTo(5.8 * 100, 2.1 * 100);
    pathAL.lineTo(5.6 * 100, 2.2 * 100);
    pathAL.lineTo(5.5 * 100, 2.1 * 100);
    pathAL.lineTo(5.3 * 100, 2.1 * 100);
    pathAL.lineTo(5.2 * 100, 2.3 * 100);
    pathAL.lineTo(5.3 * 100, 2.4 * 100);
    pathAL.lineTo(5.5 * 100, 2.3 * 100);
    pathAL.lineTo(5.8 * 100, 2.4 * 100);
    pathAL.closePath()
    treatEvent(execEvent, pathAL, "#0099FF")
}

//PARAÍBA
function drawPB(execEvent) {
    pathPB.moveTo(5.6 * 100, 2.2 * 100);
    pathPB.lineTo(5.8 * 100, 2.1 * 100);
    pathPB.lineTo(5.9 * 100, 2.1 * 100);
    pathPB.lineTo(5.9 * 100, 2.2 * 100);
    pathPB.lineTo(6.0 * 100, 2.1 * 100);
    pathPB.lineTo(6.3 * 100, 2.1 * 100);
    pathPB.lineTo(6.2 * 100, 1.9 * 100);
    pathPB.lineTo(6.0 * 100, 1.9 * 100);
    pathPB.lineTo(5.9 * 100, 2.0 * 100);
    pathPB.lineTo(5.8 * 100, 1.9 * 100);
    pathPB.lineTo(5.6 * 100, 1.9 * 100);
    pathPB.lineTo(5.6 * 100, 2.2 * 100);
    pathPB.closePath()
    treatEvent(execEvent, pathPB, "#0099FF")
    ctx.fillStyle = "#0099FF";
}

//PERNAMBUCO
function drawPE(execEvent) {
    pathPE.moveTo(5.8 * 100, 2.4 * 100);
    pathPE.lineTo(5.82 * 100, 2.3 * 100);
    pathPE.lineTo(5.9 * 100, 2.35 * 100);
    pathPE.lineTo(6.2 * 100, 2.3 * 100);
    pathPE.lineTo(6.0 * 100, 2.5 * 100);
    pathPE.lineTo(5.8 * 100, 2.4 * 100);
    pathPE.closePath()
    treatEvent(execEvent, pathPE, "#0099FF")
}

//AMAZONAS
function drawAM(execEvent) {
    pathAM.moveTo(1.6 * 100, 0.6 * 100);
    pathAM.lineTo(1.8 * 100, 0.7 * 100);
    pathAM.lineTo(1.9 * 100, 0.8 * 100);
    pathAM.lineTo(1.9 * 100, 1.0 * 100);
    pathAM.lineTo(2.0 * 100, 1.1 * 100);
    pathAM.lineTo(2.2 * 100, 1.0 * 100);
    pathAM.lineTo(2.4 * 100, 1.0 * 100);
    pathAM.lineTo(2.5 * 100, 1.0 * 100);
    pathAM.lineTo(2.6 * 100, 1.2 * 100);
    pathAM.lineTo(2.7 * 100, 1.2 * 100);
    pathAM.lineTo(2.8 * 100, 1.3 * 100);
    pathAM.lineTo(2.6 * 100, 2.0 * 100);
    pathAM.lineTo(2.7 * 100, 2.2 * 100);
    pathAM.lineTo(2.1 * 100, 2.2 * 100);
    pathAM.lineTo(1.8 * 100, 2.1 * 100);
    pathAM.lineTo(1.4 * 100, 2.5 * 100);
    pathAM.lineTo(1.3 * 100, 2.5 * 100);
    pathAM.lineTo(0.1 * 100, 2.0 * 100);
    pathAM.lineTo(0.1 * 100, 1.9 * 100);
    pathAM.lineTo(0.2 * 100, 1.9 * 100);
    pathAM.lineTo(0.2 * 100, 1.8 * 100);
    pathAM.lineTo(0.5 * 100, 1.6 * 100);
    pathAM.lineTo(0.7 * 100, 1.6 * 100);
    pathAM.lineTo(0.8 * 100, 1.1 * 100);
    pathAM.lineTo(0.7 * 100, 0.9 * 100);
    pathAM.lineTo(0.8 * 100, 0.8 * 100);
    pathAM.lineTo(0.8 * 100, 0.7 * 100);
    pathAM.lineTo(1.0 * 100, 0.7 * 100);
    pathAM.lineTo(1.1 * 100, 0.6 * 100);
    pathAM.lineTo(1.3 * 100, 0.8 * 100);
    pathAM.lineTo(1.5 * 100, 0.8 * 100);
    pathAM.lineTo(1.6 * 100, 0.6 * 100);
    pathAM.closePath()
    treatEvent(execEvent, pathAM, "#72DC00")
}

//RORAIMA
function drawRR(execEvent) {
    pathRR.moveTo(2.5 * 100, 0.7 * 100);
    pathRR.lineTo(2.3 * 100, 0.6 * 100);
    pathRR.lineTo(2.3 * 100, 0.5 * 100);
    pathRR.lineTo(2.4 * 100, 0.3 * 100);
    pathRR.lineTo(2.3 * 100, 0.1 * 100);
    pathRR.lineTo(2.1 * 100, 0.1 * 100);
    pathRR.lineTo(2.0 * 100, 0.3 * 100);
    pathRR.lineTo(1.6 * 100, 0.3 * 100);
    pathRR.lineTo(1.6 * 100, 0.6 * 100);
    pathRR.lineTo(1.8 * 100, 0.7 * 100);
    pathRR.lineTo(1.9 * 100, 0.8 * 100);
    pathRR.lineTo(1.9 * 100, 1.0 * 100);
    pathRR.lineTo(2.0 * 100, 1.1 * 100);
    pathRR.lineTo(2.2 * 100, 1.0 * 100);
    pathRR.lineTo(2.4 * 100, 1.0 * 100);
    pathRR.lineTo(2.5 * 100, 1.0 * 100);
    pathRR.lineTo(2.5 * 100, 0.7 * 100);
    pathRR.closePath()
    treatEvent(execEvent, pathRR, "#72DC00")
}

//TOCANTINS
function drawTO(execEvent) {
    pathTO.moveTo(3.8 * 100, 2.4 * 100);
    pathTO.lineTo(4.0 * 100, 2.2 * 100);
    pathTO.lineTo(4.0 * 100, 2.1 * 100);
    pathTO.lineTo(4.1 * 100, 1.9 * 100);
    pathTO.lineTo(4.1 * 100, 1.7 * 100);
    pathTO.lineTo(4.3 * 100, 1.8 * 100);
    pathTO.lineTo(4.2 * 100, 2.1 * 100);
    pathTO.lineTo(4.4 * 100, 2.1 * 100);
    pathTO.lineTo(4.3 * 100, 2.2 * 100);
    pathTO.lineTo(4.3 * 100, 2.3 * 100);
    pathTO.lineTo(4.5 * 100, 2.5 * 100);
    pathTO.lineTo(4.5 * 100, 3.0 * 100);
    pathTO.lineTo(4.4 * 100, 2.8 * 100);
    pathTO.lineTo(4.2 * 100, 2.9 * 100);
    pathTO.lineTo(4.1 * 100, 2.9 * 100);
    pathTO.lineTo(4.0 * 100, 2.9 * 100);
    pathTO.lineTo(3.9 * 100, 2.9 * 100);
    pathTO.lineTo(3.7 * 100, 2.8 * 100);
    pathTO.lineTo(3.8 * 100, 2.4 * 100);
    pathTO.closePath()
    treatEvent(execEvent, pathTO, "#72DC00")
}

//RONDONIA
function drawRO(execEvent) {
    pathRO.moveTo(2.2 * 100, 3.0 * 100);
    pathRO.lineTo(2.1 * 100, 3.0 * 100);
    pathRO.lineTo(1.6 * 100, 2.9 * 100);
    pathRO.lineTo(1.5 * 100, 2.8 * 100);
    pathRO.lineTo(1.4 * 100, 2.5 * 100);
    pathRO.lineTo(1.8 * 100, 2.1 * 100);
    pathRO.lineTo(2.1 * 100, 2.2 * 100);
    pathRO.lineTo(2.1 * 100, 2.5 * 100);
    pathRO.lineTo(2.2 * 100, 2.6 * 100);
    pathRO.lineTo(2.3 * 100, 2.6 * 100);
    pathRO.lineTo(2.3 * 100, 2.8 * 100);
    pathRO.lineTo(2.2 * 100, 3.0 * 100);
    pathRO.closePath()
    treatEvent(execEvent, pathRO, "#72DC00")
}

//ACRE
function drawAC(execEvent) {
    pathAC.moveTo(1.3 * 100, 2.5 * 100);
    pathAC.lineTo(0.1 * 100, 2.0 * 100);
    pathAC.lineTo(0.1 * 100, 2.1 * 100);
    pathAC.lineTo(0.4 * 100, 2.5 * 100);
    pathAC.lineTo(0.6 * 100, 2.5 * 100);
    pathAC.lineTo(0.7 * 100, 2.4 * 100);
    pathAC.lineTo(0.7 * 100, 2.6 * 100);
    pathAC.lineTo(1.0 * 100, 2.7 * 100);
    pathAC.lineTo(1.3 * 100, 2.5 * 100);
    pathAC.closePath()
    treatEvent(execEvent, pathAC, "#72DC00")
}

//PARÁ
function drawPA(execEvent) {
    pathPA.moveTo(2.7 * 100, 2.3 * 100);
    pathPA.lineTo(3.8 * 100, 2.4 * 100);
    pathPA.lineTo(4.0 * 100, 2.2 * 100);
    pathPA.lineTo(4.0 * 100, 2.1 * 100);
    pathPA.lineTo(4.1 * 100, 1.9 * 100);
    pathPA.lineTo(4.1 * 100, 1.7 * 100);
    pathPA.lineTo(4.3 * 100, 1.5 * 100);
    pathPA.lineTo(4.5 * 100, 1.0 * 100);
    pathPA.lineTo(4.2 * 100, 0.9 * 100);
    pathPA.lineTo(4.0 * 100, 1.19 * 100);
    pathPA.lineTo(3.5 * 100, 1.19 * 100);
    pathPA.lineTo(3.1 * 100, 0.5 * 100);
    pathPA.lineTo(2.5 * 100, 0.7 * 100);
    pathPA.lineTo(2.5 * 100, 1.0 * 100);
    pathPA.lineTo(2.6 * 100, 1.2 * 100);
    pathPA.lineTo(2.7 * 100, 1.2 * 100);
    pathPA.lineTo(2.8 * 100, 1.3 * 100);
    pathPA.lineTo(2.6 * 100, 2.0 * 100);
    pathPA.lineTo(2.7 * 100, 2.2 * 100);
    pathPA.lineTo(2.7 * 100, 2.3 * 100);
    pathPA.moveTo(4.0 * 100, 1.0 * 100);
    pathPA.lineTo(4.0 * 100, 1.08 * 100);
    pathPA.lineTo(3.95 * 100, 1.14 * 100);
    pathPA.lineTo(3.80 * 100, 1.14 * 100);
    pathPA.lineTo(3.74 * 100, 1.08 * 100);
    pathPA.lineTo(3.84 * 100, 0.95 * 100);
    pathPA.lineTo(4.0 * 100, 1.0 * 100);
    pathPA.closePath()
    treatEvent(execEvent, pathPA, "#72DC00")
}

//AMAPÁ
function drawAP(execEvent) {
    pathAP.moveTo(3.63 * 100, 0.21 * 100);
    pathAP.lineTo(3.75 * 100, 0.46 * 100);
    pathAP.lineTo(3.75 * 100, 0.63 * 100);
    pathAP.lineTo(3.9 * 100, 0.63 * 100);
    pathAP.lineTo(3.95 * 100, 0.75 * 100);
    pathAP.lineTo(3.68 * 100, 1.0 * 100);
    pathAP.lineTo(3.67 * 100, 1.1 * 100);
    pathAP.lineTo(3.5 * 100, 1.19 * 100);
    pathAP.lineTo(3.2 * 100, 0.67 * 100);
    pathAP.lineTo(3.40 * 100, 0.56 * 100);
    pathAP.lineTo(3.43 * 100, 0.38 * 100);
    pathAP.lineTo(3.63 * 100, 0.21 * 100);
    pathAP.closePath()
    treatEvent(execEvent, pathAP, "#72DC00")
}

//MARANHÃO
function drawMA(execEvent) {
    pathMA.moveTo(4.5 * 100, 1 * 100);
    pathMA.lineTo(4.75 * 100, 1.25 * 100);
    pathMA.lineTo(4.75 * 100, 1.36 * 100);
    pathMA.lineTo(4.88 * 100, 1.27 * 100);
    pathMA.lineTo(5.12 * 100, 1.36 * 100);
    pathMA.lineTo(5 * 100, 1.53 * 100);
    pathMA.lineTo(5 * 100, 1.78 * 100);
    pathMA.lineTo(4.9 * 100, 1.87 * 100);
    pathMA.lineTo(4.98 * 100, 1.97 * 100);
    pathMA.lineTo(4.81 * 100, 2.01 * 100);
    pathMA.lineTo(4.62 * 100, 2.12 * 100);
    pathMA.lineTo(4.54 * 100, 2.26 * 100);
    pathMA.lineTo(4.5 * 100, 2.53 * 100);
    pathMA.lineTo(4.3 * 100, 2.3 * 100);
    pathMA.lineTo(4.3 * 100, 2.2 * 100);
    pathMA.lineTo(4.4 * 100, 2.1 * 100);
    pathMA.lineTo(4.2 * 100, 2.1 * 100);
    pathMA.lineTo(4.28 * 100, 1.81 * 100);
    pathMA.lineTo(4.11 * 100, 1.71 * 100);
    pathMA.lineTo(4.3 * 100, 1.5 * 100);
    pathMA.lineTo(4.50 * 100, 1 * 100);
    pathMA.closePath()
    treatEvent(execEvent, pathMA, "#0099FF")
}

//PIAUÍ
function drawPI(execEvent) {
    pathPI.lineTo(5.12 * 100, 1.36 * 100);
    pathPI.lineTo(5 * 100, 1.53 * 100);
    pathPI.lineTo(5 * 100, 1.78 * 100);
    pathPI.lineTo(4.9 * 100, 1.87 * 100);
    pathPI.lineTo(4.98 * 100, 1.97 * 100);
    pathPI.lineTo(4.81 * 100, 2.01 * 100);
    pathPI.lineTo(4.62 * 100, 2.12 * 100);
    pathPI.lineTo(4.54 * 100, 2.26 * 100);
    pathPI.lineTo(4.5 * 100, 2.5 * 100);
    pathPI.lineTo(4.6 * 100, 2.6 * 100);
    pathPI.lineTo(4.7 * 100, 2.5 * 100);
    pathPI.lineTo(4.8 * 100, 2.4 * 100);
    pathPI.lineTo(4.9 * 100, 2.3 * 100);
    pathPI.lineTo(5.0 * 100, 2.3 * 100);
    pathPI.lineTo(5.2 * 100, 2.3 * 100);
    pathPI.lineTo(5.3 * 100, 2.1 * 100);
    pathPI.lineTo(5.2 * 100, 1.8 * 100);
    pathPI.lineTo(5.2 * 100, 1.4 * 100);
    pathPI.lineTo(5.12 * 100, 1.36 * 100);
    pathPI.closePath()
    treatEvent(execEvent, pathPI, "#0099FF")
}

//CEARÁ
function drawCE(execEvent) {
    pathCE.lineTo(5.3 * 100, 2.1 * 100);
    pathCE.lineTo(5.2 * 100, 1.8 * 100);
    pathCE.lineTo(5.2 * 100, 1.4 * 100);
    pathCE.lineTo(5.4 * 100, 1.3 * 100);
    pathCE.lineTo(5.6 * 100, 1.45 * 100);
    pathCE.lineTo(5.8 * 100, 1.7 * 100);
    pathCE.lineTo(5.7 * 100, 1.8 * 100);
    pathCE.lineTo(5.7 * 100, 1.9 * 100);
    pathCE.lineTo(5.6 * 100, 1.9 * 100);
    pathCE.lineTo(5.6 * 100, 2.2 * 100);
    pathCE.lineTo(5.5 * 100, 2.1 * 100);
    pathCE.lineTo(5.3 * 100, 2.1 * 100);
    pathCE.closePath()
    treatEvent(execEvent, pathCE, "#0099FF")
}

//RIO GRANDE DO NORTE
function drawRN(execEvent) {
    pathRN.lineTo(5.8 * 100, 1.7 * 100);
    pathRN.lineTo(5.7 * 100, 1.8 * 100);
    pathRN.lineTo(5.7 * 100, 1.9 * 100);
    pathRN.lineTo(5.6 * 100, 1.9 * 100);
    pathRN.lineTo(5.6 * 100, 1.9 * 100);
    pathRN.lineTo(5.8 * 100, 1.9 * 100);
    pathRN.lineTo(5.9 * 100, 2.0 * 100);
    pathRN.lineTo(6.0 * 100, 1.9 * 100);
    pathRN.lineTo(6.2 * 100, 1.9 * 100);
    pathRN.lineTo(6.2 * 100, 1.7 * 100);
    pathRN.lineTo(5.8 * 100, 1.7 * 100);
    pathRN.closePath()
    treatEvent(execEvent, pathRN, "#0099FF")
}

function draw(state, execEvent) {
    statesDrawFunctionDict[state](execEvent)
}

function drawCanvas(state) {
    drawRS(state);
    drawSC(state);
    drawPR(state);
    drawSP(state);
    drawMG(state);
    drawRJ(state);
    drawES(state);
    drawMS(state);
    drawGO(state);
    drawMT(state);
    drawBA(state);
    drawSE(state);
    drawAL(state);
    drawPB(state);
    drawPE(state);
    drawAM(state);
    drawRR(state);
    drawTO(state);
    drawRO(state);
    drawAC(state);
    drawPA(state);
    drawAP(state);
    drawMA(state);
    drawPI(state);
    drawCE(state);
    drawRN(state);
}

function getPosState(posX, posY) {
    switch (true) {
        case ctx.isPointInPath(pathRS, posX, posY):
            return("RS");
        case ctx.isPointInPath(pathSC, posX, posY):
            return("SC");
        case ctx.isPointInPath(pathPR, posX, posY):
            return("PR");
        case ctx.isPointInPath(pathSP, posX, posY):
            return("SP");
        case ctx.isPointInPath(pathMG, posX, posY):
            return("MG");
        case ctx.isPointInPath(pathRJ, posX, posY):
            return("RJ");
        case ctx.isPointInPath(pathES, posX, posY):
            return("ES");
        case ctx.isPointInPath(pathMS, posX, posY):
            return("MS");
        case ctx.isPointInPath(pathGO, posX, posY):
            return("GO");
        case ctx.isPointInPath(pathMT, posX, posY):
            return("MT");
        case ctx.isPointInPath(pathBA, posX, posY):
            return("BA");
        case ctx.isPointInPath(pathSE, posX, posY):
            return("SE");
        case ctx.isPointInPath(pathAL, posX, posY):
            return("AL");
        case ctx.isPointInPath(pathPB, posX, posY):
            return("PB");
        case ctx.isPointInPath(pathPE, posX, posY):
            return("PE");
        case ctx.isPointInPath(pathAM, posX, posY):
            return("AM");
        case ctx.isPointInPath(pathRR, posX, posY):
            return("RR");
        case ctx.isPointInPath(pathTO, posX, posY):
            return("TO");
        case ctx.isPointInPath(pathRO, posX, posY):
            return("RO");
        case ctx.isPointInPath(pathAC, posX, posY):
            return("AC");
        case ctx.isPointInPath(pathPA, posX, posY):
            return("PA");
        case ctx.isPointInPath(pathAP, posX, posY):
            return("AP");
        case ctx.isPointInPath(pathMA, posX, posY):
            return("MA");
        case ctx.isPointInPath(pathPI, posX, posY):
            return("PI");
        case ctx.isPointInPath(pathCE, posX, posY):
            return("CE");
        case ctx.isPointInPath(pathRN, posX, posY):
            return("RN");
        default:
            return("Fora de qualquer estado");
    }
}

function clearMouse() {
    drawCanvas("mouseLeft");
}

function treatEvent(evt, path, fillStyle) {
    if (evt == "onLoad") {
        ctx.fillStyle = fillStyle;
        ctx.fill(path);
        ctx.strokeStyle = "#003300";
    } else if (evt == "mouseOver") {
        clearMouse();
        ctx.strokeStyle = "#C0C0C0";
        canvas.style.cursor = "pointer";
    }
    else if (evt == "mouseLeft")
        ctx.strokeStyle = "#003300";
    ctx.lineWidth = 3;
    ctx.stroke(path);
}

function OverCanvas(evt) {
    clearMouse();
    canvas.style.cursor = "default";
    var posX = evt.clientX - canvas.offsetLeft;
    var posY = evt.clientY - canvas.offsetTop;
    draw(getPosState(posX, posY), "mouseOver")
}

function CanvasClick(evt) {
    console.clear();
    // posição dos cliques descontando a distância da borda da janela
    var posX = evt.clientX - canvas.offsetLeft;
    var posY = evt.clientY - canvas.offsetTop;
    console.log("Posição do clique: ", posX + "," + posY);
    alert(getPosState(posX, posY))
}

window.onload = function(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener('click', CanvasClick, true);
    canvas.addEventListener('mousemove', OverCanvas, true);
    canvas.addEventListener('mouseover', OverCanvas, true);
    drawCanvas("onLoad")
}

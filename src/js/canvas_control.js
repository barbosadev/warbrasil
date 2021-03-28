var canvas = ctx = pathRS = pathSC = pathPR = pathSP = pathMG = pathRJ = pathES = pathMS = pathGO = pathMT = pathBA = pathSE = pathAL = pathPB = pathPE = pathAM = pathRR = pathTO = pathRO = pathAC = pathPA = pathAP = pathMA = pathPI = pathCE = pathRN = null
var statesDrawFunctionDict = {"RS":drawRS, "SC":drawSC, "PR":drawPR, "SP":drawSP, "MG":drawMG, "RJ":drawRJ, "ES":drawES, "MS":drawMS, "GO":drawGO, "MT":drawMT, "BA":drawBA, "SE":drawSE, "AL":drawAL, "PB":drawPB, "PE":drawPE, "AM":drawAM, "RR":drawRR, "TO":drawTO, "RO":drawRO, "AC":drawAC, "PA":drawPA, "AP":drawAP, "MA":drawMA, "PI":drawPI, "CE":drawCE, "RN":drawRN}
var statesFillStyleDict = {"NORTE":"#72DC00", "NORDESTE":"#0099FF", "CENTRO-OESTE":"#FFD500", "SUDESTE":"#FF0000", "SUL":"#FF9A00"}

//RIO GRANDE DO SUL
function drawRS(execEvent) {
    pathRS = new Path2D()
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
    treatEvent(execEvent, pathRS, statesFillStyleDict["SUL"])
}

//SANTA CATARINA
function drawSC(execEvent) {
    pathSC = new Path2D()
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
    treatEvent(execEvent, pathSC, statesFillStyleDict["SUL"])
}

//PARANA
function drawPR(execEvent) {
    pathPR = new Path2D()
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
    treatEvent(execEvent, pathPR, statesFillStyleDict["SUL"])
}

//SAO PAULO
function drawSP(execEvent) {
    pathSP = new Path2D()
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
    treatEvent(execEvent, pathSP, statesFillStyleDict["SUDESTE"])
}

//MINAS GERAIS
function drawMG(execEvent) {
    pathMG = new Path2D()
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
    treatEvent(execEvent, pathMG, statesFillStyleDict["SUDESTE"])
}

//RIO DE JANEIRO
function drawRJ(execEvent) {
    pathRJ = new Path2D()
    pathRJ.moveTo(4.7 * 100, 4.3 * 100);
    pathRJ.lineTo(4.7 * 100, 4.4 * 100);
    pathRJ.lineTo(5.1 * 100, 4.4 * 100);
    pathRJ.lineTo(5.3 * 100, 4.1 * 100);
    pathRJ.lineTo(5.2 * 100, 4.0 * 100);
    pathRJ.lineTo(5.0 * 100, 4.2 * 100);
    pathRJ.lineTo(4.8 * 100, 4.3 * 100);
    pathRJ.lineTo(4.7 * 100, 4.3 * 100);
    pathRJ.closePath()
    treatEvent(execEvent, pathRJ, statesFillStyleDict["SUDESTE"])
}

//ESPIRITO SANTO
function drawES(execEvent) {
    pathES = new Path2D()
    pathES.moveTo(5.3 * 100, 4.1 * 100);
    pathES.lineTo(5.5 * 100, 4.0 * 100);
    pathES.lineTo(5.5 * 100, 3.8 * 100);
    pathES.lineTo(5.4 * 100, 3.7 * 100);
    pathES.lineTo(5.2 * 100, 4.0 * 100);
    pathES.lineTo(5.3 * 100, 4.1 * 100);
    pathES.closePath()
    treatEvent(execEvent, pathES, statesFillStyleDict["SUDESTE"])
}

//MATO GROSSO DO SUL
function drawMS(execEvent) {
    pathMS = new Path2D()
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
    treatEvent(execEvent, pathMS, statesFillStyleDict["CENTRO-OESTE"])
}

//GOIAS
function drawGO(execEvent) {
    pathGO = new Path2D()
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
    pathGO.lineTo(3.9 * 100, 2.9 * 100);
    pathGO.lineTo(3.7 * 100, 2.8 * 100);
    pathGO.lineTo(3.7 * 100, 3.1 * 100);
    pathGO.lineTo(3.6 * 100, 3.3 * 100);
    pathGO.lineTo(3.2 * 100, 3.6 * 100);
    pathGO.closePath()
    treatEvent(execEvent, pathGO, statesFillStyleDict["CENTRO-OESTE"])
}

//MATO GROSSO
function drawMT(execEvent) {
    pathMT = new Path2D()
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
    pathMT.lineTo(2.3 * 100, 2.6 * 100);
    pathMT.lineTo(2.3 * 100, 2.8 * 100);
    pathMT.lineTo(2.2 * 100, 3.0 * 100);
    pathMT.lineTo(2.2 * 100, 3.4 * 100);
    pathMT.lineTo(2.5 * 100, 3.4 * 100);
    pathMT.lineTo(2.7 * 100, 3.7 * 100);
    pathMT.lineTo(2.9 * 100, 3.5 * 100);
    pathMT.lineTo(3.1 * 100, 3.6 * 100);
    pathMT.lineTo(3.2 * 100, 3.6 * 100);
    pathMT.closePath()
    treatEvent(execEvent, pathMT, statesFillStyleDict["CENTRO-OESTE"])
}

//BAHIA
function drawBA(execEvent) {
    pathBA = new Path2D()
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
    treatEvent(execEvent, pathBA, statesFillStyleDict["NORDESTE"])
}

//SERGIPE
function drawSE(execEvent) {
    pathSE = new Path2D()
    pathSE.moveTo(5.9 * 100, 2.7 * 100);
    pathSE.lineTo(6.0 * 100, 2.5 * 100);
    pathSE.lineTo(5.8 * 100, 2.4 * 100);
    pathSE.lineTo(5.8 * 100, 2.5 * 100);
    pathSE.lineTo(5.7 * 100, 2.65 * 100);
    pathSE.lineTo(5.9 * 100, 2.7 * 100);
    pathSE.closePath()
    treatEvent(execEvent, pathSE, statesFillStyleDict["NORDESTE"])
}

//ALAGOAS
function drawAL(execEvent) {
    pathAL = new Path2D()
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
    treatEvent(execEvent, pathAL, statesFillStyleDict["NORDESTE"])
}

//PARAÍBA
function drawPB(execEvent) {
    pathPB = new Path2D()
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
    treatEvent(execEvent, pathPB, statesFillStyleDict["NORDESTE"])
    ctx.fillStyle = "#0099FF";
}

//PERNAMBUCO
function drawPE(execEvent) {
    pathPE = new Path2D()
    pathPE.moveTo(5.8 * 100, 2.4 * 100);
    pathPE.lineTo(5.82 * 100, 2.3 * 100);
    pathPE.lineTo(5.9 * 100, 2.35 * 100);
    pathPE.lineTo(6.2 * 100, 2.3 * 100);
    pathPE.lineTo(6.0 * 100, 2.5 * 100);
    pathPE.lineTo(5.8 * 100, 2.4 * 100);
    pathPE.closePath()
    treatEvent(execEvent, pathPE, statesFillStyleDict["NORDESTE"])
}

//AMAZONAS
function drawAM(execEvent) {
    pathAM = new Path2D()
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
    treatEvent(execEvent, pathAM, statesFillStyleDict["NORTE"])
    ctx.font = "40px Arial";
    ctx.fillStyle = "#000000"
    ctx.fillText("AM", 1.3 * 100, 1.65 * 100);
}

//RORAIMA
function drawRR(execEvent) {
    pathRR = new Path2D()
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
    treatEvent(execEvent, pathRR, statesFillStyleDict["NORTE"])
}

//TOCANTINS
function drawTO(execEvent) {
    pathTO = new Path2D()
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
    treatEvent(execEvent, pathTO, statesFillStyleDict["NORTE"])
}

//RONDONIA
function drawRO(execEvent) {
    pathRO = new Path2D()
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
    treatEvent(execEvent, pathRO, statesFillStyleDict["NORTE"])
}

//ACRE
function drawAC(execEvent) {
    pathAC = new Path2D()
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
    treatEvent(execEvent, pathAC, statesFillStyleDict["NORTE"])
}

//PARÁ
function drawPA(execEvent) {
    pathPA = new Path2D()
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
    treatEvent(execEvent, pathPA, statesFillStyleDict["NORTE"])
}

//AMAPÁ
function drawAP(execEvent) {
    pathAP = new Path2D()
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
    treatEvent(execEvent, pathAP, statesFillStyleDict["NORTE"])
}

//MARANHÃO
function drawMA(execEvent) {
    pathMA = new Path2D()
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
    treatEvent(execEvent, pathMA, statesFillStyleDict["NORDESTE"])
}

//PIAUÍ
function drawPI(execEvent) {
    pathPI = new Path2D()
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
    treatEvent(execEvent, pathPI, statesFillStyleDict["NORDESTE"])
}

//CEARÁ
function drawCE(execEvent) {
    pathCE = new Path2D()
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
    treatEvent(execEvent, pathCE, statesFillStyleDict["NORDESTE"])
}

//RIO GRANDE DO NORTE
function drawRN(execEvent) {
    pathRN = new Path2D()
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
    treatEvent(execEvent, pathRN, statesFillStyleDict["NORDESTE"])
}

function draw(state, execEvent) {
    if(typeof statesDrawFunctionDict[state] === 'function')
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
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#003300";
    } else if (evt == "mouseOver") {
        clearMouse();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#aeffff";
        canvas.style.cursor = "pointer";
    }
    else if (evt == "mouseLeft")
        treatEvent("onLoad", path, fillStyle)
    ctx.stroke(path);
}

function OverCanvas(evt) {
    clearMouse();
    canvas.style.cursor = "default";
    var posX = evt.clientX - canvas.offsetLeft + window.scrollX;
    var posY = evt.clientY - canvas.offsetTop + window.scrollY;
    draw(getPosState(posX, posY), "mouseOver")
}

function CanvasClick(evt) {
    // posição dos cliques descontando a distância da borda da janela
    var posX = evt.clientX - canvas.offsetLeft + window.scrollX;
    var posY = evt.clientY - canvas.offsetTop + window.scrollY;
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

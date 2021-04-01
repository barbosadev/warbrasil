players = ["P1", "P2", "P3", "P4", "P5"];

for (var i = 0; i < Object.keys(stateOwnerDict).length; i++) {
    stateOwnerDict[Object.keys(stateOwnerDict)[i]] = players[players.length * Math.random() | 0];
}

function setOwner(state, player) {
    stateOwnerDict[state] = player
    drawCanvas("onLoad")
}

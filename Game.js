var gameOver = false;
var spot;
var playerRow;
var playerColumn;
var exitRow;
var exitColumn;

var monster1 = {
	name : "Demon",
	hp : "40",
	attack : "5",
	prize : "Golden Key",
	runChallenge : function() {
		runChallenge(monster1);
	}
};

var monster2 = {
	name : "Flying Octopus",
	hp : "25",
	attack : "20",
	prize : "Candy Bar",
	runChallenge : function() {
		runChallenge(monster2);
	}
};

var monster3 = {
	name : "Friendly Skeleton",
	hp : "200",
	attack : "2",
	prize : "Trumpet",
	runChallenge : function() {
		runChallenge(monster3);
	}
};

var monster4 = {
	name : "Evil Caterpillar",
	hp : "100",
	attack : "10",
	prize : "A Broken Gun",
	runChallenge : function() {
		runChallenge(monster4);
	}
};

var gameMap = [ [ monster1, " ", " ", " ", " ", " ", " ", " " ],
		[ " ", " ", "W", monster2, " ", " ", monster3, " " ],
		[ " ", " ", " ", " ", " ", " ", " ", " " ],
		[ " ", " ", "W", monster4, " ", " ", " ", " " ],
		[ " ", monster1, " ", " ", " ", " ", " ", " " ],
		[ " ", monster4, "W", " ", " ", " ", " ", " " ],
		[ " ", " ", " ", monster2, " ", " ", " ", " " ],
		[ " ", " ", " ", " ", " ", " ", " ", " " ] ];

var user = {
	hp : "500",
	attack : "5",
	column : playerColumn,
	row : playerRow,
	prizes : []
};


var currentEvent = "You awaken in a dark corridor. Which way do you go?"

var movement = function(spot) {
	if (validSpot(spot) == true) {
		if (spot == "left") {
			if (gameMap[playerRow][playerColumn - 1] !== " "
					&& gameMap[playerRow][playerColumn - 1] !== "G") {
				$("#movementSet").hide();
				$("#challengeSet").show();				
				currentEvent = "A challenge lies ahead. Do you wish to continue?";
				var fight = document.getElementById('fightButton');
				fight.addEventListener('click', function(event) {
					gameMap[playerRow][playerColumn - 1].runChallenge();
					gameMap[playerRow][playerColumn] = " ";
					gameMap[playerRow][playerColumn - 1] = "S";
					document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "white";
					playerColumn -= 1;
					document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "#0069e2";
					$("#movementSet").show();
					$("#challengeSet").hide();
				});				
				var run = document.getElementById('runButton');
				run.addEventListener('click', function(event) {
					$("#movementSet").show();
					$("#challengeSet").hide();
				});
			} else {
				gameMap[playerRow][playerColumn] = " ";
				gameMap[playerRow][playerColumn - 1] = "S";
				document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "white";
				playerColumn -= 1;
				document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "#0069e2";
				currentEvent = "You moved 1 spot left.";
			}
		}
		
		if (spot == "right") {
			if (gameMap[playerRow][playerColumn + 1] !== " "
					&& gameMap[playerRow][playerColumn + 1] !== "G") {	
				$("#movementSet").hide();
				$("#challengeSet").show();
				currentEvent = "A challenge lies ahead. Do you wish to continue?";
				var fight = document.getElementById('fightButton');
				fight.addEventListener('click', function(event) {
						gameMap[playerRow][playerColumn + 1].runChallenge();
						gameMap[playerRow][playerColumn] = " ";
						gameMap[playerRow][playerColumn + 1] = "S";
						document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "white";
						playerColumn += 1;
						document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "#0069e2";
						$("#movementSet").show();
						$("#challengeSet").hide();
					});			
				var run = document.getElementById('runButton');
				run.addEventListener('click', function(event) {
					$("#movementSet").show();
					$("#challengeSet").hide();
				});
			} else {
				gameMap[playerRow][playerColumn] = " ";
				gameMap[playerRow][playerColumn + 1] = "S";
				document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "white";
				playerColumn += 1;
				document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "#0069e2";
				currentEvent = "You moved 1 spot right.";
			}
		}
		if (spot == "up") {
			if (gameMap[playerRow - 1][playerColumn] !== " "
					&& gameMap[playerRow - 1][playerColumn] !== "G") {
				$("#movementSet").hide();
				$("#challengeSet").show();
				currentEvent = "A challenge lies ahead. Do you wish to continue?";
				var fight = document.getElementById('fightButton');
				fight.addEventListener('click', function(event) {
						gameMap[playerRow - 1][playerColumn].runChallenge();
						gameMap[playerRow][playerColumn] = " ";
						gameMap[playerRow - 1][playerColumn] = "S";
						document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "white";
						playerRow -= 1;
						document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "#0069e2";
						$("#movementSet").show();
						$("#challengeSet").hide();
				});
				var run = document.getElementById('runButton');
				run.addEventListener('click', function(event) {
					$("#movementSet").show();
					$("#challengeSet").hide();
				});
			} else {
				gameMap[playerRow][playerColumn] = " ";
				gameMap[playerRow - 1][playerColumn] = "S";
				document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "white";
				playerRow -= 1;
				document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "#0069e2";
				currentEvent = "You moved 1 spot up.";
			}
		}

		if (spot == "down") {
			if (gameMap[playerRow + 1][playerColumn] !== " "
					&& gameMap[playerRow + 1][playerColumn] !== "G") {
				$("#movementSet").hide();
				$("#challengeSet").show();
				currentEvent = "A challenge lies ahead. Do you wish to continue?";
				var fight = document.getElementById('fightButton');
				fight.addEventListener('click', function(event) {
						gameMap[playerRow + 1][playerColumn].runChallenge();
						gameMap[playerRow][playerColumn] = " ";
						gameMap[playerRow + 1][playerColumn] = "S";
						document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "white";
						playerRow += 1;
						document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "#0069e2";
						$("#movementSet").show();
						$("#challengeSet").hide();
					
				});		
				var run = document.getElementById('runButton');
				run.addEventListener('click', function(event) {
					$("#movementSet").show();
					$("#challengeSet").hide();
				});
			} else {
				gameMap[playerRow][playerColumn] = " ";
				gameMap[playerRow + 1][playerColumn] = "S";
				document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "white";
				playerRow += 1;
				document.getElementById('board').rows[playerRow].cells[playerColumn].style.backgroundColor = "#0069e2";
				currentEvent = "You moved 1 spot down.";
			}
		}

	}else{
		currentEvent = "You can not move there.";
	}
}

var validSpot = function(choice) {
	if (choice == "left") {
		if (gameMap[playerRow][playerColumn - 1] !== "W"
				&& gameMap[playerRow][playerColumn - 1] !== undefined)
			return true;
	}
	if (choice == "right") {
		if (gameMap[playerRow][playerColumn + 1] !== "W"
				&& gameMap[playerRow][playerColumn + 1] !== undefined)
			return true;
	}
	if (choice == "up") {
		if (playerRow - 1 > -1) {
			if (gameMap[playerRow - 1][playerColumn] !== "W"
					&& gameMap[playerRow - 1][playerColumn] !== undefined)
				return true;
		} else {
			return false
		}
	}
	if (choice == "down") {
		if (playerRow + 1 < 8) {
			if (gameMap[playerRow + 1][playerColumn] !== "W"
					&& gameMap[playerRow + 1][playerColumn] !== undefined)
				return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function playerLocation(map) {
	for (var i = 0; i < map.length; i++) {
		var index = map[i].indexOf("S");
		if (index > -1) {
			playerRow = i;
			playerColumn = index;
			return [ i, index ];
		}
	}
}

function insertPlayer() {
	while (checkSG(gameMap, "S") == false) {
		insertSG(gameMap, "S");
	}
	while (checkSG(gameMap, "G") == false) {
		insertSG(gameMap, "G");
	}
}

function insertSG(map, key) {
	var column = Math.floor(Math.random() * 8);
	var row = Math.floor(Math.random() * 8);
	if (map[row][column] == " ")
		map[row][column] = key;
}

function checkSG(map, key) {
	var check = false;
	for (var i = 0; i < map.length; i++) {
		var index = map[i].indexOf(key);
		if (index > -1) {
			check = true;
		}
	}
	return check;
}

function setExit(map) {
	for (var i = 0; i < map.length; i++) {
		var index = map[i].indexOf("G");
		if (index > -1) {
			exitRow = i;
			exitColumn = index;
			return [ i, index ];
		}
	}
}

function checkWin() {
	if (user.prizes.length > 1 && gameMap[exitRow][exitColumn] == "S") {
		currentEvent = "You win!";
		$("#movementSet").hide();
		$("#challengeSet").hide();
	}
}

function runChallenge(monster) {
	currentEvent = "You have encountered a " + monster.name + ".";
	while (user.hp > 0 && monster.hp > 0) {
		var userAttackChance = 20 + Math.random() * 70;
		var monsterAttackChance = Math.random() * 100;
		if (userAttackChance > monsterAttackChance) {
			monster.hp -= user.attack;
		} else {
			user.hp -= monster.attack;
		}
	}
	if (user.hp > 0) {
		currentEvent += "You have won the battle! You found a "
				+ monster.prize + " from its body.";
		user.prizes.push(monster.prize);
	}
	if (user.hp < 1) {
		currentEvent = "You failed to defeat the monster. GAME OVER.";
		$("#movementSet").hide();
		$("#challengeSet").hide();
	}
}



insertPlayer(gameMap);
playerLocation(gameMap);
setExit(gameMap);

function colorTable(){
	for(i = 0; i < 8; i++){
		for(j = 0; j < 8; j++){
			if(gameMap[i][j] == "S") 
				document.getElementById('board').rows[i].cells[j].style.backgroundColor = "#0069e2";
			else
				document.getElementById('board').rows[i].cells[j].style.backgroundColor = "black";

		}
	}
}
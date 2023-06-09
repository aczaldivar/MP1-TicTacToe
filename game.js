//**/ * Tic tac toe in JS * Author:(Kefalidis, P) *
 //Date: (2023) * Code version:(v1) * Availability:
  //(https://github.com/thepeekay/simple-javascript-games/tree/main/tic-tac-toe) * **/


let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
let cells = document.querySelectorAll('td');
function determineFirstPlayer() {
  let player1 = Math.random();
  let player2 = Math.random();
  if (player1 > player2) {
    return 'X';
  } else {
    return 'O';
  }
}

let currentPlayer = determineFirstPlayer();

function displayMessage(message) {
  let messageElement = document.getElementById('message');
  messageElement.textContent = message;
}

displayMessage(`Player ${currentPlayer}'s turn`);

//checkForWinner();
//checkForTie();
//switchPlayers();

addEventListeners();

let player1 = 'X';
let player2 = 'O';

function switchPlayers() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  displayMessage(`Player ${currentPlayer}'s turn`);
}
function highlightWinnerCells(cells) {
  // Iterate over the cells and add a 'winner' class to each cell
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.add('winner');
  }
}

//**/ * Tic tac toe in JS * Author:(Kefalidis, P) *
 //Date: (2023) * Code version:(v1) * Availability:
  //(https://github.com/thepeekay/simple-javascript-games/tree/main/tic-tac-toe) * **/


function checkForWinner() {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let winner = null;

  winningCombinations.forEach(combination => {
    let [a, b, c] = combination;
    if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
      winner = board[a];
      console.log (checkForWinner)
      //highlightWinnerCells(combination);
    }
  });
  

  function displayMessage(message) {
    let messageElement = document.getElementById('message2');
    messageElement.textContent = message;
  }

  if (winner !== null) {
    displayMessage(`Player ${winner} wins!`);
    
  }
}
function checkForTie() {
  if (!board.includes(null)) {
    displayMessage('Tie game!');
    removeEventListeners();
  }
}
function updateGameBoard(index) {
  board[index] = currentPlayer;
  let cell = cells[index];
  cell.innerText = currentPlayer;
  cell.classList.add('active');
}

function addEventListeners() {
  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      if (board[index] === null) {
        updateGameBoard(index);
        checkForWinner();
        checkForTie();
        switchPlayers();
      }
    });
  });
}


function updateGameState(index) {
  board[index] = currentPlayer;
  let cell = cells[index];
  cell.innerText = currentPlayer;
  cell.classList.add('active');
  switchPlayers();
}
cells.forEach(cell => {
  cell.innerText = '';
  cell.classList.remove('active', 'winner');

});

function winningGame(){
 
  

}

function restartGame() {
  board = [
    null, null, null,
    null, null, null,
    null, null, null
  ];
  cells.forEach(cell => {
    cell.innerText = '';
    cell.classList.remove('active', 'winner');
  });
  currentPlayer = determineFirstPlayer();
  displayMessage(`Player ${currentPlayer}'s turn`);
  addEventListeners();
}

The following code is an array of empty cells and the name of the array is called ‘board’. 
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
We assign first player ‘X’ or and second player ‘O’ by creating a function. Math.random is used to determine a number between 0 and 1 and picks the first move to the play with the highest number.  
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
We display a message to help the player determine who’s turn it is. The turn will depend on a cell chosen and the message will change after a cell has been picked. 
let currentPlayer = determineFirstPlayer();

function displayMessage(message) {
  let messageElement = document.getElementById('message');
  messageElement.textContent = message;
}
displayMessage(`Player ${currentPlayer}'s turn`);

function checkForWinner() {
 winningCombinations is an array of cells that meet with each other horizontally, vertically, or horizontally. Those cells that meet next to each other are the winning combinations.
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
Winner is an empty array. 
  let winner = null;

There’s a combination of 3 separate boards. One called ‘a’, ‘b’ and then ‘c’. If board ‘a’ is not empty and is equal to the winning boards of ‘b’ and ‘c’ then ‘a’ is a winner. 
winningCombinations.forEach(combination => {
    let [a, b, c] = combination;
    if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
      winner = board[a];
}
  });
If winner is not on an empty array, the winning player wins and event listeners are removed from the board.
  if (winner !== null) {
    displayMessage(`Player ${winner} wins!`);
    removeEventListeners();
  }
}
This function is for tie games except for the empty array-null. Event listeners are removed after a tie game. 
function checkForTie() {
  if (!board.includes(null)) {
    displayMessage('Tie game!');
    removeEventListeners();
  }
}
This function updates cells in the board from the current player. Current player has an ‘active’ status. 
function updateGameBoard(index) {
  board[index] = currentPlayer;
  let cell = cells[index];
  cell.innerText = currentPlayer;
  cell.classList.add('active');
}
This function adds event listeners to each cell or index in the board. Event listeners listen for clicks on each cell. If the board is empty, look for updating board game, check for winner, check for tie and switch players invocation. 
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
function removeEventListeners() {
  cells.forEach(cell => {
    cell.removeEventListener('click', switchPlayers);
  });
}

The game will be updated after the current player has clicked from its active status. 
function updateGameState(index) {
  board[index] = currentPlayer;
  let cell = cells[index];
  cell.innerText = currentPlayer;
  cell.classList.add('active');
  switchPlayers();
}
The game will restart with an empty array board. Removing each cell its active status. Starting a new cycle and displaying the current player’s turn with event listeners. 
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
This is a continuation of the game using Boolean expression.
let gameIsOver = false;















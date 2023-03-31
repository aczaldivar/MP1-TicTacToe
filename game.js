const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  
  function determinePlayer1() {
  let player1 = Math.random();
  let player2 = Math.random();
    if (player1 > player2) {
          return 'X';
    } else {
     return 'O';
    }
  }
  
 let currentPlayer = determinePlayer1();

  function displayMessage(message) {
    let messageElement = document.getElementById('message');
    messageElement.textContent = message;
  }
  
  displayMessage(`Player ${currentPlayer}'s turn`);

  checkForWinner();
  checkForTie();
  switchPlayers();
  let cell = document.getElementById("id");
  cell.innerText= 'X';

  function addEventListeners() {
    cell.forEach((cell, index) => {
    cell.addEventListener('click', () => {
       if (board[index] === null) {
         board[index] = currentPlayer;
         cell.innerText = currentPlayer;
         cell.classList.add('active');
         checkForWinner();
         checkForTie();
         switchPlayers();
       }
      });
    });
  }
  
  addEventListeners();
 const cells = document.querySelect(index);
  let player1= 'X';
  let player2= 'O';
 function switchPlayers() {
  if (currentPlayer === 'X') {
   currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  displayMessage(`Player ${currentPlayer}'s turn`);
}

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
     highlightWinnerCells(combination);
   }
  });

 if (winner !== null) {
    displayMessage(`Player ${winner} wins!`);
   removeEventListeners();
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


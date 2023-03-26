const myArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  
  
  let coordinates = [
    {row: 0, col: 0},
    {row: 0, col: 1},
    {row: 0, col: 2},
    {row: 1, col: 0},
    {row: 1, col: 1},
    {row: 1, col: 2},
    {row: 2, col: 0},
    {row: 2, col: 1},
    {row: 2, col: 2},
  ];
  
  // Mark Xs on the array at the specified coordinates
 
  for (let i = 0; i < coordinates.length; i++) {
    let coord = coordinates[i];
    array[coord.row][coord.col] = 'X';
  }
  
  const grid = document.getElementById('grid-container');

  // Attach an event listener to each cell in the grid
  for (let row = 0; row < grid.rows.length; row++) {
    for (let col = 0; col < grid.rows[row].cells.length; col++) {
      grid.rows[row].cells[col].addEventListener('click', function() {
        // Retrieve the row and column index of the clicked cell
        const rowIndex = row;
        const colIndex = col;

        console.log(`Clicked cell at row ${rowIndex}, column ${colIndex}`);
      });
    }
  }



  //function coordinatesAreEqual(coord1, coord2) {
    // Check if the row and column values are the same
  //  return coord1.row === coord2.row && coord1.col === coord2.col;
 // }
  

//const gridContainer = document.getElementById("grid");
//const table = document.createElement("grid");

//for (let i = 0; i < myArray.length; i++) {
 // const row = document.createElement("tr");
 // for (let j = 0; j < myArray[i].length; j++) {
  //  const cell = document.createElement("td");
  //  cell.innerHTML = myArray[i][j];
  //  row.appendChild(cell);
  //}
  //table.appendChild(row);
//}

//gridContainer.appendChild(table);


function deadalive() {
  var deadAliveTable = document.querySelector('#deadoralive');
  var tableRow = '';
  var temp;
  var dead = 0;
  var alive = 0;
  for (var i = gameOfThronesCharacters.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (gameOfThronesCharacters[j].name > gameOfThronesCharacters[j + 1].name) {
        temp = gameOfThronesCharacters[j];
        gameOfThronesCharacters[j] = gameOfThronesCharacters[j + 1];
        gameOfThronesCharacters[j + 1] = temp;
      }
    }
  }
  for (i = 0; i < gameOfThronesCharacters.length; i++) {
    if (gameOfThronesCharacters[i].dead === true) {
      dead++;
      tableRow += `
      <tr>
        <td></td>
        <td>${gameOfThronesCharacters[i].name}</td>
      </tr>
      `;
    } else {
      alive++;
      tableRow += `
      <tr>
        <td>${gameOfThronesCharacters[i].name}</td>
        <td></td>
      </tr>
      `;
    }
  }
  tableRow += `
  <tr></tr>
 
  <tr>
    <td>Összesen: ${alive}</td>
    <td>${dead}</td>
  </tr> `;
  deadAliveTable.innerHTML = tableRow;
}
deadalive();
function deadalive() {
  var deadAliveTable = document.querySelector('#deadoralive');
  var tableRow = '';
  var temp;
  var dead = 0;
  var alive = 0;
<<<<<<< HEAD
  for (var i = gameOfThronesCharacters.length-1; i > 0; i--) {
=======
  for (var i = gameOfThronesCharacters.length - 1; i > 0; i--) {
>>>>>>> 72392f581af14f6aa3e96a66e630729bd05b15d2
    for (var j = 0; j < i; j++) {
      if (gameOfThronesCharacters[j].name > gameOfThronesCharacters[j + 1].name) {
        temp = gameOfThronesCharacters[j];
        gameOfThronesCharacters[j] = gameOfThronesCharacters[j + 1];
        gameOfThronesCharacters[j + 1] = temp;
      }
    }
  }
<<<<<<< HEAD
  for ( i = 0; i < gameOfThronesCharacters.length; i++) {
=======
  for (i = 0; i < gameOfThronesCharacters.length; i++) {
>>>>>>> 72392f581af14f6aa3e96a66e630729bd05b15d2
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
    <td>Össz:</td>
  </tr>
  <tr>
    <td>${alive}</td>
    <td>${dead}</td>
  </tr> `;
  deadAliveTable.innerHTML = tableRow;
}
deadalive();

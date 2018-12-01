function deadalive() {
  var deadAliveTable = document.querySelector('#deadoralive');
  var tableRow = '';

  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    tableRow += `
    <tr>
       <td>${gameOfThronesCharacters[i].name}</td>
       <td>${gameOfThronesCharacters[i].dead}</td>
    </tr>
  `;
  }
  deadAliveTable.innerHTML = tableRow;
}
deadalive();

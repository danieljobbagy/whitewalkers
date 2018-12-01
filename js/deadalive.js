function deadalive() {
  var deadAliveTable = document.querySelector('#deadoralive');
  var tableRow = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    alert('for');
    tableRow += `
    <tr>
       <td>${gameOfThronesCharacters[i].name}</td>
       <td>${gameOfThronesCharacters[i].dead}</td>
    </tr>
  `;
  }
  alert('after');
  deadAliveTable.innerHTML = tableRow;
}
deadalive();

function organisations() {
  var organisationsTableElement = document.querySelector('#organisations');
  var tableRow = '';
  var nightwatch = 0;
  var royalguard = 0;
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    // if (gameOfThronesCharacters[i].organization === undefined) {
    // continue;
    // }
    if (gameOfThronesCharacters[i].organization === 'nightwatch') {
      nightwatch += 1;
    }
    tableRow =
      `
                <tr>
                    <td>Nightwatch</td>
                    <td>${nightwatch}
                </tr>
                    `;
    if (gameOfThronesCharacters[i].organization === 'royalguard') {
      royalguard += 1;
    }
    tableRow +=
      `
                <tr>
                    <td>Royalguard</td>
                    <td>${royalguard}
                </tr>
                    `;
  }
  organisationsTableElement.innerHTML = tableRow;
}
organisations();

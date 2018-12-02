/* globals gameOfThronesCharacters */

function organisations() {
  var organisationsTableElement = document.querySelector('#organisations');
  var tableRow = '';
  var nightwatch = 0;
  var royalguard = 0;
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    if (gameOfThronesCharacters[i].organization === 'nightwatch') {
      nightwatch += 1;
    }
    tableRow =
      `
                <tr>
                    <td class='organisations__cells'>Nightwatch</td>
                    <td class='organisations__cells'>${nightwatch}
                </tr>
                    `;
    if (gameOfThronesCharacters[i].organization === 'royalguard') {
      royalguard += 1;
    }
    tableRow +=
      `
                <tr>
                    <td class='organisations__cells'>Royalguard</td>
                    <td class='organisations__cells'>${royalguard}
                </tr>
                    `;
  }
  organisationsTableElement.innerHTML = tableRow;
}
organisations();

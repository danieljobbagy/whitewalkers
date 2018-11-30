function charactertable() {
  var charactersTableElement = document.querySelector('#characters');
  var tableRow;
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    var firstname;
    var house;
    if (gameOfThronesCharacters[i].house === undefined) {
      house = '';
    } else {
      house = gameOfThronesCharacters[i].house;
    }
    if (gameOfThronesCharacters[i].name.split(' ').length > 1) {
      firstname = gameOfThronesCharacters[i].name.split(' ').slice(0, -1);
    } else {
      firstname = gameOfThronesCharacters[i].name;
    }
    tableRow +=
      `
                <tr>
                    <td>${gameOfThronesCharacters[i].name}</td>
                    <td>
                      <img src="/img/${firstname}.png" alt="${gameOfThronesCharacters[i].name}">
                      </td>
                      <td> ${house} <img src ="/img/houses/${house}.png" alt = "${house}" >
                      </td>
                </tr>
                    `;
  }
  charactersTableElement.innerHTML = tableRow;
}

charactertable();

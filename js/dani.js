function deleteRow(r) {
  var i = r.parentNode.parentNode.parentNode.rowIndex;
  document.getElementById('characters').deleteRow(i);
}


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
                      <td> ${house} <br><img src ="/img/houses/${house}.png" alt = "${house}" >
                      </td>
                      <td> ${gameOfThronesCharacters[i].bio}
                      </td>
                      <td> <button onclick="edit()">Edit</button><button onclick="deleteRow(this)">Delete</button>
                      </td>
                </tr>
                    `;
  }
  charactersTableElement.innerHTML = tableRow;
}

charactertable();

function deleteRow(r) {
  var i = r.parentNode.parentNode.parentNode.rowIndex;
  document.getElementById('characters').deleteRow(i);
}

function editBio() {

}

function charactertable() {
  var charactersTableElement = document.querySelector('#characters');
  var tableRow = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    var house;
    if (gameOfThronesCharacters[i].house === undefined) {
      house = '';
    } else {
      var prehouse = gameOfThronesCharacters[i].house;
      house = prehouse.charAt(0).toUpperCase() + prehouse.slice(1);
    }
    tableRow +=
      `
                <tr>
                    <td>${gameOfThronesCharacters[i].name}</td>
                    <td>
                      <img src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}">
                      </td>
                      <td> ${house} <br><img src ="/img/houses/${house}.png" alt = "${house}" >
                      </td>
                      <td id="bio${i}"> ${gameOfThronesCharacters[i].bio}
                      </td>
                      <td> <button onclick="edit()" id=>Edit</button><button onclick="deleteRow(this)">Delete</button>
                      </td>
                </tr>
                    `;
  }
  charactersTableElement.innerHTML = tableRow;
}

charactertable();

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  var table = document.getElementById('table');
  table.deleteRow(row.rowIndex);
}


/* /function editBio(bioID) {
  var bio = document.getElementById('bioID');
  bio.setAttribute('contentEditable', 'true');
}*/

function charactertable() {
  var charactersTableElement = document.querySelector('#characters');
  var tableRow = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    var house;
    var bioID = `bio${i}`;
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
                      <td> ${house} <br><img src ="/img/houses/${house}.png" alt="${house}" >
                      </td>
                      <td id="bioID" contenteditable="false"> ${gameOfThronesCharacters[i].bio}
                      </td>
                      <td> <button onclick="editBio(${i})">Edit</button><input type="button" value="Delete" onclick="deleteRow(this)">
                      </td>
                </tr>
                    `;
  }
  charactersTableElement.innerHTML = tableRow;
}

charactertable();

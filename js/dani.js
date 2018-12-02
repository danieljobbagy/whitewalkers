/* globals gameOfThronesCharacters */

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  var table = document.getElementById('table');
  table.deleteRow(row.rowIndex);
}

function editBio(no) {
  var bio = document.getElementById('bio' + no);
  var biodata = bio.innerHTML;
  bio.innerHTML = `<textarea rows="4" cols="100">${biodata}</textarea>`;
}

function charactertable() {
  var charactersTableElement = document.querySelector('#characters');
  var tableRow = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    var house;
    // var bioID = `bio${i}`;
    if (gameOfThronesCharacters[i].house === undefined) {
      house = '';
    } else {
      var prehouse = gameOfThronesCharacters[i].house;
      house = prehouse.charAt(0).toUpperCase() + prehouse.slice(1);
    }
    tableRow +=
      `
                <tr>
                    <td class='characters__table__cells'>${gameOfThronesCharacters[i].name}</td>
                    <td class='characters__table__cells'>
                      <img src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}">
                      </td>
                      <td class='characters__table__cells'> ${house} <br><img src ="img/houses/${house}.png" alt="${house}" >
                      </td>
                      <td class='characters__table__cells' id="bio${i}"> ${gameOfThronesCharacters[i].bio}
                      </td>
                      <td class='characters__table__cells'> <button onclick="editBio(${i})">Edit</button><input type="button" value="Delete" onclick="deleteRow(this)">
                      </td>
                </tr>
                    `;
  }
  charactersTableElement.innerHTML = tableRow;
}

charactertable();

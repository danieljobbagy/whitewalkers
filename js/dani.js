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
                    <td class='characters__table__cells-name'>${gameOfThronesCharacters[i].name}</td>
                    <td class='characters__table__cells-portrait'>
                      <img src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}">
                      </td>
                      <td class='characters__table__cells-flag'> ${house} <br><img src ="img/houses/${house}.png" alt="${house}" >
                      </td>
                      <td class='characters__table__cells-bio' id="bio${i}"> ${gameOfThronesCharacters[i].bio}
                      </td>
                      <td class='characters__table__cells-buttons'> 
                      <input type:"button" class='characters__table__buttons-edit' onclick="editBio(${i})" value="Edit">
                      <input class='characters__table__buttons-delete' type="button" value="Delete" onclick="deleteRow(this)">
                      </td>
                </tr>
                    `;
  }
  charactersTableElement.innerHTML = tableRow;
}

charactertable();

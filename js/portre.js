function charactersPortrait() {
  var portraitRowElement = document.querySelector('#portreoldal');
  var portraitRow = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    portraitRow +=
      ` 
                    <div class="portre_main_boxes">
                        <img src="${gameOfThronesCharacters[i].portrait}" alt="${gameOfThronesCharacters[i].name}"> <br> 
                        ${gameOfThronesCharacters[i].name}
                        </div>
                  `;
  }
  portraitRowElement.innerHTML = portraitRow;
}
charactersPortrait();
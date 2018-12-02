var characterUrl = [
  'https://gameofthrones.fandom.com/wiki/Jon_Snow',
  'https://gameofthrones.fandom.com/wiki/Eddard_Stark',
  'https://gameofthrones.fandom.com/wiki/Arya_Stark',
  'https://gameofthrones.fandom.com/wiki/Sansa_Stark',
  'https://gameofthrones.fandom.com/wiki/Robb_Stark',
  'https://gameofthrones.fandom.com/wiki/Bran_Stark',
  'https://gameofthrones.fandom.com/wiki/Rickon_Stark',
  'https://gameofthrones.fandom.com/wiki/Catelyn_Stark',
  'https://gameofthrones.fandom.com/wiki/Theon_Greyjoy',
  'https://gameofthrones.fandom.com/wiki/Robert_Baratheon',
  'https://gameofthrones.fandom.com/wiki/Cersei_Lannister',
  'https://gameofthrones.fandom.com/wiki/Tywin_Lannister',
  'https://gameofthrones.fandom.com/wiki/Jaime_Lannister',
  'https://gameofthrones.fandom.com/wiki/Tyrion_Lannister',
  'https://gameofthrones.fandom.com/wiki/Joffrey_Baratheon',
  'https://gameofthrones.fandom.com/wiki/Tommen_Baratheon',
  'https://gameofthrones.fandom.com/wiki/Myrcella_Baratheon',
  'https://gameofthrones.fandom.com/wiki/Petyr_Baelish',
  'https://gameofthrones.fandom.com/wiki/Varys',
  'https://gameofthrones.fandom.com/wiki/Daenerys_Targaryen',
  'https://gameofthrones.fandom.com/wiki/Jorah_Mormont',
  'https://gameofthrones.fandom.com/wiki/Viserys_Targaryen',
  'https://gameofthrones.fandom.com/wiki/Benjen_Stark',
  'https://gameofthrones.fandom.com/wiki/Aemon',
  'https://gameofthrones.fandom.com/wiki/Stannis_Baratheon',
  'https://gameofthrones.fandom.com/wiki/Renly_Baratheon',
  'https://gameofthrones.fandom.com/wiki/Bronn',
  'https://gameofthrones.fandom.com/wiki/Drogo',
  'https://gameofthrones.fandom.com/wiki/Hodor',
  'https://gameofthrones.fandom.com/wiki/Luwin',
  'https://gameofthrones.fandom.com/wiki/Lysa_Arryn',
  'https://gameofthrones.fandom.com/wiki/Illyrio_Mopatis',
  'https://gameofthrones.fandom.com/wiki/Pycelle',
  'https://gameofthrones.fandom.com/wiki/Samwell_Tarly',
  'https://gameofthrones.fandom.com/wiki/Sandor_Clegane',
  'https://gameofthrones.fandom.com/wiki/Shae',
  'https://gameofthrones.fandom.com/wiki/Alliser_Thorne',
  'https://gameofthrones.fandom.com/wiki/Syrio_Forel',
  'https://gameofthrones.fandom.com/wiki/Gendry',
  'https://gameofthrones.fandom.com/wiki/Loras_Tyrell',
  'https://gameofthrones.fandom.com/wiki/Barristan_Selmy',
  'https://gameofthrones.fandom.com/wiki/Osha',
  'https://gameofthrones.fandom.com/wiki/Jeor_Mormont',
  'https://gameofthrones.fandom.com/wiki/Balon_Greyjoy',
  'https://gameofthrones.fandom.com/wiki/Davos_Seaworth',
  'https://gameofthrones.fandom.com/wiki/Melisandre',
  'https://gameofthrones.fandom.com/wiki/Margaery_Tyrell',
  'https://gameofthrones.fandom.com/wiki/Yara_Greyjoy',
  'https://gameofthrones.fandom.com/wiki/Brienne_of_Tarth',
  'https://gameofthrones.fandom.com/wiki/Ygritte',
  'https://gameofthrones.fandom.com/wiki/Roose_Bolton'
];

var gotCharacter = document.querySelector('#charactersGot');
var pictureGot = '';

window.onload = function () {
  gotGallery();

  function gotGallery() {
    for (var i = 0; i < gameOfThronesCharacters.length; i++) {
      pictureGot += `<div class='pictures__characters'><a href="${characterUrl[i]}">
    <img src="${gameOfThronesCharacters[i].picture}" alt="${gameOfThronesCharacters[i].name}">
    </a></div>`;
    }
    gotCharacter.innerHTML = pictureGot;
  }
};

var gameOfThronesHouses = document.querySelector('#gotHouses');
var gotTableRow = '';
var houseNum1 = 0;
var houseNum2 = 0;
var houseNum3 = 0;
var houseNum4 = 0;
var houseNum5 = 0;
var houseNum6 = 0;
var houseNum7 = 0;
var houseNum8 = 0;
var houseNum9 = 0;

function gotHouses() {
  for (var i = 0; i < gameOfThronesCharacters.length; i += 1) {
    if (gameOfThronesCharacters[i].house === 'baratheon') {
      houseNum1 += 1;
    }
    gotTableRow = `
        <thead>
      <th class='houses__header__cells'>Címer</th>
      <th class='houses__header__cells'>Név</th>
      <th class='houses__header__cells'>Fő</th>
      </thead>
        <tr class='houses__rows'>
        <td class='houses__cells'> <img src="${'img/houses/baratheon.png'}" alt='baratheonflag'></td>
        <td class='houses__cells'>Baratheon</td>
        <td class='houses__cells'>${houseNum1}</td>
        </tr>
        `;
    if (gameOfThronesCharacters[i].house === 'clegane') {
      houseNum2 += 1;
    }
    gotTableRow += `
        <tr class='houses__rows'>
        <td class='houses__cells'> <img src="${'img/houses/clegane.png'}" alt='cleganeflag'></td>
        <td class='houses__cells'>Clegane</td>
        <td class='houses__cells'>${houseNum2}</td>
        </tr>
        `;
    if (gameOfThronesCharacters[i].house === 'greyjoy') {
      houseNum3 += 1;
    }
    gotTableRow += `
        <tr class='houses__rows'>
        <td class='houses__cells'> <img src="${'img/houses/greyjoy.png'}" alt='greyjoyflag'></td>
        <td class='houses__cells'>Greyjoy</td>
        <td class='houses__cells'>${houseNum3}</td>
        </tr>
        `;
    if (gameOfThronesCharacters[i].house === 'lannister') {
      houseNum4 += 1;
    }
    gotTableRow += `
        <tr class='houses__rows'>
        <td class='houses__cells'> <img src="${'img/houses/lannister.png'}" alt='lannisterflag'></td>
        <td class='houses__cells'>Lannister</td>
        <td class='houses__cells'>${houseNum4}</td>
        </tr>
        `;
    if (gameOfThronesCharacters[i].house === 'mormont') {
      houseNum5 += 1;
    }
    gotTableRow += `
        <tr class='houses__rows'>
        <td class='houses__cells'> <img src="${'img/houses/mormont.png'}" alt='mormontflag'></td>
        <td class='houses__cells'>Mormont</td>
        <td class='houses__cells'>${houseNum5}</td>
        </tr>
        `;
    if (gameOfThronesCharacters[i].house === 'stark') {
      houseNum6 += 1;
    }
    gotTableRow += `
        <tr class='houses__rows'>
        <td class='houses__cells'> <img src="${'img/houses/stark.png'}" alt='starkflag'></td>
        <td class='houses__cells'>Stark</td>
        <td class='houses__cells'>${houseNum6}</td>
        </tr>
        `;
    if (gameOfThronesCharacters[i].house === 'targaryen') {
      houseNum7 += 1;
    }
    gotTableRow += `
        <tr class='houses__rows'>
        <td class='houses__cells'> <img src="${'img/houses/targaryen.png'}" alt='targaryenflag'></td>
        <td class='houses__cells'>Targaryen</td>
        <td class='houses__cells'>${houseNum7}</td>
        </tr>
        `;
    if (gameOfThronesCharacters[i].house === 'tarly') {
      houseNum8 += 1;
    }
    gotTableRow += `
        <tr class='houses__rows'>
        <td class='houses__cells'> <img src="${'img/houses/tarly.png'}" alt='tarlyflag'></td>
        <td class='houses__cells'>Tarly</td>
        <td class='houses__cells'>${houseNum8}</td>
        </tr>
        `;
    if (gameOfThronesCharacters[i].house === 'tully') {
      houseNum9 += 1;
    }
    gotTableRow += `
        <tr class='houses__rows'>
        <td class='houses__cells'> <img src="${'img/houses/tully.png'}" alt='tullyflag'></td>
        <td class='houses__cells'>Tully</td>
        <td class='houses__cells'>${houseNum9}</td>
        </tr>
        `;
  }
  gameOfThronesHouses.innerHTML = gotTableRow;
}
gotHouses();

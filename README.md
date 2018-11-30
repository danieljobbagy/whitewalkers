# Projektfeladat

## Feladatkiírás
Egy nem responsive holnapot kell készítenetek, melyek témája a Trónok Harca sorozat.  
A projekt feladatait egymás között ti osztjátok ki csapatszinten.

## Alapkövetelmények
* Szematikus html elemek használata kötelező
* Valid html markup legyen.
* A css class elnevezések a BEM metodika szerint történjenek
* A css tulajdonságok ABC sorrendbe legyenek rendezve
* Nem lehet ESLint hiba (airbnb-es5 konfiguráció)
* A Clean coding szabályait tartsátok be.
* Az oldalaknál a függvények ne eseményre hívódjanak meg, hanem amikor az oldal akkor a javascriptben hívjuk meg őket rögtön. Tehát:
```javascript
    function myGotFunction(){
        // ... do something
    }

    myGotFunction();    
```
* A karaktereket tartalmazó objektumot TILOS MÓDOSÍTANI, MÁSOLNI stb.!!!
* Git-et használni KÖTELEZŐ a projekt során, gyakran kommitoljatok, pusholjatok, beszédes commit message-eket írjatok!


## Design
* A design szabadon megválasztható, de esztétikus legyen, és kapcsolódjon az oldal témájához.  
* A `.container` elem maximum 1140px széles legyen, kétoldalt 15px-es padding-gel,
és a képernyőn középre legyen igazítva.  
* Használhatók egyéni betűtípusok, ikonok.  
* Az oldal alap felépítése a következőképpen nézzen ki szemantikus html elemekkel:
```html
    <div class="container">
        <nav>
            
        </nav>
        <header>

        </header> 
        <main>

        </main>
        <footer>

        </footer>
    <div class="container">
        
    VAGY

    <nav class="container">
            
    </nav>
    <header class="container">

    </header> 
    <main class="container">

    </main>
    <footer class="container">

    </footer>
```
* A tartalmi rész mindig a `main` elemen belül lesz. Pl.:
```html
    <main class="container">
        <div class="gallery">

        </div>
    </main>
    VAGY
    <main>
        <div class="statistic">
            <table class="statistic__table">

            </table>
        </div>
    </main>
```
Ezeken kívül minden elem javascript segítségével dinamikusan lesz generáltatva!
* A böngészőben zoom in/out esetén nem szabad szétesnie az oldalnak.

## Menüpontok
* Karakterek
* Statisztika (lenyíló menü)
    * Élő/Halott karakterek
    * Házak
    * Szervezetek
* Portrék
* Galéria

### Karakterek
A karakterek menüpont egy táblázatban tartalmazza az alábbiak szerint a karakterek adatait:
| Név           | Portré        | Ház           | Bio           |               |       
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Content Cell  | Content Cell  | Content Cell  | Content Cell  | Edit/Delete   |
| Content Cell  | Content Cell  | Content Cell  | Content Cell  | Edit/Delete   |

* A HÁz mező az adott hát nevét is címerát is tartalmazza.
* Ha valamelyik karakter nem tartozik egyik háthoz sem, úgy az a cella üresen marad.  
* Az utolsó oszlop egy Edit és Delete gombot tartalmaz.  
* A delete gomra kattintva az adott sort ki kell törölni a táblázatból.  
* Az edit gombra kattintva az adott karakter története (Bio) szerkeszthető lesz. 

### Statisztika
A Statisztika menüpont egy lenyíló menü. Három almenüt tartalmaz.

#### Statisztika - Élő/Halott karakterek
Kilistázza egymás mellé két 50%-os szélességű div-be az élő karakterek neveit,
és a halott karakterek neveit ABC sorrendben, és alul megjelenik, hogy hány darab karakter van aki él, és aki halott.

#### Statisztika - Házak
Kilistázza a házak neveit a címerükkel együtt, és számszerűen azt, hogy az adott házba hány karakter tartozik. (Élők és halottak együtt, nem kell szűrni a csak élőkre.)

#### Statisztika - Szervezetek
Kilistázza a szervezetek neveit, és számszerűen azt, hogy az adott szervezethez hány karakter tartozik.  (Élők és halottak együtt, nem kell szűrni a csak élőkre.)

### Portrék
Megjeleníti  a karakterek profil képét, és alatt a nevüket. Az adatokat nem táblázatos formában, hanem div-ekbe kell elhelyezni. Egymás mellé 6 karakter kerüljön.

## Galéria
Meg kell jeleníteni az összes picture tulajdonságokban lévő képet. Egymás mellé 4 kép kerüljön. A képeken kívül semmi mást nem kell megjeleníteni ezen az oldalon.

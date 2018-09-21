Aplikacja ASP.NET napisana w Visual Studio 2013.
Projekt zawiera:
-Main.html - glówna strona bedaca jednoczesnie rezultatem.

-Folder Content - zawiera potrzebne obrazki.

-Folder Scripts - zawiera:
*jquery.js
*underscore.js - w celu szybszego iterowania po elementach storny
*interact.js - w celu zrealizowania funkconalnosci drag&drop
*main.js - glówny plik aplikacji
*dragable-creator.js - modul odpowiedzialny za dodanie mozliwosci drag&drop
*json-manager.js - modul odpowiedzialny za pobranie JSON z pliku
*site-creator.js - modul odpowiedzialny za tworzenie dynamiczne strony

-Folder Templates - zawiera plik json z template'm strony.

W celu uruchomienia wystarczy zbudowac i uruchomic w Visual Studio 2013.
Elementy na stronie mozna przesuwac oraz zmieniac ich rozmiar. Informacje o modyfikacjach
elementów strony sa umieszczone w konsoli przegladarki tzn. prawym przyciskiem 
myszy kliknac na stronie wybrac 'zbadaj element' i przejsc do zakladki 'konsola'.
Niestety nie udalo mi sie dopracowac elemnetu polygon, stad widoczny kwadrat zamiast
trójkata, ale chcialem sie zmiescic w 5 godzinach, stad ten efekt. Pozdrawiam.
Wykorzystane patterny to Module pattern z object literal. 

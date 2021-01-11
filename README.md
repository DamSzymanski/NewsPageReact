# NewsPageReact

Projekt powstał w celu poszerzenia wiedzy na temat Reacta i współpracujących z nim technologii. Zadaniem aplikacji jest imitacja rzeczywistego portalu informacyjnego. W ramach aplikacji użytkownik może przeglądać newsy dodane przez administratora, a także czytać wygenerowane z backendu komentarze, utworzone za pomocą biblioteki Faker. 
W aplikacji znajduje się także panel administracyjny, do którego dostępu pilnuje Firebase Authentication. To samo tyczy się funkcji, które panel dostarcza, gdyż są one walidowane przez backend za pomocą tokenu. 

Za warstwę wizualną odpowiada MDBootstrap. Dostarcza on wiele przydatnych komponentów i jest łatwy w implementacji. 

Dane przechowywane są w bazie MongoDB.

W aplikacji znajdują się widoki:
* Home - wyświetla listę newsów 

* Login - panel logowania, jeśli serwis Firebase zatwierdzi użytkownika (jest zalogowany), przeniesie go do Dashboardu 

* Dashboard - panel administracyjny

* About - informacje o stronie

* NewsDetails - Szczegóły newsa, zawiera także komponent Comments z wygenerowaną z backendu listą komentarzy.



Domyślny url aplikacji do `http://localhost:3000`

NewsPageReact jest częścią większego rozwiązania, którego częścią backendową jest [NewsPageApi](https://github.com/DamSzymanski/NewsPageApi)

## Uruchumienie

Otwórz folder projektu i użyj komendy: `npm install`, a następnie `npm start`

## Technologie
* React
* Firebase
* [MDBootstrap](https://mdbootstrap.com)
* MongoDB

## Contact
darreur@gmail.com



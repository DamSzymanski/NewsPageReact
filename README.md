# NewsPageReact

Projekt powstał w celu poszerzenia wiedzy na temat Reacta i współpracujących z nim technologii. Zadaniem aplikacji jest imitacja rzeczywistego portalu informacyjnego. W ramach aplikacji użytkownik może przeglądać newsy dodane przez administratora, a także czytać wygenerowane z backendu komentarze, utworzone za pomocą biblioteki Faker. 
W aplikacji znajduje się także panel administracyjny, do którego dostępu pilnuje Firebase Authentication. To samo tyczy się funkcji, które panel dostarcza, gdyż są one walidowane przez backend za pomocą tokenu. 

Za warstwę wizualną odpowiada framework MDBootstrap. Dostarcza on wiele przydatnych komponentów i jest łatwy w implementacji. 

Dane przechowywane są w bazie MongoDB.

W aplikacji znajdują się widoki:
* Home - wyświetla listę newsów <br />
<img src="https://github.com/DamSzymanski/NewsPageReact/blob/master/public/home.png" width="500" /><br />
* Login - panel logowania, jeśli serwis Firebase zatwierdzi użytkownika (jest zalogowany), przeniesie go do Dashboardu <br/>
<img src="https://github.com/DamSzymanski/NewsPageReact/blob/master/public/logowanie.PNG" width="500" /><br />
* Dashboard - panel administracyjny <br />
<img src="https://github.com/DamSzymanski/NewsPageReact/blob/master/public/panel1.PNG" width="500"/><br />
<img src="https://github.com/DamSzymanski/NewsPageReact/blob/master/public/panel2.PNG" width="500"/><br />
<img src="https://github.com/DamSzymanski/NewsPageReact/blob/master/public/panel3.PNG" width="500"/><br />
<img src="https://github.com/DamSzymanski/NewsPageReact/blob/master/public/panel4.PNG" width="500"/><br />
<img src="https://github.com/DamSzymanski/NewsPageReact/blob/master/public/panel5.PNG" width="500"/><br />

* NewsDetails - widok ze szczegółami newsa, zawiera także komponent Comments z wygenerowaną z backendu listą komentarzy. <br />
<img src="https://github.com/DamSzymanski/NewsPageReact/blob/master/public/details.PNG" width="500" /><br />

* About - informacje o stronie <br />

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



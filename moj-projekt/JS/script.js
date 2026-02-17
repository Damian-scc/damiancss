//================================
            // PODSTAWY JAVASCRIPT - KLASA 1 TECHNIKUM
            //================================

            // 1. ZMIENNE - służą do przechowywania danych
            // --------------------------------------------------------

            // let - zmienna, której wartość może się zmieniać
            let imie = "Jan";

            // const - stała, której wartość nie może się zmieniać
            const nazwisko = "Kowalski";

            // var - stary sposób (lepiej uzywać let i const)
            var wiek = 16;

            // 2. TYPY DANYCH - 
            // --------------------------------------------------------

            // string - tekst (w cudzysłowie)
            let miasto = "Warszawa"

            // Number - liczba (bez cudzysłowu)
            let liczba = 42;

            // boolean - prawda/fałsz
            let czyUczen = true;

            // 3. OPERACJE MATEMATYCZNE 
            // --------------------------------------------------------

            // Dodawanie
            let suma = 10 + 5; // wynik: 15

            // Odejmowanie
            let roznica = 10 - 5; // wynik: 5

            // Mnożenie
            let iloczyn = 10 * 5; // wynik: 50

            // Dzielenie
            let iloraz = 10 / 5; // wynik: 2

            // 4. WYŚWIETLANIE INFORMACJI
            // --------------------------------------------------------

            // console.log() - wyświetla informacje w konsoli przeglądarki (F12)

            console.log("Witaj w konsoli!");
            console.log("Imię:", imie);
            console.log("suma:", suma);

            // 5. FUNKCJE - blok kodu, które można wielokrotnie uzywać
            // --------------------------------------------------------

            // Funkcja bez parametrów
              function powitanie() {

                // alert() - wyświetla okienko z komunikatem
                alert("Witaj w świecie JavaScript!");
            }

            // Funkcja z parametrami
            function obliczSume(a, b) {

                // return - zwraca wynik funkcji
                return a + b;
            }

            // funkcja sprawdzająca wiek
            function sprawdzWiek(wiek) {

                // if - instrukcja warunkowa (jeśli)
                if (wiek >= 18) {
                    return "Jesteś pełnoletni.";
                } else {

                    // else - w przeciwnym wypadku
                    return "Jesteś niepełnoletni.";
                }
            }

            // 6. PĘTLA - powtarza kod określoną liczbę razy
            // --------------------------------------------------------

            // Funkcja z pętlą for
            function liczOdJednegoDoN(n) {

                // Pusty string do przechowywania wyniku
                let wynik = "";

                // for - pętla: zaczyna od 1, kończy na n, zwiększa o 1
                for (let i = 1; i <= n; i++) {

                    // += dodaje do istniejącego tekstu
                    wynik += i + " ";
                }

                // Zwraca wynik
                return wynik;
            }

            // 7. INTERAKCJA Z HTML (DOM - Document Object Model)
            // --------------------------------------------------------)

            // Czekamy, az cala strona sie zaladuje
            document.addEventListener('DOMContentLoaded', function() {

                // querySelector - znajduje element HTML po id
                const btnPowitanie = document.querySelector('#btnPowitanie');
                const btnObliczenia = document.querySelector('#btnObliczenia');
                const btnWiek = document.querySelector('#btnWiek');
                const btnPetla = document.querySelector('#btnPetla');
                const divWynik = document.querySelector('#wynik');

                // addEventListener - nasłuchuje kliknięcia przycisku
                btnPowitanie.addEventListener('click', function() {

                    // Zmienia zawartość HTML elementu 
                    divWynik.innerHTML = "<H3>Powitanie</h3><p>Witaj " + imie + " " + nazwisko + "!</p>";
                });

                // Obsługa przycisku obliczenia
                btnObliczenia.addEventListener('click', function() {

                    // prompt() - wyświetla odkenko do wpisania wartości
                    let liczba1 = prompt("Podaj pierwszą liczbę:");
                    let liczba2 = prompt("Podaj drugą liczbę:");

                    // parseInt() - zamienia tekst na liczbę całkowitą
                    liczba1 = parseInt(liczba1);
                    liczba2 = parseInt(liczba2);

                    // Wywołanie funkcji obliczSume()
                    let wynikObliczen = obliczSume(liczba1, liczba2);

                    // Wyświetlenie wyniku
                    divWynik.innerHTML = "<h3>Obliczenia</h3><p>" + liczba1 + " + " + liczba2 + " = " + wynikObliczen + "</p>";
                });

                // Obsługa przycisku sprawdzenia wieku

                btnWiek.addEventListener('click', function() {

                    // Pobieramy wiek od użytkownika
                    let wiekUzytkownika = prompt("Ile masz lat?");

                    // Zamieniamy na liczbę
                    wiekUzytkownika = parseInt(wiekUzytkownika);

                    // Wywołujemy funkcję sprawdzWiek()
                    let komunikat = sprawdzWiek(wiekUzytkownika);

                    // Wyświetlamy wynik
                    divWynik.innerHTML = "<h3>Sprawdzenie wieku</h3><p>" + wiekUzytkownika + " lat. " + komunikat + "</p>";
                });

                // Obsługa przycisku z pętlą
                btnPetla.addEventListener('click', function() {

                    // Wywołujemy funkcję z pętlą
                    let wynikPetli = liczOdJednegoDoN(ile);

                    // Wyświetlamy wynik
                    divWynik.innerHTML = "<h3>Liczby od 1 do n</h3><p>" + ile + "</p><p>" + wynikPetli + "</p>";
                });

                // Obsługa przycisku z pętlą
                btnPetla.addEventListener('click', function() {
                    
                    // Pobieramy liczbę n od użytkownika
                    let ile = prompt("Podaj liczbę n:");

                    // Zamieniamy na liczbę
                    ile = parseInt(ile);

                    // Wywołujemy funkcję z pętlą
                    let wynikPetli = liczOdJednegoDoN(ile);

                    // Wyświetlamy wynik
                    divWynik.innerHTML = "<h3>Liczby od 1 do n</h3><p>" + ile + "</p><p>" + wynikPetli + "</p>";
                });

                // Informacja w konsoli, ze skrypt działa
                console.log("Skrypt działa poprawnie!");
                console.log("Otwórz konsolę (F12), aby zobaczyć więcej informacji.");
            });

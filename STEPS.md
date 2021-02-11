# Steps

1. Maak een 'Zoek'-knop op de pagina
2. en koppel deze aan een functie
3. die de gegevens over `België` ophaalt en dit in de console logt.

_Tip:_ Als de de [documentatie](https://www.npmjs.com/package/axios) bekijkt en op `async` zoekt, vindt je een voorbeeld van een GET-request.

## 1. De gebruiker kan de knop zien

- [x] Zoek knop maken (HTML)
- [x] id meegeven -> om met javascript te selecteren (HTML)

## 2. De gebruiker gaat klikken

- [x] Knop selecteren (getElementById, opslaan in variabele)
- [x] Event listener & Event Handler toevoegen aan knop (addEventListener, click, async functie)

## 3. Wanneer de gebruiker klikt wordt mijn async function aangeroepen

- [ ] Variable met maken country -> "Belgie" (hardcoden)
- [ ] Variabele Url maken -> https://restcountries.eu/rest/v2/name/${country}?fullText=true
- [ ] axios.get(url)
- [ ] await toevoegen
- [ ] response -> checken

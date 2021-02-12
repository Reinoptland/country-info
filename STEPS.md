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

- [x] Variable met maken country -> "Belgie" (hardcoden)
- [x] Variabele Url maken -> https://restcountries.eu/rest/v2/name/${country}?fullText=true
- [x] axios.get(url)
- [x] await toevoegen
- [x] response -> checken

## Data formatten text

2. Maak op basis van de response de volgende string en log dit in de console: `[country-naam] is situated in [subarea-name]. It has a population of [amount] people.`

- [x] Goed in de data kijken, waar zit deze info: -> loggen
- [ ] variabelen maken: countryName, countryArea, countryPopulation
- [x] template string maken met -> `${countryName} ... etc`

3. Maak op basis van de response de volgende string en log dit in de console: `The capital is [city]`

- [x] Goed in de data kijken, waar zit deze info: -> loggen
- [x] variabelen maken: countryCapital
- [x] template string maken met -> `${countryCapital} ... etc`

4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
- 1 valuta: `and you can pay with [currency]'s`
- 2 valuta's: `and you can pay with [currency]'s and [currency]'s`

- [x] Goed in de data kijken, waar zit deze info: -> loggen
- [x] functie maken -> formatCurrencies
- [x] variabele maken, en de currencies uit de data daaraan toekennen
- [x] aanroepen -> logje in de functie zetten om te checken
- [x] input: currencies, parameter(s) toevoegen, argument(en) meegeven 
- [x] parameter loggen om te kijken of de input hebben
- [x] if
- [x] 1 currency -> `and you can pay with [currency]'s`
- [x] 2 currency -> `and you can pay with [currency]'s and [currency]'s`
- [x] return de waarde `and you can pay with [currency]'s and [currency]'s`

8. Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt, de functie wordt aangeroepen waarmee de gegevens over `België` worden opgehaald. 

## 1 Maak een inputveld op de pagina 

- [x] HTML 

## 2 Zorg ervoor dat als de gebruiker op enter drukt 

- [x] Inputveld selecteren
- [x] Event listener
- [x] "keypress"
- [x] Was de key enter?
- [ ] Was de key enter? 

## 3 functie wordt aangeroepen waarmee de gegevens over `België` worden opgehaald. 

- [ ] Roep functie aan 

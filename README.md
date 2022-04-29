# Testovací api pro naučení fetch v javascriptu

## Instalace

1. Stáhnout a nainstalovat [MongoDB](https://www.mongodb.com/try/download/community)
2. Nainstalovat Node.js
3. Naklonovat si toto repo
4. `yarn` v rooto složky s touto aplikací
5. `yarn start` v rootu složky s touto aplikací
6. API defaultně poslouchá na `localhost:3333`

## Monorepo

Nově je aplikace v monorepu (potřeba použít `yarn` kvůli workspaces)
Pro přidávání do jednotlivých balíčků je potřeba definovat do které workspace se to má přidat (případně pustit jakýkoliv script který není v root package.json)
např: `yarn workspace frontend add @mui/core@latest`

## Zadání

### Vytvořit Aplikaci která bude obsahovat dvě části:

1.  Stránka s formulářem která bude splnovat toto:

    - vstupní pole pro všeny prvky kontaktního formuláře
    - Formulář s odesílacím tlačítkem
    - Nastylované pomocí CSS nebo SCSS
    - radioButton pro pohlaví
    - hezky naformátované datum narození
    - základní validace vstupů a chybová hláška v případě že nějaký vstup není validní
    - Dobrovolné: Loader při odesilání, zobrazení hlášky o úspěšném uložení.

2.  Stránka se seznamem kontaktů
    - Stránka která z api načte všechny kontakty a zobrazí jejich jména.
    - Po kliknutí na jméno se v jiné části obrazovky zobrazí celé info o uživateli
    - Tlačítko na smazání každého kontaktu vedle kontaktu v seznamu
    - Nastylované pomocí CSS nebo SCSS

> Dobrovolné: Proklik z kontaktu na 1. stránku, která si načte data na daný kontakt, vyplní info do políček a při odeslání zedituje daný kontakt v databázi.

## API dokumentace

Generovaná api dokumentace je dostupná po spuštění aplikace na adrese

```
localhost:3333/swagger
```

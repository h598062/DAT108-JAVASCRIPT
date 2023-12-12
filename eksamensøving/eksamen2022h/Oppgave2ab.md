# Eksamen 2022v

## a) JavaScript i nettleser har bla. objektene window, navigator, history og screen

For hvert av disse objektene, hva kan vi bruke objektet til?
Du trenger ikke huske navn på egenskaper.

> window er selve nettleser vinduet, fra den kan en lese verdier som størrelse på vinduet etc.
> navigator er nettleser programmet, fra den kan en lese hvilken nettleser brukeren har og hvilket språk de bruker.
> history er historikken til fanen brukeren har åpen
> screen er selve skjermen til brukeren, og fra den kan en lese verdier som oppløsning, orientasjon og fargedybde

## b) JavaScript og datatyper

- **i)** JavaScript betegnes som et type-svakt språk (weakly typed, loosely typed).
	Hva betyr dette i praksis i JavaScript? Når bestemmes en variable sin type i JavaScript?

> Dette betyr at en variabel kan inneholde hvilken som helst type, og en kan bytte hvilken type variabelen inneholder.
> en variabel sin type blir bestemt / sjekket ved runtime

- **ii)** JavaScript sine 7 primitive datatyper inkluderer string, number, boolean og symbol.
	Når brukes datatypen symbol? Demonstrer bruken av symbol med et kodeeksempel.

> et "symbol" er en datatype som lager en unik og immutable (ikke mulig å endre) verdi.
> symboler brukes ofte til å lage private verdier inne i objekter, eller hvis du ønsker å sørge for at et objekt er unikt.

```js
const person = {
	id: Symbol(),
	fornavn: "Ola"
	etternavn: "Nordmann"
}
```

# Eksamen 2023v

## a) JavaScript og «strict mode»

- **i)** Hva er konsekvensene av «strict mode» i JavaScript?

> strict mode, aktivert ved å skrive:
> "user strict";
> vil gjøre at javascript programmet vil feile når flere tilstander oppstår.
> dette er tilstander som en som oftest ønsker at skal feile.
>
> her er noen eksempler:
>
> 1. gi verdier til en udefinert variabel vil gi en feilmelding istedenfor at det "fungerer". uten strict mode blir slike variabler til "globale" variabler
> 2. flere nøkkelord blir beskyttet mot bruk som variabler etc. i kode, for å beholde mulighet til å bruke dem i framtiden.
> 3. "this" vil ikke bruke "window" som sin referanse hvis stedet det kalles fra ikke har sin egen "this" instans.
> 4. "read only" variabler og felt vil feile hvis en prøver å skrive til dem

- **ii)** Hvordan kan vi instruere JavaScript-motoren til å benytte «strict mode»?

> skriv
> `"user strict";`
> enten øverst i js filen for å aktivere det globalt i dette skriptet, eller øverst i den kodeblokken en ønsker å aktivere det.

- **iii)** JavaScript-motoren vil kunne benytte «strict mode» uten at det er angitt i koden. Gi et eksempel.

> når en skriver ES6 kode så vil "strict mode" vanligvis være på som standard i javascript motoren.
> dette vil selvfølgelig variere fra forskjellige javascript motorer, og en bør sjekke opp om den en bruker har dette av eller på.

## b) JavaScript string template, og litt om Date objektet

- **i)** Koden nedenfor oppretter en JavaScript string template:

	```javascript
	Const info = `${navn} ble født på en ${dag}.`;
	```

	Ta utgangspunkt i koden over forklar bruken av en string template.
	Hva betyr konstruksjonene `${navn}` og `${dag}`?

> En string template lar deg bruke en spesifikk syntaks for å tillate string-interpolation -> sette inn kode inne i tekst strengen.
> Der kan man enten hente variabel verdier, eller til og med kjøre kode.
> `${navn}` og `${dag}` betyr at den vil forsøke å finne en variabel som heter navn (eller dag), og sette inn dens verdi istedenfor seg selv.

- **ii)** En variabel dag er opprettet ved følgende kode:

	```javascript
	const dag = new Date(Date.UTC(2003,0,12)).toLocaleDateString(navigator.language,
	{
		weekday: 'long'
	});
	```

	Hva gjør koden over?
	Hva slags type data vil dag inneholde?
	Hva gjør navigator.language i koden over?

> navigator et et objekt som holder informasjon om brukerens nettleser
> navigator.language vil hente ut det språket brukerens nettleser bruker
> Koden lager et nytt `Date` objekt. Et `Date` objekt holder en spesifikk dato.
> Datoen blir valgt ved å bruke en metode `Date.UTC(yyyy,m-1,d)`.
> Denne metoden returnerer et tall som er antall ms siden 1 Jan 1970 fram til den oppgitte datoen.
> Metoden forventer å få måneden som en månedindeks, og vil da godta 0-11 istedenfor de vanlige 1-12. 0 = januar
> `.toLocaleDateString()` tar inn en språk tag, og gir tilbake datoen formatert til en tekststreng på den måten som er riktig for det oppgitte språket. f.eks. i norge bruker vi dd.mm.yyyy, mens i usa bruker de mm.dd.yyyy for å vise datoer med tall
> i tillegg så kan den ta inn noen "options" for mer spesifikk formatering av data.
> i dette tilfellet får den inn et objekt med `weekday: 'long'`, som vil da føre til at ukedagen blir skrevet ut fullt med tekst.

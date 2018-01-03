# form-controls

Dette er et CSS/JS bibliotek for styling av checkboxer, radioknapper og inputfelter.
Samt for å formattere og begrense hvilke tegn som skal tillates i inputfelter.

Biblioteket bruker [jQuery](https://jquery.com/) og Igor Escobars jQuery Mask Plugin [jQuery Mask Plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/)

## Demo
[https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo](https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo)

## Checkboxer og radioknapper
* Groupbox må ha klassen **control-container**
* div rundt checkbox og label må ha klassene: **control** **checkbox**
* div rundt radioknapper og label må ha klassene: **control** **radio**

* Klassene styler checkboxene/radioknappene sånn at de blir litt penere, og ser like ut i alla browsere
* De er har også en større "click area" som gjør det litt lettere å treffe de med musepekeren


## Inputfelter
* Bruk klassen input-field (både for select og input)
* select (dropdown) må ligge inne i en div med klassen: select-container
* Bruk forskjellige klasser og kombinasjoner av klasser for å styre formatteringen og hvilke tegn som skal tillates (se demo)

## Klasser
* **account-mask** - gir et inputfelt formatet XXXX XX XXXXX, f.eks. 1234 56 78901
* **checkbox** - brukes i kombinasjon med **control** for å style checkboxer. Må ligge i en groupbox som har klassen **control-container**
* **control** - brukes for å style checkboxer og radio-knapper
* **control-container** - brukes på groupbox for å style checkboxer og radio-knapper inne i groupboxen
* **date-mask** - gir et inputfelt formatet DD.MM.YYYY, f.eks. 01.03.2018
* **input-field** - brukes for å style inputfelter og dropdowns (input og select)
* **letteral-text** - gjør at det kun er mulig å skrive inn tekst i inputfeltet
* **numeric-decimal** - gjør at det kun er mulig å skrive tall i inputfeltet, desimaler er tillatt. Type må være satt til "number"
* **numeric-text** - gjør at det kun går å skrive inn tall i input-feltet, og at numerisk keypad vises på iOS mobile
* **org-number-mask** - gir et inputfelt formatet XXX XXX XXX, f.eks. 123 456 789
* **percentage** - setter max="100" og min="0" for inputfeltet. Type må være satt til "number"
* **prevent-select-on-tab** - hindrer at data i input-feltet markeres ved tab inn i feltet. Funker ikke i firefox.
* **radio** - brukes i kombinasjon med **control** for å style radioknapper. Må ligge i en groupbox som har klassen **control-container**
* **vps-account-mask** - gir et inputfelt formatet XXXXX XXXXXXX, f.eks. 12345 6789012

## Tilpasse CSS
### Endre farge på border på element som har fokus
Endre farge på border-color i klassen **focused** (f.eks. checkboxer):

**.focused** {
  <br>
  border-color: #f35b1c !important;
  <br>
}
<br>

Og på **.input-field:focus** (inputfelter/dropdowns):

**.input-field:focus** {
  <br>
	padding: 11px !important;
  <br>
	border: 2px solid #f35b1c !important;
  <br>
}

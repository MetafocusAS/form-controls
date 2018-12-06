# form-controls

Dette er et CSS/JS bibliotek for styling av checkboxer, radioknapper, inputfelter og knapper.
Samt for å formattere og begrense hvilke tegn som skal tillates i inputfelter, og for å vise riktig keypad på mobile enheter.
Biblioteket inneholder også funksjonalitet for å lage comboboxer (søk/fritekst i dropdown)  og modals (dialoger).

Hovedformålet med biblioteket er først og fremst funksjonalitet. Derfor er stylingen ganske minimal, siden det visuelle uttrykket ofte skiler seg fra løsning til løsning. Avhengig av kundens grafiske profil mm.

Biblioteket bruker [jQuery](https://jquery.com/), jQuery Mask Plugin [jQuery Mask Plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/) og webshims polyfill [webshims polyfill](https://afarkas.github.io/webshim/demos/)

## Bruk
For å bruke biblioteket må filene:
* **form-controls.min.js**
* **form-controls.min.css**
* **jquery.mask.min.js**

Og mappen
* **js-webshim**

Legges inn under på **C:\Tomcat\WEBAPPS CONTAINER**. I en mappe som heter **form-controls** på front-end-serveren.

Så må det legges til en deployment descriptor for mappen **form-controls**. Det enkleste er å kopiere en eksisterende.
Så:
[1] Gå til C:\Tomcat\apache-tomcat-7.0.75\conf\Catalina\localhost (OBS! versjonsnummer på *apache-tomcat-7.0.75* skiller seg sannsynligvis!).
[2] Lag en kopi av **digiforms.xml** og døp den til **form-controls.xml**.
[3] Erstatt alt som inneholder *digiforms* med form-controls. F.eks. så skal  det stå *docBase="..\..\WEBAPPS CONTAINER\form-controls"* og *path="/form-controls"*.
[4] Lagre filen **form-controls.xml**

For å kunne bruke det i digiforms må du deretter inkludere (Document settings > Includes):
* **../form-controls/form-controls.min.js**
* **../form-controls/form-controls.min.css**

(JQuery må også være inkludert men det allerede er inkludert i digiforms)

## Demo
[https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo](https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo)

## Browser support
Biblioteket er testet og fungerer i følgende nettlesere:
* Chrome
* Firefox
* Opera
* Edge
* IE 11
* Safari

Biblioteket er også testet på litt forskjellige mobile enheter (iPhone og Android)

## Checkboxer og radioknapper
* Klassene styler checkboxene/radioknappene sånn at de blir litt penere, og ser like ut i alle browsere
* De er har også en større "click area" som gjør det litt lettere å treffe de med musepekeren

### Checkboxer
* Groupboxen (div rundt fieldset) rundt må ha klassen **checkbox-container**
* div rundt checkbox og label må ha klassen **control-row** og **checkbox-row** (OBS! i Digiforms Designer kalles denne div'en "Label")

#### Hvordan plassere klassene
![Figur som viser hvordan klassene for checkboxer skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-checkbox-new-2.0.svg)

#### HTML
```html
<div id="id-5d6d17f0-02c4be20" class="checkbox-container">
	<fieldset>
		<legend id="id-5d6d17f0-02c4be20_legend" class="checkbox-container_legend">Checkboxer</legend>
		<div id="id-5d6d17f0-02c4be20_content" class="checkbox-container_content">
			<div id="id-5d6d425c-02c23a10" class="control-row">
				<div id="id-5d6d425c-02c23a10_control" class="label_control checked">
					<input type="hidden" name="85a33aad006a46376f7f49375f2cbfd3" value="">
					<input type="checkbox" id="id-5d6d425c-02c31cb0" name="85a33aad006a46376f7f49375f2cbfd3" value="yes">
				</div>
				<div id="id-5d6d425c-02c23a10_text" class="label_text">
					<label for="id-5d6d425c-02c31cb0">checkbox</label>
				</div>
			</div>
			<div id="id-5d6d05b0-02c23990" class="control-row checkbox"> ... </div>
			<div id="id-5d6d3721-02c23a10" class="control-row checkbox"> ... </div>
		</div>
	</fieldset>
</div>
```
![Figur som viser hvordan checkboxer blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-checkboxes.PNG)

### Radioknapper
* Groupboxen (div rundt fieldset) rundt må ha klassen **radio-container**
* div rundt radioknapp og label må ha klassen **control-row** og **checkbox-row**

#### Hvordan plassere klassene
![Figur som viser hvordan klassene for radioknapper skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-radio-new2.0.svg)

#### HTML
``` html
<div id="id-5d6d5d94-02c4c360" class="radio-container">
	<fieldset>
	 <legend id="id-5d6d5d94-02c4c360_legend" class="radio-container_legend">Radioknapper</legend>
		<div id="id-5d6d5d94-02c4c360_content" class="radio-container_content">
			<div id="id-5d6d7320-02c23a10" class="control-row"> ... </div>
			<div id="id-5d6d6cf6-02c22b10" class="control-row">
				<div id="id-5d6d6cf6-02c22b10_control" class="label_control checked">
					<input type="radio" id="id-5d6d6cf6-02c321b0" name="05ec796a9303eae972e7cf170de72aeb" value="'first'">
				</div>
				<div id="id-5d6d6cf6-02c22b10_text" class="label_text">
					<label for="id-5d6d6cf6-02c321b0">radiobutton</label>
				</div>
			</div>
			<div id="id-5d6d7320-02c23a10" class="control-row radio"> ... </div>
		</div>
	</fieldset>
</div>
```
#### Screen shot
![Figur som viser hvordan radioknapper blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-radios.PNG)

## Inputfelter

### Dropdowns (select)
* Må ligge inne i en div med klassen: **select-container**. Pass på at det ikke ligger noen andre elementer inne i **select-container** enn selve dropdownen (+ tilhørende label og containeren rundt disse). Den må heller ikke ha noen margin eller padding.
* Bruk klassen **input-field** på selve input-feltet. Det gir en *grunnleggende styling* som gjør at den ser lik ut i forskjellige browsere.

#### Hvordan plassere klasser på en dropdown (select)
![Figur som viser hvordan klassene for inputfelter skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-select.svg)

#### HTML
``` html
<div id="id-5dfa6e11-08afa040" class="select-container">
	<div id="id-5df3910c-07042470">
		<div id="id-5df3910c-07042470_text" class="label_text">
			<label for="id-5df3910c-04ba77e0">Dropdown</label>
		</div>
		<div id="id-5df3910c-07042470_control" class="label_control">
			<select id="id-5df3910c-04ba77e0" class="input-field" name="85a33aad006a46376f7f49375f2cbfd3"></select>
		</div>
	</div>
</div>
```

#### Screen shot
![Figur som viser hvordan dropdowns blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-select.PNG)

### Combobox (autocomplete)
* Må ligge inne i en div med klassen: **combobox-container**. Pass på at det ikke ligger noen andre elementer inne i **combobox-container** enn selve input-elementet (+ tilhørende label og containeren rundt disse).
* Bruk klassen **combobox** på selve input-feltet.
* Legg til klassen **combobox-countries** på input-feltet hvis du ønsker en liste med land.
* Klassen **input-field** kan også brukes på selve input-feltet. Det gir en *grunnleggende styling*.

Hvis du vil bruke en egendefinert liste sløyfer du **combobox-countries** og bruker din egen klasse **combobox-{navnet-på-din-liste-her}**. Listen må være deklarert som en array i et globalt JS-objekt kalt *customComboBoxlists*. Listen må være verdien til property *{navnet-på-din-liste-her}* i JS-objektet. F.eks. hvis vi bruker **combobox-brus**. Da må vi ha et globalt JS-objekt:
``` javascript
var customComboBoxlists = { brus: ["Cola", "Fanta", "Solo", "Sprite"] };
```
Objektet kan enten deklareres i en JS-fil (f.eks. helt på toppen). Eller som inline JS, slik:
``` javascript
<script>
	var customComboBoxlists = { brus: ["Cola", "Fanta", "Solo", "Sprite"] };
</script>
```

#### Hvordan plassere klasser på en combobox (autocomplete)
![Figur som viser hvordan klassene for inputfelter skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-combobox.svg)

#### HTML
``` html
<div id="id-5dfa6e11-08afa040" class="combobox-container">
	<div id="id-5df3910c-07042470">
		<div id="id-5df3910c-07042470_text" class="label_text">
			<label for="id-5df3910c-04ba77e0">Land</label>
		</div>
		<div id="id-5df3910c-07042470_control" class="label_control">
			<input id="id-5df3910c-04ba77e0" class="input-field combobox combobox-countries" name="85a33aad006a46376f7f49375f2cbfd3"></input>
		</div>
	</div>
</div>
```

#### Screen shot
![Figur som viser hvordan dropdowns blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-combobox.png)

### Input-elementer (input)
* Bruk klassen **input-field** for *grunnleggende styling* av inputfelter.
* Bruk forskjellige andre klasser (f.eks. **numeric-text**) og kombinasjoner av [klasser](#klasser), for å *styre formatteringen og hvilke tegn som skal tillates* (se [demo](https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo))

#### Hvordan plassere klasser på en input
![Figur som viser hvordan klassene for inputfelter skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-input-plain.svg)

#### HTML
``` html
<input type="text" id="id-5d93ad80-02c0cc20" class="input-field" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="Hvilke som helst tegn ..." value="">
```

#### Screen shot
![Figur som viser hvordan inputfelter blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-input-regular.PNG)

#### Hvordan plassere klasser for en input som kun aksepterer siffer.
![Figur som viser hvordan klassene for inputfelter som kun aksepterer visse tegn skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-input-numeric.svg)

#### HTML
``` html
<input type="text" id="id-5d972d02-02c0cfb0" class="input-field numeric-text" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="kun siffer, ingen formattering" value="" inputmode="numeric" pattern="[0-9]*">
```

#### Screen shot
![Figur som viser hvordan inputfelter som kun aksepterer visse tegn blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-input-numeric.PNG)


#### Hvordan plassere klasser for en input med formattering, f.eks. organisasjonsnummer.
![Figur som viser hvordan klassene for inputfelter med formattering skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-input-formatted.svg)

#### HTML
``` html
<input type="text" id="id-5d982482-02c0cfb0" class="input-field numeric-text org-number-mask" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="xxx xxx xxx" value="" inputmode="numeric" pattern="[0-9]*" maxlength="11">
```

#### Screen shot
![Figur som viser hvordan  med formattering blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-input-formatted.PNG)

#### Hvordan plassere klasser for en input som kun aksepterer siffer.
![Figur som viser hvordan klassene for inputfelter som kun aksepterer visse tegn skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-input-numeric.svg)

### Floating labels
* Bruk klassene **label-float** og **hidden** på containeren rundt label og input.
* Bruk klassen **input-field-alt** på input-elementet for å fjerne *default digiforms styling*.

#### Hvordan plassere klasser på en input
![Figur som viser hvordan klassene for inputfelter skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-floating-labels.svg)

#### HTML
``` html
<div id="id-054e784f-02ba5590" class="label-float">
	<div id="id-054e784f-02ba5590_text" class="label_text">
		<label for="id-054e784f-02b8d6d0">Floating label</label>
	</div>
	<div id="id-054e784f-02ba5590_control" class="label_control">
		<input type="text" id="id-054e784f-02b8d6d0" class="input-field-alt" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="Floating label" value="">
	</div>
</div>
```

#### Screen shot
![Figur som viser hvordan inputfelter med floating labels blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-floating-labels.PNG)
![Figur som viser hvordan inputfelter med floating labels blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-floating-labels2.PNG)

### Knapper
* Bruk klassen **btn** på knapper, linker eller labels for å få de til å se ut som knapper.

#### Hvordan plassere **btn** på en knapp/lenke/label
![Figur som viser hvordan klasse for knapper skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-buttons.svg)

#### HTML
``` html
<button type="button" class="btn">Normal button</button>

<a href="#" class="btn">Link button</a>

<label class="btn">Label button</label>
```

#### Screen shot
![Figur som viser hvordan knapper blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-buttons.PNG)

### File upload/filopplasting
* Bruk klassen **attachment** på div rundt label og tilhørende input[type="file"] (da trenger du heller ikke legge til klassen **btn** på labelen for å få den til å se ut som en knapp)

#### Hvordan plassere **btn** på en knapp/lenke/label
![Figur som viser hvordan klasse for knapper skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-fileupload.svg)

#### HTML
``` html
<div class="attachment">
	<label for="file-upload">Label (for file upload) button</label>
	<input type="file" id="file-upload">
</div>
```

#### Screen shot
![Figur som viser hvordan label for file upload blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-fileupload.PNG)

### Modals
* Lag en div og gi den klassen **modal-container**
* Lag en ny div og gi den klassen **modal**
* Putt **modal** inne i **modal-container**
* Putt en knapp inne i **modal** og gi den klassene **btn btn-close btn-x** (alt. kun **btn-close btn-x**)
* Fjern teksten på knappen
* Hvis du ønsker en knapp for å åpne modalen. Lag en knapp rett før (over) **modal-container**  og gi den klassen **btn open-modal-btn** (alt. kun **open-modal-btn**)
* Du kan også putte enda en knapp inne i **modal** med f.eks. teksten "OK". Gi den da klassene **btn btn-close** (alt. kun **btn-close**)

#### Hvordan plassere klasser for modals
![Figur som viser hvordan klasse for modal skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-modal.svg)

#### HTML
``` html
<div id="modal-container-1" class="modal-container" aria-expanded="true">
	<div id="id-0ed11e35-0c7dcfc0" class="modal">
		<button type="button" id=" id-0ed11e35-0b3cc690" class="btn-close btn-x" aria-controls="modal-container-1" aria-label="Lukk"></button>
		<div id="id-0ed11e35-0c7dd0a0">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
		<button type="button" id="id-0ed11e35-0b3cc7d0" class="btn-close btn btn-primary btn-fixed-md" aria-controls="modal-container-1" aria-label="Lukk">OK</button>
		</div>
	</div>
</div>
```

#### Screen shot
![Figur som viser hvordan modal blir seendes ut](https://rawgit.com/MetafocusAS/form-controls/master/images/screenshot-modal.PNG)

## Klasser
* **account-mask** - gir et inputfelt formatet XXXX XX XXXXX, f.eks. 1234 56 78901
* **attachment** - brukes for å wrappe file upload (input og tilhørende label). Gir grunnleggende styling.
* **btn** - gir grunnleggende styling for elementer som skal fungere som knapper (funker også på linker og labels)
* **btn-close** - brukes for å lukke modal (dialog)
* **btn-x** - brukes for i kombinasjon med **btn-close** for å lukke modal (dialog). Lager et knapp i høyre hjørnet på modalen som kan brukes som "x"-knapp.
* **checkbox-row** - brukes i kombinasjon med **control-row** for å style checkboxer. Må ligge i en groupbox som har klassen **checkbox-container**
* **combobox** - brukes for å skape autocomplete-felter (comboboxer). Må ligge i en groupbox som har klassen **control-container**
* **combobox-container** - brukes for å skape autocomplete-felter (comboboxer). Brukes på groupboxen rundt inputfeltet.
* **combobox-coutries** - brukes i kombinasjon med **combobox** for å gi en liste med land (autocomplete for land).
* **combobox-{whatever}** - brukes i kombinasjon med **combobox** for å gi en liste med *{whatever}*. Listen må være deklarert som en array i et globalt JS-objekt kalt *customComboBoxlists*. Listen må være verdien til property *{whatever}*. F.eks. hvis vi bruker **combobox-brus**. Da må vi ha et globalt JS-objekt:
``` javascript
var customComboBoxlists = { brus: ["Cola", "Fanta", "Solo", "Sprite"] };
```
* **control-container** - brukes på groupbox for å style checkboxer og radio-knapper inne i groupboxen
* **control-row** - brukes for å style checkboxer og radio-knapper
* **cpr-mask** - danske fødselsnummer. Gir et inputfelt formatet XXXXXX-XXXX, f.eks. 990102-1234
* **date-mask** - gir et inputfelt formatet DD.MM.YYYY, f.eks. 01.03.2018
* **input-field** - brukes for å style inputfelter og dropdowns (input og select)
* **letteral-text** - gjør at det kun er mulig å skrive inn tekst i inputfeltet
* **modal** - lager en modal (dialog) som legger seg forran hele siden
* **modal-container** - må wrappe en **.modal** (dialog)
* **money** - tusenskille for tall
* **numeric-decimal** - gjør at det kun er mulig å skrive tall i inputfeltet, desimaler er tillatt. Type må være satt til "number"
* **numeric-positive** - gjør at det kun går å skrive inn positive tall i input-feltet. Type må være satt til "number".
* **numeric-text** - gjør at det kun går å skrive inn tall i input-feltet, og at numerisk keypad vises på mobil
* **open-modal-btn** - åpner modal (dialog)
* **org-number-mask** - norske organisasjoner. Gir et inputfelt formatet XXX XXX XXX, f.eks. 123 456 789
* **org-number-mask-se** - svenske organisasjoner. Gir et inputfelt formatet XXXXXX-XXXX, f.eks. 990102-1234
* **percentage** - setter max verdi til 100 og min til 0
* **phone** - gir et format som passer for alle generelle telefonnummer med landkode. F.eks. +999 12 45 67 12
* **phone-no** - gir et format som passer for norske telefonnummer med landkode. F.eks. +47 123 45 678
* **phone-se** - gir et format som passer for svenske telefonnummer med landkode. F.eks. +46(0) 73-123 45 67
* **phone-dk** - gir et format som passer for danske telefonnummer med landkode. F.eks. +45 12 45 67 12
* **phone-nordic** - gir et format som passer for nordiske landkoder. F.eks. +45 12 45 67 12
* **prevent-select-on-tab** - hindrer at data i input-feltet markeres ved tab inn i feltet. Funker ikke i firefox.
* **radio-row** - brukes i kombinasjon med **control-row** for å style radioknapper. Må ligge i en groupbox som har klassen **radio-container**
* **select-container** - brukes for å skape dropdowns som ser like ut i forskjellige browsere. Brukes på groupboxen rundt selecten.
* **ssn-no-mask** - norske fødselsnummer. Gir et inputfelt formatet DDMMÅÅNNNNN, f.eks. 08105127198
* **ssn-se-mask** - svenske fødselsnummer. Gir et inputfelt formatet ÅÅÅÅMMDD-NNNN, f.eks. 19990102-1234
* **vps-account-mask** - gir et inputfelt formatet XXXXX XXXXXXX, f.eks. 12345 6789012
* **website-mask** - gir inputfelt http://www. preutfylt, men aksepterer også https://www. Tillater kun tegn som er gyldige for en domene på internet.

## Eksempler på hvordan tilpasse CSS
### Endre farge på border på element som har fokus
Endre farge på border-color her (checkboxer/radioknapper):
```css
.focused {
	border-color: #f35b1c !important;
}
```

Her (inputfelter/dropdowns):
```css
.input-field:focus {
	padding: 11px !important;
	border: 2px solid #f35b1c !important;
}
```

Og her (floating labels)
```css
.label-float input:focus {
  border-bottom-color: #4E6378;
}
```

### Endre farge checkboxer/radioknapper som er "checked"
Endre farge på border-color og background-color her:
```css
.control .label_text.checked label::before {
	border-color: #257886 !important;
	background-color: #257886 !important;
}
```

### Endre farge på matchet tekst i combobox
Endre farge på color her:
```css
.combobox-result  .case-match {
	font-weight: bold;
	color: #0059b3;
}
```

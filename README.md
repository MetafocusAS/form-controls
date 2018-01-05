# form-controls

Dette er et CSS/JS bibliotek for styling av checkboxer, radioknapper og inputfelter.
Samt for å formattere og begrense hvilke tegn som skal tillates i inputfelter.

Biblioteket bruker [jQuery](https://jquery.com/) og Igor Escobars jQuery Mask Plugin [jQuery Mask Plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/)

## Demo
[https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo](https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo)

## Checkboxer og radioknapper
* Groupboxen (fieldset) rundt må ha klassen **control-container**
* Klassene styler checkboxene/radioknappene sånn at de blir litt penere, og ser like ut i alle browsere
* De er har også en større "click area" som gjør det litt lettere å treffe de med musepekeren

### Checkboxer
* div rundt checkbox og label må ha klassene: **control** **checkbox**

![Figur som viser hvordan klassene for checkboxer skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-checkboxer.svg)

#### HTML
```html
<div id="id-5d6d17f0-02c4be20" class="control-container">
	<fieldset style="display:block; border:none; padding:0; margin:0;">
		<legend id="id-5d6d17f0-02c4be20_legend" class="control-container_legend">Checkboxer</legend>
		<div id="id-5d6d17f0-02c4be20_content" class="control-container_content">
			<div id="id-5d6d05b0-02c23990" class="control checkbox">
				<div id="id-5d6d05b0-02c23990_control" class="label_control">
					<input type="hidden" name="85a33aad006a46376f7f49375f2cbfd3" value="">
					<input type="checkbox" id="id-5d6d05c0-02c31b70" name="85a33aad006a46376f7f49375f2cbfd3" value="true">
				</div>
				<div id="id-5d6d05b0-02c23990_text" class="label_text">
					<label for="id-5d6d05c0-02c31b70">checkbox</label>
				</div>
			</div>
			<div id="id-5d6d3721-02c23a10" class="control checkbox">
				<div id="id-5d6d3721-02c23a10_control" class="label_control">
					<input type="hidden" name="85a33aad006a46376f7f49375f2cbfd3" value="">
					<input type="checkbox" id="id-5d6d3721-02c31cb0" name="85a33aad006a46376f7f49375f2cbfd3" value="true">
				</div>
				<div id="id-5d6d3721-02c23a10_text" class="label_text">
					<label for="id-5d6d3721-02c31cb0">checkbox</label>
				</div>
			</div>
			<div id="id-5d6d425c-02c23a10" class="control checkbox">
				<div id="id-5d6d425c-02c23a10_control" class="label_control">
					<input type="hidden" name="85a33aad006a46376f7f49375f2cbfd3" value="">
					<input type="checkbox" id="id-5d6d425c-02c31cb0" name="85a33aad006a46376f7f49375f2cbfd3" value="true">
				</div>
				<div id="id-5d6d425c-02c23a10_text" class="label_text">
					<label for="id-5d6d425c-02c31cb0">checkbox</label>
				</div>
			</div>
		</div>
	</fieldset>
</div>
```

### Radioknapper
* div rundt radioknapper og label må ha klassene: **control** **radio**

![Figur som viser hvordan klassene for radioknapper skal brukes](https://rawgit.com/MetafocusAS/form-controls/master/images/drawing-radios.svg)

## Inputfelter
* Bruk klassen input-field (både for select og input)
* dropdown (select) må ligge inne i en div med klassen: **select-container**. Det er kun dropdownen som må ligge inne i **select-container**, den må heller ikke ha noen margin eller padding.
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
* **numeric-positive** - gjør at det kun går å skrive inn positive tall i input-feltet. Type må være satt til "number".
* **numeric-text** - gjør at det kun går å skrive inn tall i input-feltet, og at numerisk keypad vises på iOS mobile
* **org-number-mask** - gir et inputfelt formatet XXX XXX XXX, f.eks. 123 456 789
* **percentage** - setter max="100" og min="0" for inputfeltet. Type må være satt til "number"
* **prevent-select-on-tab** - hindrer at data i input-feltet markeres ved tab inn i feltet. Funker ikke i firefox.
* **radio** - brukes i kombinasjon med **control** for å style radioknapper. Må ligge i en groupbox som har klassen **control-container**
* **vps-account-mask** - gir et inputfelt formatet XXXXX XXXXXXX, f.eks. 12345 6789012

## Tilpasse CSS
### Endre farge på border på element som har fokus
Endre farge på border-color her (checkboxer/radioknapper):
```css
.focused {
	border-color: #f35b1c !important;
}
```

Og her (inputfelter/dropdowns):
```css
.input-field:focus {
	padding: 11px !important;
	border: 2px solid #f35b1c !important;
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

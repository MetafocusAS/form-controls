# form-controls

- [form-controls](#form-controls)
  * [Hva er Form-controls?](#hva-er-form-controls-)
  * [Bruk](#bruk)
  * [Demo](#demo)
  * [Browser support](#browser-support)
  * [Checkboxer og radioknapper](#checkboxer-og-radioknapper)
    + [Checkboxer](#checkboxer)
      - [Hvordan plassere klassene](#hvordan-plassere-klassene)
      - [HTML](#html)
      - [Screenshot](#screenshot)
    + [Radioknapper](#radioknapper)
      - [Hvordan plassere klassene](#hvordan-plassere-klassene-1)
      - [HTML](#html-1)
      - [Screenshot](#screenshot-1)
  * [Inputfelter](#inputfelter)
    + [Dropdowns (select)](#dropdowns--select-)
      - [Hvordan plassere klasser på en dropdown (select)](#hvordan-plassere-klasser-p--en-dropdown--select-)
      - [HTML](#html-2)
      - [Screenshot](#screenshot-2)
    + [Combobox (autocomplete)](#combobox--autocomplete-)
      - [Hvordan plassere klasser på en combobox (autocomplete)](#hvordan-plassere-klasser-p--en-combobox--autocomplete-)
      - [HTML](#html-3)
      - [Screenshot](#screenshot-3)
    + [Input-elementer (input)](#input-elementer--input-)
      - [Hvordan plassere klasser på en input](#hvordan-plassere-klasser-p--en-input)
      - [HTML](#html-4)
      - [Screenshot](#screenshot-4)
      - [Hvordan plassere klasser for en input som kun aksepterer siffer.](#hvordan-plassere-klasser-for-en-input-som-kun-aksepterer-siffer)
      - [HTML](#html-5)
      - [Screenshot](#screenshot-5)
      - [Hvordan plassere klasser for en input med formattering, f.eks. organisasjonsnummer.](#hvordan-plassere-klasser-for-en-input-med-formattering--feks-organisasjonsnummer)
      - [HTML](#html-6)
      - [Screenshot](#screenshot-6)
    + [Tegnteller for textarea](#tegnteller-for-textarea)
      - [Pass på lengden på lagringsstedet](#pass-p--lengden-p--lagringsstedet)
      - [Tegnteller variant 1: Counter fraction](#tegnteller-variant-1--counter-fraction)
      - [HTML](#html-7)
      - [Screenshot](#screenshot-7)
      - [Tegnteller variant 2: Counter remaining](#tegnteller-variant-2--counter-remaining)
      - [HTML](#html-8)
      - [Screenshot](#screenshot-8)
      - [Hvordan plassere klasser når du tar i bruk tegnteller i textarea](#hvordan-plassere-klasser-n-r-du-tar-i-bruk-tegnteller-i-textarea)
    + [Floating labels](#floating-labels)
      - [Hvordan plassere klasser på en input med floating label](#hvordan-plassere-klasser-p--en-input-med-floating-label)
      - [HTML](#html-9)
      - [Screenshot før input](#screenshot-f-r-input)
      - [Screenshot etter input](#screenshot-etter-input)
  * [Knapper](#knapper)
      - [Hvordan plassere **btn** på en knapp](#hvordan-plassere---btn---p--en-knapp)
      - [Hvordan plassere **btn** på en lenke](#hvordan-plassere---btn---p--en-lenke)
      - [Hvordan plassere **btn** på en label](#hvordan-plassere---btn---p--en-label)
      - [HTML](#html-10)
      - [Screenshot](#screenshot-9)
  * [File upload/filopplasting](#file-upload-filopplasting)
      - [Hvordan plassere **btn** på en label for filopplasting](#hvordan-plassere---btn---p--en-label-for-filopplasting)
      - [HTML](#html-11)
      - [Screenshot](#screenshot-10)
  * [Modals](#modals)
      - [Hvordan plassere klasser for modals](#hvordan-plassere-klasser-for-modals)
      - [HTML](#html-12)
      - [Screenshot](#screenshot-11)
  * [Oversikt over klasser](#oversikt-over-klasser)
  * [Eksempler på hvordan tilpasse CSS](#eksempler-p--hvordan-tilpasse-css)
    + [Endre farge på border på element som har fokus](#endre-farge-p--border-p--element-som-har-fokus)
    + [Endre farge checkboxer/radioknapper som er "checked"](#endre-farge-checkboxer-radioknapper-som-er--checked-)
    + [Endre farge på matchet tekst i combobox](#endre-farge-p--matchet-tekst-i-combobox)


## What is Form Controls?
Form Controls is a library for cross-bowser styling of checkboxes, radio buttons, input fields and buttons. The library includes functionality which formats content, limits the amount of characters that should be allowed in an input field, or show the right keypad on mobile devices.  In addition to functionality that can be used to make comboboxes (search fields / text in dropdown) and modals. 

The purpose of this library is mainly to apply various functionality to your form. Styling has not been a priority, because styling differ in various projects depending on customers current graphical profile. 

jQuery[jQuery](https://jquery.com/) and jQuery Mask Plugin [jQuery Mask Plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/) are used in this library. .


## How to use it

In order to use this library, you will have to add these files: 
* **form-controls.min.js**
* **form-controls.min.css**
* **jquery.mask.min.js**

Add it under C:\Tomcat\WEBAPPS in folder **form-controls** on the frontend-server you are using. PS! If this is an older server (before 04/20/2020) place it in the folder C:\Tomcat\WEBAPPS_CONTAINER or C:\Tomcat\WEBAPPS CONTAINER. It is important that files are placed in the right directory. 

A deployment descriptor must be added to folder **form-controls**:
1. Download **form-controls.xml** (https://github.com/MetafocusAS/form-controls/blob/master/form-controls.xml)
2. Add **form-controls.xml** to *C:\Tomcat\apache-tomcat-7.0.75\conf\Catalina\localhost* (PS! the version number of *apache-tomcat-7.0.75* will vary) on the front-end server. 

It is best to include these files *before* you include other stylesheets, so it does not override other stylesheets. Open and close the browser to see if the script is successfully added (you do not have to restart the Tomcat application on your server). 

To use the library in Digiforms Designer you will have to include it in the document or component you want to add it to. Add it like this: (Document settings > Includes):
* **../form-controls/form-controls.min.js**
* **../form-controls/form-controls.min.css**

The files in countries.zip should be added to the filepath **Datasource/Countries/** in folder **WEBAPPS/ROOT** to prevent error messages. Countries_xx_XX.xml is a list of countries that is used in the combobox function. 


## Demo
[https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo](https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo)

## Browser support
The library is tested and is working in these browsers: 
* Chrome
* Firefox
* Opera
* Edge
* Internet Explorer 11
* Safari

It is also tested on some mobile devices (iPhone and Android). 


## Checkboxes og radio buttons
* The css-classes are applied to the radio buttons to make them look appealing, but also to make them look identical in all browsers.
* They have a bigger “click area” which makes them easier to hit with the mouse pointer.


### Checkboxes
* The groupbox (div) around the checkboxes must have the class **checkbox-container**
* Apply css-classes **control-row** and **checkbox-row** to the groupbox (div) which is placed around the checkboxes. (PS! in Digiforms Designer this div is called 'a "Label")


#### Here is how to apply classes to checkboxes
![This illustration show how the classes should be applied](https://user-images.githubusercontent.com/5544597/79964786-7cf56900-848b-11ea-92e7-02db7975a6a6.png)


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

#### Screenshot
![Figur som viser hvordan checkboxer blir seendes ut](https://user-images.githubusercontent.com/5544597/79965453-5126b300-848c-11ea-86bd-237e71f385dc.png)


### Radio buttons
* Apply the css-class **radio-container** to the groupbox around the radio buttons.
* Apply the css-classes **control-row** og **radio-row** to the ‘div’ around the radio buttons. 


#### Here is how to apply classes to radio buttons
![The illustration shows where to apply the classes](https://user-images.githubusercontent.com/5544597/79965317-2b011300-848c-11ea-978d-677b40272ad7.png)

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

#### Screenshot
![The screenshot is illustrating how the radiobuttons will look like](https://user-images.githubusercontent.com/5544597/79965643-92b75e00-848c-11ea-95be-fb70d02afbe1.png)


## Input fields


### Dropdowns (select)
* Apply class **select-container** to the groupbox around the dropdown. There should be no other elements inside **select-container** except the dropdown (both label and groupbox around). Furthermore, there should not be added any padding or margin to the container. 

* Apply css-class **input-field** to the input field. It gives it a *basic* styling that looks identical in all browsers. 


#### Here is how to add classes to a dropdown (select)
![The illustration show how the classes should be applied](https://user-images.githubusercontent.com/5544597/79987385-a0311000-84ad-11ea-8c61-53765c67b888.png)

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

#### Screenshot
![The illustration show how the dropdown will look like](https://user-images.githubusercontent.com/5544597/79966319-926b9280-848d-11ea-9ad3-39e1bee8a927.png)

### Combobox (autocomplete)
ARIA-pattern is implemented to provide for accessibility and satisfy requirements in relation to WCAG 2.0.

* Apply class **combobox-container** to the groupbox (div) that is placed around the dropdown. 
There should be no other elements inside the combox-container except for an input-field. 
* Add the class**combobox** to the input field. 
* Apply the css-class **combobox-countries** to an input field if you want to add a list of all countries. 
* The class **input-field** can also be added to the input field to give it basic styling. 

If you want to use your own custom list, you can drop the class **combobox-countries**, and add your own class like this **comboxcountries-{name-of-custom-css-class}**. The list must be declared as an array in a global JS-object called customComboBoxlists. The list must be the value to the property *{the-name-of-the-list-here}* inside the JS-object. For example, if we use **combobox-brus**, then it must have a global JS-object: 

``` javascript
var customComboBoxlists = { brus: ["Cola", "Fanta", "Solo", "Sprite"] };
```
The object can be declared in a JS-file, or inline, like this:
``` javascript
<script>
	var customComboBoxlists = { brus: ["Cola", "Fanta", "Solo", "Sprite"] };
</script>
```

#### Here is how to add classes to a combobox (autocomplete)
![The illustration show how to apply the classes](https://user-images.githubusercontent.com/5544597/79987561-dff7f780-84ad-11ea-803b-36aa4f3e7609.png)

#### HTML
``` html
<div id="id-5dfa6e11-08afa040" class="combobox-container">
	<div id="id-5df3910c-07042470">
		<div id="id-5df3910c-07042470_text" class="label_text">
			<label for="id-5df3910c-04ba77e0">Land</label>
		</div>
		<div id="id-5df3910c-07042470_control" class="label_control">
			<input id="id-5df3910c-04ba77e0" class="input-field combobox combobox-countries" name="85a33aad006a46376f7f49375f2cbfd3">
			</input>
		</div>
	</div>
</div>
```

#### Screenshot
![The illustration show how the dropdown will look like](https://user-images.githubusercontent.com/5544597/79968019-e0819580-848f-11ea-90d7-0275a78db2f8.png)



### Input elements (input)
* Use class **input-field** to add *basic styling* to input-fields 
* In order to control and limit type of content that can be allowed to add into the input, you can apply different types of classes (a list of classes is added further down in the document).(see [demo](https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo))

#### Hvordan plassere klasser på en input
![Figur som viser hvordan klassene for inputfelter skal brukes](https://user-images.githubusercontent.com/5544597/79968512-7c130600-8490-11ea-91f5-44e8382d7971.png)

#### HTML
``` html
<input type="text" id="id-5d93ad80-02c0cc20" class="input-field" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="Hvilke som helst tegn ..." value="">
```

#### Screenshot
![Figur som viser hvordan inputfelter blir seendes ut](https://user-images.githubusercontent.com/5544597/79968552-8df4a900-8490-11ea-8be0-117b9c8f1c48.png)


#### Hvordan plassere klasser for en input som kun aksepterer siffer.
![Figur som viser hvordan klassene for inputfelter som kun aksepterer siffer skal brukes](https://user-images.githubusercontent.com/5544597/79969520-e8dad000-8491-11ea-997b-c3c291ed67f7.png)

#### HTML
``` html
<input type="text" id="id-5d972d02-02c0cfb0" class="input-field numeric-text" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="kun siffer, ingen formattering" value="" inputmode="numeric" pattern="[0-9]*">
```

#### Screenshot
![Figur som viser hvordan inputfelter som kun aksepterer siffer blir seendes ut](https://user-images.githubusercontent.com/5544597/79969604-0314ae00-8492-11ea-8a96-8ea05426ebc9.png)


#### Hvordan plassere klasser for en input med formattering, f.eks. organisasjonsnummer.
![Figur som viser hvordan klassene for inputfelter med formattering skal brukes](https://user-images.githubusercontent.com/5544597/79969862-5ab31980-8492-11ea-959a-e391fb15b39c.png)

#### HTML
``` html
<input type="text" id="id-5d982482-02c0cfb0" class="input-field numeric-text org-number-mask" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="xxx xxx xxx" value="" inputmode="numeric" pattern="[0-9]*" maxlength="11">
```

#### Screenshot
![Figur som viser hvordan inputfelt med formattering for organisasjonsnummer blir seendes ut](https://user-images.githubusercontent.com/5544597/79969977-859d6d80-8492-11ea-8f79-cfba94d7fd75.png)



### Tegnteller for textarea
* Viser maks antall tillatte tegn, og hvor mange tegn som til enhver tid er skrevet inn i et tekstfelt.
* Gjør det enklere for brukeren å holde oversikt over hvor mye som er skrevet og hvor mange tegn som er igjen å skrive. 

#### Pass på lengden på lagringsstedet
Normalt teller et linjeskift som ett tegn, men funksjonaliteten i denne tegntelleren gjør at linjeskift ikke telles med. Derfor er det viktig å ta høyde for at det stedet som eventuelt skal lagre teksten kan ta imot den faktiske lengden på tekststrengen (maxlength + et ukjent antall linjeskift) 


#### Tegnteller variant 1: Counter fraction
* Med klassen **counter-fraction** vises en brøk for antall tegn fylt i / maxlength
![Figur som viser hvordan tegntelling i textfelt skal se ut med klassen counter-fraction](https://user-images.githubusercontent.com/5544597/79954865-406f4080-847e-11ea-8799-c87e2b142b01.png)

#### HTML
``` html
<div id="id-157361c3-097b0ff0" class="char-count-container-100">
	<div id="id-157361c3-02c27f90" class="input-label">
		<div id="id-157361c3-02c27f90_text" class="label_text">
			<label for="id-157361c3-02c10cd8">Some label text <span class="hide-label"> (maks 500 tegn)</span></label>
		</div>
		<div id="id-157361c3-02c27f90_control" class="label_control">
			<textarea id="id-157361c3-02c10cd8" class="input-field" name="bbe7b9dd99da10314996b6c39a04a2f5" maxlength="500" autocomplete="on" style="overflow: hidden; height: 134px;"></textarea>
		</div>
	</div>
	<div id="id-157361c3-02b90300" class="char-count counter-fraction">0/500</div>
</div>
```
#### Screenshot
![Figur som viser eksempel på bruk av Tegnteller av typen Counter fraction](https://user-images.githubusercontent.com/5544597/79955818-9c869480-847f-11ea-9aaf-bc4ae61511d0.png)


#### Tegnteller variant 2: Counter remaining
* Med klassen **counter-remaining**  vises en tekststreng som teller ned antall tegn fra maxlength til 0, hvor mange tegn feltet har til rådighet etter hvert som det fylles i.
![Figur som viser hvordan tegntelling i textfelt ser ut med klassen counter-remaining](https://user-images.githubusercontent.com/5544597/79950591-9987a600-8477-11ea-907c-381d028e1ce7.png)

#### HTML
``` html
<div id="id-157361c3-097ae740" class="char-count-container-500">
	<div id="id-157361c3-02c28290" class="input-label">
		<div id="id-157361c3-02c28290_text" class="label_text">
			<label for="id-157361c3-02c0e0e8">Some label text <span class="hide-label"> (Maks 500 tegn)</span>
			</label>
		</div>
		<div id="id-157361c3-02c28290_control" class="label_control">
			<textarea id="id-157361c3-02c0e0e8" class="input-field" name="cf816ad7a69b9ccd15f1f818a1d77f98" maxlength="500" autocomplete="on" style="overflow: hidden; height: 134px;">
			</textarea>
		</div>
	</div>
	<div id="id-157361c3-02b91c50" class="char-count counter-remaining">Du har igjen 500 tegn</div>
</div>
```
#### Screenshot
![Figur som viser eksempel på bruk av Tegnteller av typen Counter remaining](https://user-images.githubusercontent.com/5544597/79956169-1585ec00-8480-11ea-8248-79c6e8603881.png)


#### Hvordan plassere klasser når du tar i bruk tegnteller i textarea
Legg en InputMemo (med label) og en TextBox inn i en div (som i bildene over). 
Div’en skal ha klassen **char-count-container-{ønsket makslengde for tekstfelt her}**. For eksempel vil **char-count-container-500** gi et inputfelt som godtar 500 tegn. 

I labelen beskriver du på vanlig måte innholdet i feltet og avslutter tekststrengen med: <pre>&lt;span class=’hide-label’&gt;Placeholder for maxlength&lt;/span&gt;</pre> Placeholder for maxlength blir da automatisk erstattet av en tekst som oppgir feltets makslengde basert på klassen satt i div’en rundt. Denne vil være skjult med CSS men mulig å lese med skjermleser. 

Selve InputMemo-feltet skal ha følgende verdier, men feilmeldingsbeskjeden (Message) kan du sette fritt til det som måtte passe:
![Figur som viser properties for InputMemo i Digiforms](https://user-images.githubusercontent.com/5544597/79950784-dce21480-8477-11ea-819b-f93b3fe83e3e.png)

Under Label med InputMemo finner du en TextBox. Denne skal ha klassen **counter-fraction** eller **counter-remaining** avhengig av hvilken type tegnteller du vil vise. 


### Floating labels
* Bruk klassene **label-float** og **hidden** på containeren rundt label og input.
* Bruk klassen **input-field-alt** på input-elementet for å fjerne *default digiforms styling*.

#### Hvordan plassere klasser på en input med floating label
![Figur som viser hvordan klassene for inputfelt med floating label skal brukes](https://user-images.githubusercontent.com/5544597/79971190-4a03a300-8494-11ea-9af7-affa4f6c490d.png)

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

#### Screenshot før input
![Figur som viser hvordan inputfelter med floating labels blir seendes ut](https://user-images.githubusercontent.com/5544597/79971371-7d463200-8494-11ea-87b6-144f4bcd856e.png)

#### Screenshot etter input
![Figur som viser hvordan inputfelter med floating labels blir seendes ut](https://user-images.githubusercontent.com/5544597/79971421-9222c580-8494-11ea-9160-003241d85ade.png)



## Knapper
* Bruk klassen **btn** på knapper, linker eller labels for å få de til å se ut som knapper.

#### Hvordan plassere **btn** på en knapp
![Figur som viser hvordan klasse for knapper skal brukes på button-element](https://user-images.githubusercontent.com/5544597/79975773-cc439580-849b-11ea-90b6-a3731f480f58.png)

#### Hvordan plassere **btn** på en lenke
![Figur som viser hvordan klasse for knapper skal brukes på lenke](https://user-images.githubusercontent.com/5544597/79976195-80452080-849c-11ea-8264-b32d5dda7ce1.png)

#### Hvordan plassere **btn** på en label
![Figur som viser hvordan klasse for knapper skal brukes på label-element](https://user-images.githubusercontent.com/5544597/79975879-f1380880-849b-11ea-801b-6560e43706d4.png)


#### HTML
``` html
<button type="button" class="btn">Normal button</button>

<a href="#" class="btn">Link button</a>

<label class="btn">Label button</label>
```

#### Screenshot
![Figur som viser hvordan knapper blir seendes ut](https://user-images.githubusercontent.com/5544597/79976278-98b53b00-849c-11ea-9f93-c93b50dc8808.png)

## File upload/filopplasting
* For å style dette elementet i Digiforms må du trikse litt. Ta en input (som består av label og inputfelt) og erstatt inputfeltet med et attachment-element slik at label wrapper rundt knapp for opplasting. Labelen gir du klassen **attachment** (du trenger ikke legge til klassen **btn** på labelen for å få den til å se ut som en knapp).

#### Hvordan plassere **btn** på en label for filopplasting
![Figur som viser hvordan klasse for knapper skal brukes](https://user-images.githubusercontent.com/5544597/79979482-dec0cd80-84a1-11ea-8b4a-9751df45aa48.png)

#### HTML
``` html
<div id="id-20123e92-044c0dd0" class="attachment">
	<div id="id-20123e92-044c0dd0_text" class="label_text">
		<label for="id-201025a5-0b99f9a0">File upload / Custom text</label>
	</div>
	<div id="id-20123e92-044c0dd0_control" class="label_control">
		<input type="file" id="id-201025a5-0b99f9a0" name="c12e4884c9a02044f556284f379539fa">
	</div>
</div>
```

#### Screenshot
![Figur som viser hvordan label for file upload blir seendes ut](https://user-images.githubusercontent.com/5544597/79977871-475a7b00-849f-11ea-8faa-b42c152c8526.png)



## Modals
* Lag en div og gi den klassen **modal-container**
* Lag en ny div og gi den klassen **modal**
* Putt **modal** inne i **modal-container**
* Putt en knapp inne i **modal** og gi den klassene **btn btn-close btn-x** (alt. kun **btn-close btn-x**)
* Fjern teksten på knappen
* Hvis du ønsker en knapp for å åpne modalen. Lag en knapp rett før (over) **modal-container**  og gi den klassen **btn open-modal-btn** (alt. kun **open-modal-btn**)
* Du kan også putte enda en knapp inne i **modal** med f.eks. teksten "OK". Gi den da klassene **btn btn-close** (alt. kun **btn-close**)

#### Hvordan plassere klasser for modals
![Figur som viser hvordan klasse for modal skal brukes](https://user-images.githubusercontent.com/5544597/79986716-c904d580-84ac-11ea-8ce8-0abcf76a9003.png)

#### HTML
``` html
<div id="id-202a1f4d-0ba25710" class="modal-container" aria-expanded="true" aria-hidden="false">
	<div id="id-20320dd2-0b82d980" class="modal">
		<div id="id-2072276d-08211de0" class="text">{Insert custom content of your choice}</div>
		<button type="button" id="id-2032a37a-0b9cc4a0" class="btn btn-close btn-x" aria-controls="id-202a1f4d-0ba25710" aria-label="Lukk" style="background-color: rgba(128, 0, 128, 0.5); border-radius: 8px;"></button>
		<button type="button" id="id-20342eec-0b9cb640" class="btn btn-close" aria-controls="id-202a1f4d-0ba25710" aria-label="Lukk" style="background-color: rgba(128, 0, 128, 0.5); border-radius: 8px;">OK / close (not mandatory)</button>
	</div>
</div>
```

#### Screenshot
![Figur som viser hvordan modal blir seendes ut](https://user-images.githubusercontent.com/5544597/79987166-5b0cde00-84ad-11ea-8628-54a4598b3fe7.png)



## Oversikt over klasser
* **account-mask** - gir et inputfelt formatet XXXX XX XXXXX, f.eks. 1234 56 78901
* **attachment** - brukes for å wrappe file upload (input og tilhørende label). Gir grunnleggende styling.
* **btn** - gir grunnleggende styling for elementer som skal fungere som knapper (funker også på linker og labels)
* **btn-close** - brukes for å lukke modal (dialog)
* **btn-x** - brukes for i kombinasjon med **btn-close** for å lukke modal (dialog). Lager et knapp i høyre hjørnet på modalen som kan brukes som "x"-knapp.
* **char-counter** - brukes på TextBox for tegnteller tilknyttet textarea
* **char-count-container-{ønsket makslengde for tekstfelt her}** - Legges på div rundt textarea for å angi funksjonalitet for telling av tegn i feltet. Krever bruk av flere tilknyttede klasser.
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
* **counter-fraction** - brukes på TextBox for tegnteller i textarea for å vise en brøkbasert teller
* **counter-remaining** - brukes på TextBox for tegnteller i textarea for å vise en tekst som indikerer hvor mange tegn som er igjen å skrive av maxlength
* **cpr-mask** - danske fødselsnummer. Gir et inputfelt formatet XXXXXX-XXXX, f.eks. 990102-1234
* **date-mask** - gir et inputfelt formatet DD.MM.YYYY, f.eks. 01.03.2018
* **date-se-mask** - gir et inputfelt formatet YYYY.MM.DD, f.eks. 2018.03.01
* **hide-label** - brukes for å skjule del av innhold i label i textarea for seende, men viser viktig informasjon for skjermlesere
* **input-field** - brukes for å style inputfelter og dropdowns (input og select)
* **letteral-text** - gjør at det kun er mulig å skrive inn tekst i inputfeltet
* **modal** - lager en modal (dialog) som legger seg forran hele siden
* **modal-container** - må wrappe en **.modal** (dialog)
* **money** - tusenskille for tall inkl. desimaler, feks 100 000,00
* **money-int** - tusenskille for heltall, feks 5 000 000
* **numeric-decimal** - gjør at det kun er mulig å skrive tall i inputfeltet, desimaler er tillatt. Type må være satt til "number"
* **numeric-positive** - gjør at det kun går å skrive inn positive tall i input-feltet. Type må være satt til "number".
* **numeric-text** - gjør at det kun går å skrive inn tall i input-feltet, og at numerisk keypad vises på mobil
* **open-modal-btn** - åpner modal (dialog)
* **org-number-mask** - norske organisasjoner. Gir et inputfelt på formatet XXX XXX XXX, f.eks. 123 456 789
* **org-number-mask-se** - svenske organisasjoner. Gir et inputfelt på formatet XXXXXX-XXXX, f.eks. 990102-1234
* **giin-number-mask** - amerikansk firmanummer. Gir et inputfelt på formatet XXXXXX.XXXXX.XX.XXX
* **percentage** - setter max verdi til 100 og min til 0
* **phone** - gir et format som passer for alle generelle telefonnummer med landkode. F.eks. +999 12 45 67 12
* **phone-dk** - gir et format som passer for danske telefonnummer med landkode. F.eks. +45 12 45 67 12
* **phone-no** - gir et format som passer for norske telefonnummer med landkode. F.eks. +47 123 45 678
* **phone-nordic** - gir et format som passer for nordiske landkoder. F.eks. +354 12 45 67 12
* **phone-se** - gir et format som passer for svenske telefonnummer med landkode. F.eks. +46(0) 73-123 45 67
* **phone-scandinavian** - gir et format som passer for skandinaviske (Norge, Sverige og Danmark) telefonnummer med landkode. F.eks. +45 12 45 67 12
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

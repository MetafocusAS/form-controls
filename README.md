# Form Controls
- [form-controls](#form-controls)
  * [What is Form Controls?](#What is form controls)
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
![The screenshot show how the checkbox will be displayed](https://user-images.githubusercontent.com/5544597/79965453-5126b300-848c-11ea-86bd-237e71f385dc.png)


### Radio buttons
* Apply the css-class **radio-container** to the groupbox around the radio buttons.
* Apply the css-classes **control-row** og **radio-row** to the ‘div’ around the radio buttons. 


#### Here is how to apply classes to radio buttons
![The illustration show how to apply the classes](https://user-images.githubusercontent.com/5544597/79965317-2b011300-848c-11ea-978d-677b40272ad7.png)

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
![The screenshot show how the radio buttons will look like](https://user-images.githubusercontent.com/5544597/79965643-92b75e00-848c-11ea-95be-fb70d02afbe1.png)


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
![The illustration show how to apply the classes](https://user-images.githubusercontent.com/5544597/79968512-7c130600-8490-11ea-91f5-44e8382d7971.png)

#### HTML
``` html
<input type="text" id="id-5d93ad80-02c0cc20" class="input-field" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="Hvilke som helst tegn ..." value="">
```

#### Screenshot
![Show how the radio buttons will look like](https://user-images.githubusercontent.com/5544597/79968552-8df4a900-8490-11ea-8be0-117b9c8f1c48.png)


#### Here is how to apply classes to an input that only contains numbers
![Show how to apply classes to an input field that only contains numbers](https://user-images.githubusercontent.com/5544597/79969520-e8dad000-8491-11ea-997b-c3c291ed67f7.png)

#### HTML
``` html
<input type="text" id="id-5d972d02-02c0cfb0" class="input-field numeric-text" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="kun siffer, ingen formattering" value="" inputmode="numeric" pattern="[0-9]*">
```

#### Screenshot
![The illustration show how input fields that only accept digits are displayed](https://user-images.githubusercontent.com/5544597/79969604-0314ae00-8492-11ea-8a96-8ea05426ebc9.png)


#### Here is how to add classes to an input with formatting (i.e. organization number)
![Show how to apply classes to an input with formatting](https://user-images.githubusercontent.com/5544597/79969862-5ab31980-8492-11ea-959a-e391fb15b39c.png)

#### HTML
``` html
<input type="text" id="id-5d982482-02c0cfb0" class="input-field numeric-text org-number-mask" name="85a33aad006a46376f7f49375f2cbfd3" placeholder="xxx xxx xxx" value="" inputmode="numeric" pattern="[0-9]*" maxlength="11">
```

#### Screenshot
![The illustration show how input fields that only accept digits are displayed](https://user-images.githubusercontent.com/5544597/79969977-859d6d80-8492-11ea-8f79-cfba94d7fd75.png)


### Counter for text area 
* Show the maximum characters allowed in a field, and current amount of numbers in a text field (i.e. Input or memo field). 
* It makes it easier for the user to keep track of the remaining characters left to use.

#### Pay attention to the length of the storage location 
Normally one line break counts as one character. However, this counter prevents line-breaks from counting as characters. If the text is supposed to be stored somewhere else, then check the max length of the field where it is supposed to end up (max length + line breaks). 


#### Counter alternative 1: Counter fraction 
* If you use the class **counter-fraction** then a fraction of the number of characters filled in / max length is displayed.
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
![The illustration show how the counter is displayed](https://user-images.githubusercontent.com/5544597/79955818-9c869480-847f-11ea-9aaf-bc4ae61511d0.png)


#### Counter alternative 2: Counter remaining
* If you use class **counter-remaining** a text string displayed counts down the number of characters from max length to zero. The string show how many characters the field have available as the user fills in information into the field. 
![Show how a counter with class counter-remaining will be displayed](https://user-images.githubusercontent.com/5544597/79950591-9987a600-8477-11ea-907c-381d028e1ce7.png)


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
![Show how a counter with class counter-remaining will be displayed](https://user-images.githubusercontent.com/5544597/79956169-1585ec00-8480-11ea-8248-79c6e8603881.png)


#### Where to place classes when you are using a counter in a text area (input, memo) 
Add a memo field (with a label) and a textbox inside a groupbox (see the example above). The groupbox (div) should have added class **char-count-container-{your desired maxlength of the textfield}**. If you add char-count-container-500, it will become an input field that accepts 500 characters. 

Write the text you want to add to the label and then complete the text string with: <pre>&lt;span class=’hide-label’&gt;Placeholder for maxlength&lt;/span&gt;</pre> The placeholder for maxlength will then automatically be replaced with the amount of text being added to it. It will be hidden with css-masking but still be able to read with a screen reader. 

You will have to add these values to the memo-field, but the error message (Message) can be placed wherever you want to place it:
![Figur som viser properties for InputMemo i Digiforms](https://user-images.githubusercontent.com/5544597/79950784-dce21480-8477-11ea-819b-f93b3fe83e3e.png)


Under the memo-field there is a textbox. This should have the class **counter-fraction** or **counter-remaining**, depending on what type of counter you want to add 


### Floating labels
* Add classes  **label-float** and **hidden** in the container which is placed over the label and input. 
* Add classes **input-field-alt** on the input-element to remove *default digiforms styling*. 

#### Here is how to add classes to an input with formatting
![The illustration shows how an input with a floating label is displayed](https://user-images.githubusercontent.com/5544597/79971190-4a03a300-8494-11ea-9af7-affa4f6c490d.png)

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

#### Screenshot before input
![The screenshot show how an input with a floating label will look like](https://user-images.githubusercontent.com/5544597/79971371-7d463200-8494-11ea-87b6-144f4bcd856e.png)

#### Screenshot after input
![The screenshot show how an input with a floating label will look like](https://user-images.githubusercontent.com/5544597/79971421-9222c580-8494-11ea-9160-003241d85ade.png)


## Buttons
* Use class **btn** on your buttons, URLs, or labels to make them look like buttons. 

#### Here is how to add a css-class **btn** to a button 
![The illustration shows where to place a **btn** class on a button](https://user-images.githubusercontent.com/5544597/79975773-cc439580-849b-11ea-90b6-a3731f480f58.png)

#### Hvordan plassere **btn** på en lenke
![The illustration shows how to apply a **btn**-class on a URL](https://user-images.githubusercontent.com/5544597/79976195-80452080-849c-11ea-8264-b32d5dda7ce1.png)

#### Hvordan plassere **btn** på en label
![The illustration shows how to apply a class on a label element](https://user-images.githubusercontent.com/5544597/79975879-f1380880-849b-11ea-801b-6560e43706d4.png)


#### HTML
``` html
<button type="button" class="btn">Normal button</button>

<a href="#" class="btn">Link button</a>

<label class="btn">Label button</label>
```

#### Screenshot
![The illustration shows how the button will be displayed](https://user-images.githubusercontent.com/5544597/79976278-98b53b00-849c-11ea-9f93-c93b50dc8808.png)

## File upload
* To style the attachment elements from Digiforms, you must do some tricks. First, add an input (label and input-field) and then replace the input-field with an attachment element. The label will be wrapped around the attachment-element. Add the css-class **attachment** to the label (you do not need to use the class **btn** to make it look like a button). 

#### Here is how you add a button on a label for file upload 
![The illustration shows how to add a **btn** class on a button for file upload](https://user-images.githubusercontent.com/5544597/79979482-dec0cd80-84a1-11ea-8b4a-9751df45aa48.png)

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
![The illustration show how a label for file upload will be displayed](https://user-images.githubusercontent.com/5544597/79977871-475a7b00-849f-11ea-8faa-b42c152c8526.png)



## Modal
* Add a groupbox (div) and give it the **modal-container**
* Add a new div and add the class **modal**
* Place the **modal** inside the **modal-container**
* Add a button inside the **modal** and give it the class **btn btn-close btn-x** (alt. except **btn-close btn-x**)
* Remove the text added to the button
* If you want a button to open the modal. Add a button before/over the **modal-container** and give it the class **btn open-modal-btn** (alt. except **open-modal-btn**)
* If you want an additional button you can add it inside the **modal**. Add the class **btn btn-close** (alt. except **btn-close**)

#### How to add classes to modals
![The illustration show how to apply a **modal** class](https://user-images.githubusercontent.com/5544597/79986716-c904d580-84ac-11ea-8ce8-0abcf76a9003.png)

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
![The screenshot show how a modal is displayed](https://user-images.githubusercontent.com/5544597/79987166-5b0cde00-84ad-11ea-8628-54a4598b3fe7.png)



## All css-classes listed 
* **account-mask** - gives an input the format XXXX XX XXXXX, e.g. 1234 56 78901
* **attachment** - is used to wrap the file-upload (input with attached label). Gives it basic styling. 
* **btn** - gives the button basic styling as a button (can also be placed on URLs and labels).
* **btn-close** - is used to close a modal (dialog).
* **btn-x** - is used in combination with **btn-close** to close an open model (dialog). The button will be placed in the right corner on the modal and can be used as an exit-button.  
* **char-counter** - can be applied to a textbox when using a counter. 
* **char-count-container-{ønsket makslengde for tekstfelt her}** - the classes must be applied to a text area to give it the ‘counter’ functionality. 
* **checkbox-row** - is used in combination with **control-row** to style checkboxes. It must be placed inside a groupbox with the class **checkbox-container** added to it. 
* **combobox** - is used to create autocomplete fields (comboboxes). Must be placed inside a groupbox with the class **control-container** added to it. 
* **combobox-container** - is used to create a autocomplete field (comboboxes). Must be added to groupbox around the input field. 
* **combobox-coutries** - must be used in combination with a **combobox** to apply a list of countries to the field (autocomplete with a countries). 
* **combobox-{name-of-list}** - is used in combination with **combobox** to create a autocomplete field with a custom list added to it. The list must be declared as an array in a global JS-object called *customComboBoxlists*. The list must be the value to the property *{the-name-of-the-list-here}* inside the JS-object. E.g. if we use the list **comobox-brus**, it must have a global JS-object applied to it. 
``` javascript
var customComboBoxlists = { brus: ["Cola", "Fanta", "Solo", "Sprite"] };
```
* **control-container** - is applied to a groupboxes (div) to style checkboxes and radio buttons inside the groupbox. 
* **control-row** - is applied to checkboxes and radio buttons to style them. 
* **counter-fraction** - is applied to a textbox to become a counter. 
* **counter-remaining** - is used on textboxes to show the remaining characters left to use before reaching max length.
* **cpr-mask** - Danish social security numbers. The input field will be given XXXXXX-XXXX, e.g. 990102-1234.
* **date-mask** - the input field will be formatted into DD.MM.YYYY, e.g. 01.03.2018. 
* **date-se-mask** - the input field will be formatted into YYYY.MM.DD, e.g. 2018.03.01.
* **hide-label** - is used to hide part of content inside the label of a textarea, a screen reader will be able to read. 
* **input-field** - is used to style input fields and dropdowns (input og select).
* **letteral-text** - is limiting the input field into only allowing letteral text (not numbers). 
* **modal** - creates a container into a modal which will be layered over the browser window. 
* **modal-container** - is wrapping the **modal**(dialog). Must be placed on the groupbox around the modal window. 
* **money** - a thousand separator for numbers, including decimals. e.g. 100 000,00. 
* **money-int** - a thousand separator for whole numbers, e.g. 5 000 000. 
* **numeric-decimal** - formats the input field to allow numbers and decimals. Remember to change the ‘input type’ to number in Digiforms Designer. 
* **numeric-positive** - formats an input field into approving positive numbers.
* **numeric-text** - formatting the input to solely allow numbers in an input field. Enables keypad when opened on mobile device. 
* **open-modal-btn** - opens modal (dialog). 
* **org-number-mask** - for Norwegian organizations. Gives the input field the format XXX XXX XXX, e.g. 123 456 789. 
* **org-number-mask-se** - Swedish organization number. The field will be formatted into XXXXXX-XXXX, e.g. 990102-1234. 
* **giin-number-mask** - american corporate number. The input field will be formattet into XXXXXX.XXXXX.XX.XXX. 
* **percentage** - sets the max value from 100 to 0.
* **phone** - gives it a format that suits that all general numbers also with various country codes. E.g. +999 12 45 67 12. 
* **phone-dk** - gives it a format suits danish phone numbers. E.g. +45 12 45 67 12.
* **phone-no** - gives it a format that suits norwegian phone numbers. E.g. +47 123 45 678.
* **phone-nordic** - gives it a format that suits nordic national codes. E.g. +354 12 45 67 12.
* **phone-se** - gives it a format that suits sweedish phone numbers with a county code. E.g. +46(0) 73-123 45 67.
* **phone-scandinavian** - gives it a format that suits all nordic numbers (Norway, Sweeden and Denmark) including the country code. E.g. +45 12 45 67 12.
* **prevent-select-on-tab** - prevents data inside an input field to tab. Does not work in firefox.
* **radio-row** - is used in combination with **control-row** to style radio buttons. It must be placed inside a groupbox that has the class **radio-container**.
* **select-container** - makes dropdowns look similar in all browsers. It must be added to the groupbox that is placed upon the select field. 
* **ssn-no-mask** - norwegian birth numbers. Gives the input field the format DDMMÅÅNNNNN, e.g. 08105127198.
* **ssn-se-mask** - sweedish birth numbers. Gives the input field the format ÅÅÅÅMMDD-NNNN, e.g. 19990102-1234.
* **vps-account-mask** - gives the input field the format XXXXX XXXXXXX, e.g. 12345 6789012.
* **website-mask** - gives an input field http://www. prefilled, it also accepts https://www. It only accept characters that are valid in domains. 



## Examples of how to customize CSS
### How to change the color of a border that is in focus
Change the color on border (checkboxes/radio buttons):
```css
.focused {
	border-color: #f35b1c !important;
}
```

Here (input fields/dropdowns):
```css
.input-field:focus {
	padding: 11px !important;
	border: 2px solid #f35b1c !important;
}
```

And here (floating labels)
```css
.label-float input:focus {
  border-bottom-color: #4E6378;
}
```

### Change the color on checkboxes and radio buttons that are "checked"
Change the color on border and background color: 
```css
.control .label_text.checked label::before {
	border-color: #257886 !important;
	background-color: #257886 !important;
}
```

### Change color on matched text in an combobox
Change color:
```css
.combobox-result  .case-match {
	font-weight: bold;
	color: #0059b3;
}
```

# form-controls

Dette er et CSS/JS bibliotek for styling av checkboxer, radioknapper og inputfelter.
Samt for å formattere og begrense hvilke tegn som skal tillates inputfelter.

Demo:
https://dev4.digiforms.no/digiforms/htmlViewer?documentName=form-controls-demo\

Checkboxer og radioknapper:
- Groupbox må ha klassen control-container
- div rundt checkbox og label må ha klassene: control-container checkbox
- div rundt radioknapper og label må ha klassene: control-container radio

- Klassene styler checkboxene/radioknappene sånn at de blir litt penere, og ser like ut i alla browsere
- De er har også en større "klikk-area" som gjør det litt lettere å treffe de med musepekeren


Inputfelter:
- Bruk klassen input-field (både for select og input)
- select (dropdown) må ligge inne i en div med klassen: select-container
- Bruk forskjellige klasser og kombinasjoner av klasser for å styre formatteringen og hvilke tegn som skal tillates (se demo)

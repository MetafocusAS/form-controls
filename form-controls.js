//Used to detect when the CTRL key is pressed
var ctrlDown;

//Used to detect when the SHIFT key is pressed
var shiftDown;

//Used to detect when the TAB key is pressed
var tabDown;

//Used to calculate scrollbar offset
var bodyPadding;

addJSFiles();

$(document).ready(function() {
	preventBrowserFormActions();
	initInputs();
	initCheckBoxesAndRadios();
	initFloatingLabels();
	initComboboxes();
	initFileUploads();
	initModals();
	checkForDOMChanges();
});

//Adds polyfills and plugins to the HTML head tag
function addJSFiles() {
	//Adds the mask plugin
	var masks = document.createElement("script");
	masks.type = "text/javascript";
	masks.src = "../form-controls/jquery.mask.min.js";
	$("head").append(masks);
}

//Adds the attribute for no validation
function preventBrowserFormActions() {
	$("#frm").attr("novalidate", "novalidate");
}

//Initalizes event listeners
//for the CTRL and TAB keys
function initGlobalKeyEventListener() {

	//Checks if the CTRL key is pressed
	ctrlDown = false;
	$(document).on("keydown", function(event) {
		var key = event.which || event.keyCode;
		if (key === 17) {
			ctrlDown = true;
		}
	});
	$(document).on("keyup", function(event) {
		var key = event.which || event.keyCode;
		if (key === 17) {
			ctrlDown = false;
		}
	});

	//Checks if the SHIFT key is pressed
	shiftDown = false;
	$(document).on("keydown", function(event) {
		var key = event.which || event.keyCode;
		if (key === 16) {
			shiftDown = true;
		}
	});
	$(document).on("keyup", function(event) {
		var key = event.which || event.keyCode;
		if (key === 16) {
			shiftDown = false;
		}
	});

	//Checks if the TAB key is pressed
	tabDown = false;
	$(document).on("keydown", function(event) {
		var key = event.which || event.keyCode;
		if (key === 9) {
			tabDown = true;
		}
	});
	$(document).on("keyup", function(event) {
		var key = event.which || event.keyCode;
		if (key === 9) {
			tabDown = false;
		}
	});
}

function addHTMLAttributes() {
	//Bring up the numeric keypad for iOS and Android
	$("input.numeric-text").attr("inputmode", "numeric"); //Android
	$("input.numeric-text").attr("pattern", "[0-9]*"); //iOS
	$("input.numeric-text").attr("type", "tel") //Fallback

	//Append attributes
	$(".numeric-decimal").attr("step", "0.01");
	$(".numeric-positive").attr("min", "0");
}

//Parses decimal strings (replace "," with ".")
var parseDecimalStringToFloat = function(val) {
	return parseFloat(val.toString().replace(",", "."));
};

//Parses float to decimal string (replace "." with ",")
var parseFloatToDecimalString = function(val) {
	return val.toString().replace(".", ",");
};

function initPhoneMasking() {
	$("input.phone:not(.phone-no, .phone-dk, .phone-se, .phone-scandinavian, .phone-nordic)").mask("+099999 00 00 00 00 00 00 00");

	$("input.phone-no").mask("+47 000 00 000");
	$("input.phone-no").attr("placeholder", "+47 000 00 000");

	$("input.phone-se").mask("+46(0) 00-000 00 00");
	$("input.phone-se").attr("placeholder", "+46(0) 00-000 00 00");

	$("input.phone-dk").mask("+45 00 00 00 00");
	$("input.phone-dk").attr("placeholder", "+45 00 00 00 00");

	$("input.phone-scandinavian").mask("+00 00 00 00 00 00");
	$("input.phone-nordic").mask("+009 00 00 00 00 00");
}

//Inits inputs with masks, HTML attributes and event listeners
function initInputs() {
	addHTMLAttributes();

	//Sets a mask for some classes:
	//Exceptions must be made for classes
	//that has numeric input with a specific format
	$("input.numeric-text:not(.account-mask, .vps-account-mask, .money-integer, .money, " +
														".org-number-mask, .org-number-mask-se, org-number-mask-dk, " +
														".phone, .phone-no, .phone-se, .phone-dk, .phone-nordic, " +
														".cpr-mask, .ssn-no-mask, .ssn-se-mask, " +
														".percentage, .date-mask)")
														.mask('0#');
	$("input.money-integer").mask("000 000 000 000 000 000 000 000 000 000", {reverse: true});
	
	$("input.account-mask").mask("0000 00 00000");

	$("input.vps-account-mask").mask("00000 0000000");

	$("input.org-number-mask").mask("000 000 000");
	$("input.org-number-mask-se, input.cpr-mask").mask("000000-0000");
	$("input.org-number-mask-dk").mask("00000000");

	$("input.ssn-no-mask").mask("000000 00000");
	$("input.ssn-se-mask").mask("00000000-0000");

	$("input.date-mask").mask("00.00.0000");

	initPhoneMasking();

	$("input.letteral-text").mask("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
		{translation: {"Z": {pattern: /[a-zA-Z ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏàáâãäåæçèéêëìíîïÐÑÒÓÔÕÖØÙÚÛÜÝÞßðñòóôõöøùúûüýþÿ-]/}}});

	$.each($("input.website-mask"), function() {
		if ($(this).val() === "") {
			$(this).val("http://www.");
		}
	});
	$("input.website-mask").mask("httpS://www.ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ", {
		translation: {
			"Z": { pattern: /[\w@\-.+/]/, recursive: true },
			"S": { pattern: /[s]/, optional: true}
		}
	});

	var dynamicMoneyMask = function (val) {
		var masks = ["0 000 000 000 000d", "0 000 000 000 000d99"];
  	return (val.indexOf(",") > 0 || val.indexOf(".") > 0) ? masks[1] : masks[0];
	},
	moneyOptions = {
		reverse: true,
		translation: {
			//Allow both "," and "." in mask.
			//"." is replaced with "," at oninput
			'd': {pattern: /[,.]/, optional: true},
		},
	  onKeyPress: function(val, e, field, options) {
	      field.mask(dynamicMoneyMask.apply({}, arguments), options);
	    }
	};

	$('input.money').mask(dynamicMoneyMask, moneyOptions);

	$("input.percentage").mask('HT9,00', {
																translation: {
															    'H': {pattern: /[1]/, optional: true},
															    'T': {pattern: /[0-9]/, optional: true}
															  },
															});

	//Prevent leading zeroes and numbers greater than 100
	$("#frm").on("input", ".percentage", function() {
		if (parseDecimalStringToFloat($(this).val()) > 100) {
			$(this).val(100);
		}
		else if ($(this).val().indexOf("0") === 0 && $(this).val().indexOf(",") === 2) {
			$(this).val($(this).val().substring(1));
		}
	});

	//Prevent comma when no decimal numbers are entered (decimals are optional)
	$("#frm").on("change", ".percentage", function() {
		var v = $(this).val();
		if (v.charAt(v.length -1) === ',') {
			$(this).val(v.substring(0, v.length - 1));
		}
	});

	//Stepping (using UP and DOWN arrow on keyboard)
	$("#frm").on("keydown", ".percentage, .money" ,function(event) {
		var key = event.which || event.keyCode;

		var val = parseDecimalStringToFloat($(this).val());  //default (percentage)

		var step = 0.01; //default
		var min = "0,00"; //default
		var max = 100; //percentage
		var nDecimals = 2;

		//Money
		if ($(this).hasClass("money")) {
			max = 9999999999999.99;
			val = parseDecimalStringToFloat($(this).cleanVal());
		}

		 //Key UP
		if (key === 38 && ($(this).val() === "" || val < max)) {
			if ($(this).val() === "") {
				$(this).val($(this).masked(parseFloatToDecimalString(min)));
			}
			else {
				$(this).val($(this).masked(parseFloatToDecimalString((val + step).toFixed(nDecimals))));
			}
			event.preventDefault();
			$(this).trigger("input");
		}
		 //Key DOWN
		else if (key === 40 && ($(this).val() === "" || val > 0)) {
			if ($(this).val() === "") {
				$(this).val($(this).masked(parseFloatToDecimalString(min)));
			}
			else {
				$(this).val($(this).masked(parseFloatToDecimalString((val - step).toFixed(nDecimals))));
			}
			event.preventDefault();
			$(this).trigger("input");
		}
	});

	//Allow only two decimals
	$("#frm").on("keydown", ".money" ,function(event) {
		//Prevent more than 2 decimals
		if (!isEditKeyEvent(event) &&
				$(this).val().indexOf(",") > 0 &&
				$(this).val().indexOf(",") === ($(this).val().length - 3) &&
				$(this).prop("selectionStart") === $(this).prop("selectionEnd") &&
				$(this).prop("selectionStart") >= $(this).val().length - 2) {
					event.preventDefault();
		}
	});

	//Prevent leading zeros and replace "." with "," in money
	$("#frm").on("input change", ".money" ,function(event) {
		//Replace "." with ","
		$(this).val($(this).val().replace(".", ","));

		//Prevent leading zeros
		if ($(this).val() !== "0" && $(this).val() !== "0,0" && $(this).val() !== "0,00") {
			var startIndex = 0;
			for (var i = 0; i < $(this).val().length; i++) {
				if ($(this).val().charAt(i) === "0" &&
						i !== $(this).val().length - 1 &&
						$(this).val().charAt(i + 1) !== ","
						|| $(this).val().charAt(i) === " ") {
					startIndex++;
				}
				else {
					break;
				}
			}
			if (startIndex > 0) {
				var trimmedFromLeadingZeros = $(this).val().substring(startIndex);
				$(this).val(trimmedFromLeadingZeros);
				if (event.type === "input") {
						$(this).prop("selectionStart", 1);
						$(this).prop("selectionEnd", 1);
				}
			}
		}
	});

	//Add two decimals if not present in money (for consistency)
	$("#frm").on("change", ".money" ,function(event) {
		if ($(this).val().length > 0) {
			if ($(this).val().indexOf(",") < 0) {
					$(this).val($(this).val() + ",00");
			}
			else if ($(this).val().indexOf(",") === $(this).val().length - 1) {
				$(this).val($(this).val() + "00");
			}
			else if ($(this).val().indexOf(",") === $(this).val().length - 2) {
				$(this).val($(this).val() + "0");
			}
		}
		else {
			$(this).val("0,00");
		}
	});

	//Checks if keyCode is numeric
	//Allows keycodes are defined by the array "exceptionKeyCodes"
	//allowShift makes an exception to allow the SHIFT key to be pressed (e.i for phone numbers)
	var isNumericKey = function(keyCode, exceptionKeyCodes, allowShift) {
		if (((allowShift || !shiftDown) && keyCode >= 48 && keyCode <= 57) ||
			(keyCode >= 96 && keyCode <= 105) ||
			(exceptionKeyCodes != undefined && $.inArray(keyCode, exceptionKeyCodes) > -1)) {
			return true;
		}
		return false;
	}

	var isDeleteKey = function(event) {
		var key = event.which || event.keyCode;
		//Check if key is delete
		if(key === 46) {
			return true;
		}
		return false;
	}

	var isBackspaceKey = function(event) {
		var key = event.which || event.keyCode;
		//Check if key is backspace
		if(key === 8) {
			return true;
		}
		return false;
	}

	var isDeleteOrBackSpace = function(event) {
		return isBackspaceKey(event) || isDeleteKey(event);
	}

	//Checks if key was delete, backspace, arrows, shift, ctrl, tab, home or end key
	var isEditKeyEvent = function(event) {
		if (ctrlDown) return true;
		var key = event.which || event.keyCode;
		if(!isDeleteOrBackSpace(event) && key != 9 && key != 13 && key != 16 && key != 17 && key != 19 && (key < 35 || key > 40)) return false;
		return true;
	}

	var inputHasSelection = function($input) {
		return $input.prop("selectionEnd") > $input.prop("selectionStart");
	}

	//Prevents user from entering non-numeric in
	//numeric inputs (possible in several browsers, e.g safari, firefox)
	$("#frm").on("keydown", "input.numeric-decimal", function(event) {
		var key = event.which || event.keyCode;
		//Prevent non numeric characters
		//Don't remove characters: "," and ".", don't allow SHIFT key
		if (!isEditKeyEvent(event) && !isNumericKey(key, [188, 190], false)) {
			event.preventDefault();
		}
	});

	//Used to set the marker at the end of the prefilled input
	//e.i country code for phone numbers
	$("#frm").on("keyup", "input.prevent-select-on-tab", function(event)  {
 		var key = event.which || event.keyCode;
 		if (key === 9) {
 			$(this).prop("selectionStart", $(this).prop("selectionEnd"));
 		}
 	});
	$("#frm").on("focus", "input.prevent-select-on-tab", function(event)  {
		if (tabDown || $(this).prop("selectionStart") != $(this).prop("selectionEnd")) {
			$(this).prop("selectionStart", $(this).prop("selectionEnd"));
		}
 	});
}

//Adds event listneres for checkboxes And
//radio buttons
function initCheckBoxesAndRadios() {

	//Event listener added to extend the clickable
	//area for checkboxes and radio buttons
	$("#frm").on("click", ".control-row .label_control", function(e) {
		if (e.target.localName != "input") {
			var $input = $(this).find("input");
			if ($input.length) {
				$input.click();
				$input.focus();
			}
		}
	});

	//Toggle class "checked" for customized checkboxes
	$("#frm").on("change", ".control-row .label_control input:checkbox", function() {
		toggleCheck($(this));
	});

	//Toggle class "checked" for customized radio buttons
	$("#frm").on("change", ".control-row .label_control input:radio", function() {
		var $allRadiosInFieldset = $(this).closest("fieldset").find("input:radio");
		$.each($allRadiosInFieldset, function() {
			toggleCheck($(this));
		});
	});

	//Focus - adds class (for accessibility)
	$("#frm").on("focus", ".control-row .label_control input", function() {
		$(this).parent().parent().addClass("focused");
	});

	//Blur - removes class (for accessibility)
	$("#frm").on("blur", ".control-row .label_control input", function() {
		$(this).parent().parent().removeClass("focused");
	});

	//Removes error message when a radio buttons
	//or checkbox is selected
	$("#frm").on("change", ".control-row .label_control input", function() {
		if($(this).is(":checked")) {
			$(this).closest("fieldset").parent().find(".digiforms_validation_message:not(.file-error):first").hide();
		}
	});

	initCheckedInputs();
  calcCheckAndRadioPlacment();

  $(window).resize(function() {
    calcCheckAndRadioPlacment();
  });
}

//Toggles class for checked/unchecked
//customized checkboxes (styled with pseudo elements)
function toggleCheck($input) {
	if ($input.is(":checked")) {
		$input.closest(".label_control").addClass("checked");
	}
	else {
		$input.closest(".label_control").removeClass("checked");
	}
};

//To ensure that all selected customized checkboxes and radio buttons
//are marked as checked when re-visiting a page / or DOM is changed
function initCheckedInputs() {
	var $checkboxes = $(".label_control input:checkbox:checked");
	$.each($checkboxes, function() {
		toggleCheck($(this));
	});

	var $radios = $(".label_control input:radio");
	$.each($radios, function() {
		toggleCheck($(this));
	});
}

function calcCheckAndRadioPlacment() {
  $.each($(".control-row .label_control input"), function() {
    var $control = $(this).parent();
    var $labelContainer = $control.siblings(".label_text");
		var fontSize = parseFloat($labelContainer.css("font-size").replace("px", ""));
    if($control.height() <= $labelContainer.height() && $labelContainer.height() >= 2 * fontSize) {
      $control.parent().addClass("align-top");
    }
    else if ($control.parent().hasClass("align-top")) {
      $control.parent().removeClass("align-top");
    }
  });
}

//Adds event listeners to the floating labels
//And ensures that labels are displayed correctly when the page is loaded
function initFloatingLabels() {
	initFloatingLabelsLoaded();

	$("#frm").on("input", ".label-float .input-field-alt", function() {
		showLabel($(this));
	});

	$("#frm").on("keyup", ".label-float .input-field-alt", function() {
		hideLabel($(this));
	});

	$(window).resize(function() {
		$.each($(".label-float .input-field-alt"), function() {
			togglePaddingTop($(this));
		});
	});
}

//Inits the floating labels when loaded in to the DOM
function initFloatingLabelsLoaded() {
	var toggleLabel = function($input) {
		if (!showLabel($input)) hideLabel($input);
	}

	var setPlaceholder = function($input) {
		var labelText = getLabel($input).find("label").text();
		if ($input.attr("placeholder") != labelText) {
			$input.attr("placeholder", labelText);
		}
	}

	$.each($(".label-float .input-field-alt"), function() {
		toggleLabel($(this));
		setPlaceholder($(this));
		togglePaddingTop($(this));
	});
}

//Shows a floating label IF it should be shown
function showLabel($input) {
	var $myLabel = getLabel($input);

	if ($input.val().length) {
		$myLabel.removeClass("hidden");
		togglePaddingTop($input);
		return true;
	}
	return false;
}

//Hides a floating label IF it should be hidden
function hideLabel($input) {
	var $myLabel = getLabel($input);

	if ($input.val().length === 0) {
		if (!$myLabel.hasClass("hidden")) {
			$myLabel.addClass("hidden");
		}
		togglePaddingTop($input);
		return true;
	}
	return false;
}

function getLabel($input) {
	return $input.parent().parent();
}

function togglePaddingTop($input) {
	var $myLabel = getLabel($input);

	if ($myLabel.hasClass("hidden")) {
			$input.attr("style", "padding-top: calc(" + $input.css('padding-bottom') + " + 3px) !important");
	}
	else {
		var calculatedPaddingTop;
		if ($myLabel.find("label").height() === 0) { //If the label is inside a container that is hidden
			var paddingTopFloat = parseFloat($myLabel.find("label").css('padding-top').replace("px", ""));
			var em1Float = parseFloat($myLabel.find("label").css('font-size').replace("px", ""));
			calculatedPaddingTop = paddingTopFloat + em1Float + 3;
		}
		else {
			calculatedPaddingTop = $myLabel.find("label").outerHeight();
		}

		if ($input.css('padding-top') !== calculatedPaddingTop + "px") {
			$($input).attr("style", "padding-top: " + calculatedPaddingTop + "px !important");
		}
	}
}

//Gets the xml data from the server
function getXMLData(getXMLUrl, onSuccess) {
	//The dataType is set to "text" in order for
	//it to work in Internet Explorer (at least IE11)
	//The data can later parsed as xml, which works fine.
	//Note that "cache" is set to "false"
	//Otherwise IE will cache the data returned from this request
	$.ajax({
		type: "GET",
		url: getXMLUrl,
		dataType: "text", //IE
		cache : false, //IE
		xhr: function() {
			return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
		},
		success: function(response) {
			onSuccess(response);
		}
	});
}

//Comboboxes
var countries = [
"Afghanistan", "Albania", "Algerie", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua og Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Aserbajdsjan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgia", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia og Herzegovina", "Botswana", "Bouvetøya", "Brasil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Canada", "Cayman Islands", "Chad", "Chile", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Cookøyene", "Costa Rica", "Cote D'Ivoire", "Cuba", "Danmark", "De forente arabiske emirater", "Den dominikanske republikk", "Den demokratiske republikken Kongo", "Den sentralafrikanske republikk", "Djibouti", "Dominica", "Ecuador", "Egypt", "El Salvador", "Ekvatorial-Guinea", "Eritrea", "Estonia", "Etiopia", "Falklandsøyene (Malvinas)", "Færøyene", "Fiji", "Filippinene", "Finland", "France", "Fransk Guyana", "Fransk Polynesia", "Franske sørlige territorier", "Gabon", "Gambia", "Georgia", "Ghana", "Gibraltar", "Hellas", "Hviterussland", "Grønland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island og Mcdonald Islands", "Honduras", "Hong Kong", "Island", "India", "Indonesia", "Iran", "Irak", "Irland", "Israel", "Italia", "Jamaica", "Japan", "Jemen", "Jomfruøyene (britisk)", "Jomfruøyene (amerikanske)", "Jordan", "Kambodsja", "Kamerun", "Kapp Verde", "Kasakhstan", "Kenya", "Kina", "Kirgisistan", "Kiribati", "Komorene", "Kongo", "Korea", "Kroatia", "Kuwait", "Kypros", "Laos", "Latvia", "Libanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Litauen", "Luxembourg", "Macao", "Madagaskar", "Makedonia", "Malawi", "Malaysia", "Maldivene", "Mali", "Malta", "Marshalløyene", "Martinique", "Mauretania", "Mauritius", "Mayotte", "Mexico", "Mikronesiaføderasjonen", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Marokko", "Mosambik", "Myanmar", "Namibia", "Nauru", "Nepal", "Nederland", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Norge", "Nord-Korea", "Nord-Marianene", "Ny-Caledonia", "Oman", "Pakistan", "Palau", "Panama", "Papua Ny-Guinea", "Paraguay", "Peru", "Pitcairn", "Polen", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russland", "Rwanda", "Saint Helena", "Saint Kitts og Nevis", "Saint Lucia", "Saint Pierre og Miquelon", "Saint Vincent og Grenadinene", "Samoa", "San Marino", "São Tomé og Príncipe", "Saudi-Arabia", "Senegal", "Serbia", "Seychellene", "Sierra Leone", "Singapore", "Slovakia (Slovakiske Republikk)", "Slovenia", "Salomonøyene", "Somalia", "Spania", "Sri Lanka", "Storbritannia", "Sudan", "Surinam", "Svalbard og Jan Mayen", "Sverige", "Swaziland", "Sveits", "Syria", "Sør-Afrika", "Tadsjikistan", "Taiwan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad og Tobago", "Tsjekkia", "Tunisia", "Turkmenistan", "Turks- og Caicosøyene", "Tuvalu", "Tyrkia", "Tyskland", "Uganda", "Ukraina", "USAs ytre småøyer", "Ungarn", "USA (Amerikas forente stater)", "Uruguay", "Usbekistan", "Vanuatu", "Vatikanstaten (Holy See)", "Venezuela", "Vest-Sahara", "Vietnam", "Wallis og Futuna", "Zambia", "Zimbabwe", "Østerrike", "Øst-Timor"
];

var countryCodeLookup = {};
var countryNameLookup = {};

var currentURL = window.location.href;
var getXMLUrlCurrentLocale = currentURL.replace("htmlViewer", "formAttributes");

var onSuccessCurrentLocale = function (data) {
	var xmlData = $.parseXML(data);
	var xmlNode = xmlData.getElementsByTagName("document_locale")[0];

	var currentLocale = xmlNode ? xmlNode.getAttribute("current_locale") : undefined;

	var getXMLUrlCountries;
	if (currentLocale) {
		getXMLUrlCountries = currentURL.split("/digiforms")[0] + "/Datasources/Countries/countries_" + currentLocale + ".xml";
	}
	else {
		getXMLUrlCountries = currentURL.split("/digiforms")[0] + "/Datasources/Countries/countries_nb_NO.xml";
	}

	var onSuccessCountries = function(data2) {
		var xmlData = $.parseXML(data2);
		var countryNodes = xmlData.getElementsByTagName("country");

		if (countryNodes.length) {
			countries = [];
		}

		for (var i=0; i < countryNodes.length; i++) {
			var countryName = countryNodes[i].getAttribute("name");
			var countryCode = countryNodes[i].getAttribute("code");
			countries.push(countryName);

			countryNameLookup[countryCode] = countryName;
			countryCodeLookup[countryName] = countryCode;
		}
	}
	getXMLData(getXMLUrlCountries, onSuccessCountries);
}

getXMLData(getXMLUrlCurrentLocale, onSuccessCurrentLocale);

function getComboboxList($input) {
	var dummyList = [ "Banan", "Eple", "Plomme" ];

	var sector = [ "Offentlig myndighet", "Bank, finans og forsikring", "Juridiske tjenester", "IT og telekommunikasjon", "Eiendom", "Media, avis, markedsføring og salgstjenester",
	"Butikk og varehandel", "Reiseliv / hotell", "Industri", "Bygg og anlegg", "Import og eksport av varer og tjenester", "Håndverkertjenester", "Kunst- og antikvitetshandel", "Transport og logistikk",
	"Restauranter, mat og uteliv", "Urmaker / gullsmed", "Bil, kjøretøy og verkstedstjenester", "Tro og religiøse-, frivillige-, veldedige-, humanitære- og ideelle organisasjoner",
	"Helse / omsorg / medisin og biologi / dyrehelse", "Jord- / skogbruk, fiske og matproduksjon", "Kultur og idrett", "Service og sikkerhet", "Skole, fritid, undervisning og forskning",
	"Arkitektur og interiør", "Økonomi og regnskap" ];

	var listName = $input.attr("class").substring($input.attr("class").indexOf("combobox-") + "combobox-".length).split(" ")[0];

	return $input.hasClass("combobox-countries") ?
					countries : ($input.hasClass("combobox-sector") ?
						sector : customComboBoxlists && customComboBoxlists[listName] ?
							customComboBoxlists[listName] : dummyList);
}

function getCorrespondingResults($input) {
	return $input.parent().siblings(".combobox-results-container").children(".combobox-results");
}

function getResultItemMarkup(content, number) {
	return "<li role=\"option\" aira-selected=\"false\" class=\"combobox-result\" id=\"combobox-result-" + number +"\">" +
						content +
					"</li>";
}

function initComboboxes() {
	buildComboboxes();

	//Builds the drop down of combobox results
	$("#frm").on("input", "input.combobox", function() {
		//Work around for bug in IE
		//(IE triggers oninput when an input receives or loses focus)
		if (!$(this).is(":focus")) return;

		var searchVal = $(this).val().toLowerCase();
		var $searchResults = getCorrespondingResults($(this));

		$searchResults.empty();

		if (searchVal.length) {
			var match = getComboboxList($(this));
			var secondaryMatches = [];

			var highlightMatch = function(val, startIndex, endIndex) {
				return val.substring(0, startIndex) + "<span class=\"case-match\">" + val.substring(startIndex, endIndex) + "</span>" + val.substring(endIndex, val.length);
			}

			var count = 0;

			$.each(match, function(index, value) {
				var indexOfSearchVal = value.toLowerCase().indexOf(searchVal);
				if (indexOfSearchVal === 0) {
					$searchResults.append(getResultItemMarkup(highlightMatch(value, 0, searchVal.length), ++count));
				}
				else if (indexOfSearchVal > 0) {
					secondaryMatches.push(highlightMatch(value, indexOfSearchVal, indexOfSearchVal + searchVal.length));
				}
			});

			if (!$searchResults.children().length) {
				$.each(secondaryMatches, function(index, value) {
					$searchResults.append(getResultItemMarkup(value, ++count));
				});
			}
			if ($(this).hasClass("combobox-strict")) {
				highlightItem(getCorrespondingResults($(this)).children().first());
			}
		}
		else {
			addAllResultsToComboboxList($(this));
		}
		toggleSearchResults($searchResults);
	});

	function hideSearchResults($searchResults) {
		if (!$searchResults.hasClass("hidden")) {
			$searchResults.scrollTop(0);
			$searchResults.addClass("hidden");
			$searchResults.parent().siblings(".combobox-wrap").attr("aria-expanded", "false");
			deselectHighlightedItem($searchResults);
			return true;
		}
		return false;
	}
	function showSearchResults($searchResults) {
		if ($searchResults.children().length) {
			$searchResults.parent().siblings(".combobox-wrap").attr("aria-expanded", "true");
			$searchResults.removeClass("hidden");
			return true;
		}
		return false;
	}
	function toggleSearchResults($searchResults) {
		if (!showSearchResults($searchResults)) hideSearchResults($searchResults);
	}

	//Hides search results when input loses focus
	$("#frm").on("blur", "input.combobox", function() {
		var $searchResults = getCorrespondingResults($(this));
		if ($(this).hasClass("combobox-strict")) {
			var $highlightedItem = $searchResults.children(".highlighted").first();
			if ($highlightedItem.length) {
				selectItem($highlightedItem);
			}
			else if ($.inArray($(this).val(), getComboboxList($(this))) < 0) {
				clearComboboxInput($(this));
			}
		}
		hideSearchResults($searchResults);
	});

	//Shows search results when input receives focus
	$("#frm").on("focus", "input.combobox", function() {
			showSearchResults(getCorrespondingResults($(this)));
	});

	function unHighlightItem($item) {
		if ($item && $item.length) {
			$item.attr("aria-selected", "false");
			$item.removeClass("highlighted");
			$item.closest(".combobox-container").find(".combobox").attr("aria-activedescendant", "");
			return true;
		}
		return false;
	}

	function highlightItem($item) {
		unHighlightItem($item.siblings(".highlighted"));
		if ($item && $item.length) {
			$item.attr("aria-selected", "true");
			$item.addClass("highlighted");
			$item.closest(".combobox-container").find(".combobox").attr("aria-activedescendant", $item.attr("id"));
			return true;
		}
		return false;
	}

	//Removes highlight from search item related to the given input
	function deselectHighlightedItem($searchResults) {
		if (!unHighlightItem($searchResults.children(".highlighted"))) {
			$searchResults.closest(".combobox-container").find(".combobox").attr("aria-activedescendant", "");
		}
	}
	//Removes highlight from search item when input is clicked
	$("#frm").on("click", "input.combobox", function() {
		deselectHighlightedItem(getCorrespondingResults($(this)));
	});

	//Enables navigation in the search results (using keys: arrow up, arrow down and enter)
	$("#frm").on("keydown", "input.combobox", function(e) {
		var $searchResults = getCorrespondingResults($(this));

		if (!$searchResults.hasClass("hidden")) {
			if (isDownArrow(e)) {
				var $resultItems = $searchResults.children(".combobox-result");
				var $highlightedItem = $resultItems.filter(".highlighted");

				if ($highlightedItem.length) {
					var $next = $highlightedItem.next();
					if (highlightItem($next)) {
						//Variables used to calculate and set the scroll position
						var searchResultsContainerTopOffset = $searchResults.offset().top;
						var searchResultsContainerBottomOffset = $searchResults.offset().top + parseFloat($searchResults.css("max-height").replace("px", ""));
						var resultItemTopOffset = $next.offset().top;
						var resultItemBottomOffset = $next.offset().top + $next.outerHeight();
						var scrollTop = $searchResults.scrollTop();

						//Check if the selected item is scrolled out of view
						if (resultItemTopOffset > searchResultsContainerBottomOffset || resultItemTopOffset < searchResultsContainerTopOffset) {
							$searchResults.scrollTop(scrollTop + resultItemTopOffset - searchResultsContainerTopOffset);
						}
						//Check if a normal step should be performed (scroll down by one item)
						else if (resultItemBottomOffset > searchResultsContainerBottomOffset) {
							$searchResults.scrollTop(scrollTop + $next.outerHeight());
						}
					}
					else {
						//Scroll to top
						unHighlightItem($highlightedItem);
						$searchResults.scrollTop(0);
					}
				}
				else {
					var $firstItem = $resultItems.first();
					highlightItem($firstItem);

					//Set scrollTop
					if ($searchResults.scrollTop() > 0) {
						$searchResults.scrollTop($firstItem.offset().top);
					}
				}
				e.preventDefault();
			}
			else if (isUpArrow(e)) {
				e.preventDefault();
				var $resultItems = $searchResults.children(".combobox-result");
				var $highlightedItem = $resultItems.filter(".highlighted");

				if ($highlightedItem.length) {
					var $prev = $highlightedItem.prev();
					if (highlightItem($prev)) {
						//Variables used to calculate and set the scroll position
						var searchResultsContainerTopOffset = $searchResults.offset().top;
						var searchResultsContainerBottomOffset = $searchResults.offset().top + parseFloat($searchResults.css("max-height").replace("px", ""));
						var resultItemTopOffset = $prev.offset().top;
						var resultItemBottomOffset = $prev.offset().top + $prev.outerHeight();
						var scrollTop = $searchResults.scrollTop();

						//Check if the selected item is scrolled out of view
						if (resultItemTopOffset < 0 || resultItemBottomOffset > searchResultsContainerBottomOffset) {
							$searchResults.scrollTop(scrollTop + resultItemTopOffset - searchResultsContainerTopOffset);
						}
						//Check if a normal step should be performed (scroll down by one item)
						else if (resultItemTopOffset < searchResultsContainerTopOffset) {
							$searchResults.scrollTop(scrollTop - $prev.outerHeight());
						}
					}
					else {
						//Scroll to top
						unHighlightItem($highlightedItem);
						$searchResults.scrollTop(0);
					}
				}
				else {
					var $lastItem = $resultItems.last();
					highlightItem($lastItem);

					//Set scrollTop
					var lastItemBottomOffset = $lastItem.offset().top + $lastItem.outerHeight();
					$searchResults.scrollTop($searchResults.scrollTop() + lastItemBottomOffset);
				}
				e.preventDefault();
			}
			else if (isEnterKey(e) && $searchResults.children(".highlighted").length) {
				selectItem($searchResults.children(".highlighted"));
				e.preventDefault();
			}
			else if (isEscKey(e)) {
				hideSearchResults($searchResults);
			}
		}
		//Show all results when user presses down arrow IF the search string is empty
		else if (isDownArrow(e)) {
			if ($(this).val() === "") {
					addAllResultsToComboboxList($(this));
			}
			showSearchResults($searchResults);
		}
	});

	//Functions used to detect keys
	function isDownArrow(e) {
		return e.which === 40;
	}
	function isUpArrow(e) {
		return e.which === 38;
	}
	function isEnterKey(e) {
		return e.which === 13;
	}
	function isEscKey(e) {
		return e.which === 27;
	}

	//Select search result when clicked
	$("#frm").on("mousedown", ".combobox-result", function(e) {
		selectItem($(this));
		e.preventDefault();
	});

	//Selects an item from the search results
	function selectItem($searchItem) {
		var $searchInput = $searchItem.closest(".combobox-container").find("input.combobox");
		$searchInput.val($searchItem.text());

		if ($searchInput.hasClass("combobox-countries")) {
			$searchInput.attr("data-value", countryCodeLookup[$searchInput.val()]);
		}

		var $searchResults = $searchItem.parent();
		hideSearchResults($searchResults);

		//Set scrollTop (entire page) if input out of view
		var $searchInputLabel = $searchItem.closest(".combobox-container").find("label");
		if (!$searchInput.isInViewport()) {
			$("html, body").animate({
					scrollTop: $searchInputLabel.offset().top
			}, 100);
		}

		$searchResults.empty();

		$searchInput.change();
	}

	function clearComboboxInput($input) {
		$input.val("");
		$input.removeAttr("data-value");
		addAllResultsToComboboxList($input);
		$input.change();
	}

	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		return elementTop > viewportTop && elementTop < viewportBottom;
	};

	//Highlight search result when hovered
	$("#frm").on("mouseenter", ".combobox-result", function() {
		highlightItem($(this));
	});
}

function buildComboboxes() {
	$.each($(".combobox-container"), function(index) {
		var $input = $(this).find(".combobox");
		$input.attr("spellcheck", "false");

		//Disable autofill in all modern browsers
		$input.attr("autocomplete", "off");
		$input.attr("list", "autocompleteOff");

		$input.parent().addClass("combobox-wrap");
		if ($input.hasClass("combobox-strict")) {
			$input.parent().addClass("combobox-strict-wrap");
		}

		//Set ARI attributes on parent
		$input.parent().attr("role", "combobox");
		$input.parent().attr("aria-haspopup", "combobox");
		$input.attr("aria-owns", "combobox-results-" + (index + 1));
		$input.parent().attr("aria-expanded", "false");

		//Set ARI attributes on input
		$input.attr("aria-autocomplete", "list");
		$input.attr("aria-controls", "combobox-results-" + (index + 1));
		$input.attr("aria-activedescendant", ""); //Is this right?

		if (!$(this).children(".combobox-results-container").length) {
			var labelID = $(this).find("label").attr("id");
			$(this).append(
				"<div class=\"combobox-results-container\">" +
					"<ul role=\"listbox\" aria-labeledby=\"" + labelID + "\" class=\"combobox-results hidden\" id=\"combobox-results-" + (index + 1) + "\"></ul>" +
				"</div>"
			);

			var $comboBox = $(this).find(".combobox");

			addAllResultsToComboboxList($comboBox);
		}
	});
}

//Function used to show all search results in the list
function addAllResultsToComboboxList($input) {
	var match = getComboboxList($input);
	var $searchResults = getCorrespondingResults($input);
	$searchResults.empty();
	$.each(match, function(index, value) {
		$searchResults.append(getResultItemMarkup(value, (index + 1)));
	});
}

function initFileUploads() {
	$("#frm").on("focus", ".attachment input:file", function() {
		$("label[for='" + $(this).attr("id") + "']").addClass("focused");
	});
	$("#frm").on("blur", ".attachment input:file", function() {
		$("label[for='" + $(this).attr("id") + "']").removeClass("focused");
	});
}

function initModals() {
	bodyPadding = $("body").css("padding");
	bodyPadding = bodyPadding.substring(0, bodyPadding.length - 2);
	initModalARIA();
	initModalEvents();
}

function initModalARIA() {
	$(".modal-container.hidden").attr("aria-expanded", "false");

	var $visibleModals = $(".modal-container:not(.hidden)");
	$visibleModals.attr("aria-expanded", "true");
	if ($visibleModals.length > 0) {
		setScrollBarOffset();
	}

	$.each($("button.open-modal-btn"), function(index) {
		var n = index + 1;
		var $modalContainer = $(".modal-container:eq("+ (n - 1) + ")");
		$(this).attr("aria-controls", $modalContainer.attr("id"));
	});

	$.each($(".modal-container"), function(index) {
		var $closeBtns = $(this).find(".btn-close");
		$closeBtns.attr("aria-controls", $(this).attr("id"));

		if ($("html").attr("lang").toLowerCase() === "se") {
			$closeBtns.attr("aria-label", "Stäng");
		}
		else if ($("html").attr("lang").toLowerCase() === "en") {
			$closeBtns.attr("aria-label", "Close");
		}
		else if ($("html").attr("lang").toLowerCase() === "da") {
			$closeBtns.attr("aria-label", "Luk");
		}
		else {
			$closeBtns.attr("aria-label", "Lukk");
		}
	});
}

function initModalEvents() {
	$(".modal-container.hidden").attr("aria-expanded", "false");
	$.each($("button.open-modal-btn"), function(index) {
		var n = index + 1;
		var $modalContainer = $("#modal-container-" + n);
		$(this).attr("aria-controls", $modalContainer.attr("id"));
	});

	$("#frm").on("keydown", ".modal-container button:last", function (e) {
		var $modalContainer = $(this).closest(".modal-container");
		if (!$modalContainer.hasClass("hidden") && (e.which === 9 && !e.shiftKey)) {
		   e.preventDefault();
		   $modalContainer.find("button:first").focus();
		}
	});

	$("#frm").on("keydown", ".modal-container button:first", function (e) {
		var $modalContainer = $(this).closest(".modal-container");
		if (!$modalContainer.hasClass("hidden") && (e.which === 9 && e.shiftKey)) {
		   e.preventDefault();
		   $modalContainer.find("button:last").focus();
		}
	});

	//When focus is outside modal on opening
	$(document).on("keydown", function(e) {
		var $openModalContainer = $(".modal-container:not(.hidden)");
		if ($openModalContainer.length) {
			if (e.which === 9 && !$openModalContainer.find("button:focus").length) {
				e.preventDefault();
				$openModalContainer.find("button:first").focus();
			}
			else if (e.which === 27) { //If user press esc key
				closeModal($openModalContainer);
			}
		}
	});

	var closeModal = function($modalContainer) {
		$modalContainer.attr("aria-expanded", "false");
		$modalContainer.attr("aria-hidden", "true");
		$modalContainer.addClass("hidden");

		$("body").css("overflow", "scroll");
		$("body").css("padding-right", bodyPadding + "px");
	}

	//Bind events to close modals
	$("#frm").on("click", ".modal-container .btn-close", function() {
		closeModal($(this).closest(".modal-container"));
	});

	//Bind events to open modals
	$("#frm").on("click", "button.open-modal-btn", function () {
		var $modalContainer = $("#" + $(this).attr("aria-controls"));
		$modalContainer.removeClass("hidden");
		$modalContainer.attr("aria-expanded", "true");
		$modalContainer.attr("aria-hidden", "false");
		$modalContainer.scrollTop(0);

		setScrollBarOffset();
	});
}

//Set scrollbar offset
function setScrollBarOffset() {
	var scrollBarWidth = getScrollbarWidth() + parseInt(bodyPadding);
	$("body").css("padding-right", scrollBarWidth + "px");
	$("body").css("overflow", "hidden");
}

function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

//Checks for changes in the DOM
//And adds HTML attributes and inits customized checkboxes
//Whenever changes are made to the frm-element (main form) in the DOM
function checkForDOMChanges() {
	// Observe a specific DOM element:
	observeDOM( document.getElementById("frm") ,function(){
			initCheckedInputs();
			addHTMLAttributes();
      calcCheckAndRadioPlacment();
			initFloatingLabelsLoaded();
			buildComboboxes();
			initModalARIA();
	});
}

//Observes the DOM for changes
//Uses MutationObserver if the browser supports it
//Otherwise it uses mutation events (if the browser supports it)
var observeDOM = (function() {
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
				eventListenerSupported = window.addEventListener;

		return function(obj, callback){
				if( MutationObserver ) { //If browser supports mutation observers
						// define a new observer
						var obs = new MutationObserver(function(mutations, observer){
								if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
										callback();
						});
						// have the observer observe for changes in children
						obs.observe( obj, { childList:true, subtree:true });
				}
				else if( eventListenerSupported ) { //If browser supports mutation events
						//Add mutation event listeners
						obj.addEventListener('DOMNodeInserted', callback, false);
						obj.addEventListener('DOMNodeRemoved', callback, false);
				}
		};
})();

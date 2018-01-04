//Used to detect when the CTRL key is pressed
var ctrlDown;

//Used to detect when the SHIFT key is pressed
var shiftDown;

//Used to detect when the TAB key is pressed
var tabDown;

$(document).ready(function() {
	initCheckBoxesAndRadios();
	initInputs();
	observeMutations();
});


//Initalizes event listeners
//for the CTRL and TAB keys
function initGlobalKeyEventListener() {

	//Checks if the CTRL key is pressed
	ctrlDown = false;
	$(document).on("keydown", function(event) {
		var key = event.which || event.keyCode;
		if (key == 17) {
			ctrlDown = true;
		}
	});
	$(document).on("keyup", function(event) {
		var key = event.which || event.keyCode;
		if (key == 17) {
			ctrlDown = false;
		}
	});

	//Checks if the SHIFT key is pressed
	shiftDown = false;
	$(document).on("keydown", function(event) {
		var key = event.which || event.keyCode;
		if (key == 16) {
			shiftDown = true;
		}
	});
	$(document).on("keyup", function(event) {
		var key = event.which || event.keyCode;
		if (key == 16) {
			shiftDown = false;
		}
	});

	//Checks if the TAB key is pressed
	tabDown = false;
	$(document).on("keydown", function(event) {
		var key = event.which || event.keyCode;
		if (key == 9) {
			tabDown = true;
		}
	});
	$(document).on("keyup", function(event) {
		var key = event.which || event.keyCode;
		if (key == 9) {
			tabDown = false;
		}
	});
}


//Adds event listneres for checkboxes And
//radio buttons
function initCheckBoxesAndRadios() {

	//Event listener added to extend the clickable
	//area for checkboxes and radio buttons
	$("#frm").on("click", ".label_text", function(e) {
	    if (e.target.localName != "label") {
	    	var $checkbox = $(this).parent().find("input:checkbox");
	    	$checkbox.trigger("click");

	    	var $radio = $(this).parent().find("input:radio");
	    	$radio.trigger("click");
	    }
	});

	//Toggles class for checked/unchecked
	//customized checkboxes (styled with pseudo elements)
	var toggleCheck = function($input) {
		if ($input.is(":checked")) {
	        $input.parent().siblings(".label_text").addClass("checked");
	    }
	    else {
	    	$input.parent().siblings(".label_text").removeClass("checked");
	    }
	};

	//Toggle class "checked" for customized checkboxes
	$("#frm").on("change", ".control input:checkbox", function() {
		toggleCheck($(this));
	});

	//Toggle class "checked" for customized radio buttons
	$("#frm").on("change", ".control input:radio", function() {
		var $allRadiosInFieldset = $(this).closest("fieldset").find("input:radio");
		$.each($allRadiosInFieldset, function() {
			toggleCheck($(this));
		});
	});

	//Focus - adds class (for accessibility)
	$("#frm").on("focus", ".control input", function() {
		$(this).parent().parent().addClass("focused");
	});

	//Blur - removes class (for accessibility)
	$("#frm").on("blur", ".control input", function() {
		$(this).parent().parent().removeClass("focused");
	});

	//Removes error message when a radio buttons
	//or checkbox is selected
	$("#frm").on("change", ".control input", function() {
		if($(this).is(":checked")) {
			$(this).closest(".control-container").find(".digiforms_validation_message:not(.file-error):first").hide();
		}
	});

	initCheckedInputs();
}

//To ensure that all selected customized checkboxes and radio buttons
//are marked as checked when re-visiting a page / or DOM is changed
function initCheckedInputs() {
	var $checkboxes = $(".control input:checkbox:checked");
	$.each($checkboxes, function() {
		toggleCheck($(this));
	});

	var $radios = $("input:radio");
	$.each($radios, function() {
		toggleCheck($(this));
	});
}

function addHTMLAttributes() {
	//Bring up the numeric keypad for iOS and Android
	$("input.numeric-text").attr("inputmode", "numeric"); //Android
	$("input.numeric-text").attr("pattern", "[0-9]*"); //iOS

	//Append attributes
	$(".numeric-decimal").attr("step", "0.01");
	$(".percentage").attr("min", "0");
	$(".percentage").attr("max", "100");
}

//Inits inputs with masks, HTML attributes and event listeners
function initInputs() {
	addHTMLAttributes();

	//Sets a mask for some classes:
	$("input.numeric-text:not(.account-mask, .vps-account-mask, .org-number-mask, .date-mask, input[type='tel'], .letteral-text)").mask('0#');

	$('input[type="tel"]').mask("+099999 000 00 000 000 00 000 00");

	$("input.account-mask").mask("0000 00 00000");

	$("input.vps-account-mask").mask("00000 0000000");

	$("input.org-number-mask").mask("000 000 000");

	$("input.date-mask").mask("00.00.0000");

	$("input.letteral-text").mask("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
		{translation: {"Z": {pattern: /[a-zA-Z ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏàáâãäåæçèéêëìíîïÐÑÒÓÔÕÖØÙÚÛÜÝÞßðñòóôõöøùúûüýþÿ-]/}}});

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
		if(key == 46) {
			return true;
		}
		return false;
	}

	var isBackspaceKey = function(event) {
		var key = event.which || event.keyCode;
		//Check if key is backspace
		if(key == 8) {
			return true;
		}
		return false;
	}

	//Checks if key was delete, backspace, arrows, shift, ctrl, tab, home or end key
	var isEditKeyEvent = function(event) {
		if (ctrlDown) return true;
		var key = event.which || event.keyCode;
		if(!isBackspaceKey(event) && key != 9 && !isDeleteKey(event) && key != 13 && key != 16 && key != 17 && key != 19 && (key < 35 || key > 40)) return false;
		return true;
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

	//Validates percentage according to min/max attributes.
	//This one is added here and not in the validation() function
	//because it is the only validation needed for benifital owners.
	//Those are added added dynamically using AJAX which means
	//that this parent function (initInputs) must be called again
	//when a benifital owner is added
  $("#frm").on("change paste", "input.percentage", function() {
  	var val = parseFloat($(this).val());
  	var max = $(this).attr("max");
  	var min = $(this).attr("min");

  	if(val <= max && val >= min) {
  		$(this).parent().parent().siblings("input[type=hidden]").val("true");
  	}
  	else {
  		$(this).parent().parent().siblings("input[type=hidden]").val("false");
  	}
  	$(this).val(val.toString());
  });

	//Used to set the marker at the end of the prefilled input
	//e.i country code for phone numbers
	$("#frm").on("keyup", "input.prevent-select-on-tab", function(event)  {
 		var key = event.which || event.keyCode;
 		if (key == 9) {
 			$(this).prop("selectionStart", $(this).prop("selectionEnd"));
 		}
 	});
	$("#frm").on("focus", "input.prevent-select-on-tab", function(event)  {
		if (tabDown || $(this).prop("selectionStart") != $(this).prop("selectionEnd")) {
			$(this).prop("selectionStart", $(this).prop("selectionEnd"));
		}
 	});
}

//Observes changes on the #frm (main form)
function observeMutations() {
	var callback = function() {
		initCheckedInputs();
		addHTMLAttributes();
	}

	// Create an observer instance linked to the callback function
	var observer = new MutationObserver(callback);

	var config = { subtree: true, childList: true };

	// Start observing the target node for configured mutations
	observer.observe(document.getElementById("frm"), config);
}

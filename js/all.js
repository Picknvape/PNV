var countryInput = document.getElementById('country-input');
var additionalEmailInput = document.getElementById('email-input-verify');
///
InitialUISetup();


function countryValidity() {
  if (!CountryInList(countryInput.value)) {
    countryInput.setCustomValidity("Nope, select country from the list");
  } else {
    countryInput.setCustomValidity("");
  }
}

function AdditionalEmailValidity () {
	let isEmailTheSame = additionalEmailInput.value.toLowerCase()== document.getElementById('email-input').value.toLowerCase();
	if (!isEmailTheSame) {
		additionalEmailInput.setCustomValidity("Email addresses differ. Check them for typos and try again");
	} else {
		additionalEmailInput.setCustomValidity("");				 
	}			
}

function InitialUISetup() {
 
  countryValidity();
  AdditionalEmailValidity();
  RandomUISetup(true);
  countryInput.addEventListener("input", function(event) {countryValidity();});
  additionalEmailInput.addEventListener("input", function(event) {AdditionalEmailValidity();});
  
}

function CompileOrderData() {
  var orderData = new Array();
  for (let i = 0; i < GetAdditionalFormPointer(); i++) {
    var box = {};
    box.orderSize = GetChosenBoxSize((i == 0) ? '' : i);
    box.tastePreferences = GetPreferences((i == 0) ? '' : i, true);
    box.shippingInfo = GetCountryData((i == 0) ? '' : i);
    box.clientName = document.getElementById('name-input' + ((i == 0) ? '' : i)).value;
    box.clientPhone = document.getElementById('phone-input' + ((i == 0) ? '' : i)).value;
    box.clientPhone = box.clientPhone.replace(new RegExp('[ ()+-]', 'g'), '');
    box.clientEmail = document.getElementById('email-input' + ((i == 0) ? '' : i)).value;
    orderData.push(box);
  }

  return orderData;
}

function OnOrderSucsess() {
  document.body.classList.toggle('after-order-overlay-shown');
  document.getElementById('hide-after-order-overlay-button').addEventListener('click', function() {
    document.body.classList.toggle('after-order-overlay-shown')
  });
}

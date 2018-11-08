InitialUISetup();

function IsEmailVerified() {
  return document.getElementById('email-input').value.toLowerCase() == document.getElementById('email-input-verify').value.toLowerCase();
}


function countryValidity() {
  var countryInput = document.getElementById('country-input');
  if (!CountryInList(countryInput.value)) {
    countryInput.setCustomValidity("Nope, select country from the list");
  } else {
    countryInput.setCustomValidity("");
  }
}

function InitialUISetup() {
  var countryInput = document.getElementById('country-input');
  RandomUISetup(true);
  countryInput.addEventListener("input", function(event) {
    countryValidity();
  });
  countryValidity();
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

function OrderDataIssueHighlighter() {
  var od = CompileOrderData();
  od.forEach(function(element) {
    if (element.shippingInfo.country) {}
  });
}

document.getElementById('send-order-button').addEventListener('click', CompileOrderData);

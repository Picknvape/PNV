UpdateUI();

function UpdateUI() {
	reflectChoiceOnMap(true);
	UpdateBoxVisual();
}
function CompileOrderData() {
  var orderData = {};
  hasAllInfo = true;
  orderData.orderSize = GetChosenBoxSize();
  orderData.tastePreferences = GetPreferences(true);
  orderData.shippingInfo = GetCountryData();
  orderData.clientName = document.getElementById('name-input').value;
  orderData.clientPhone = document.getElementById('phone-input').value;
  orderData.clientEmail = document.getElementById('email-input').value;
	return orderData;
}

document.getElementById('send-order-button').addEventListener('click', CompileOrderData);
let countryInput = document.getElementById('country-input');
		countryInput.addEventListener("input",function (event) {
			if (!CountryInList(countryInput.value)) {
				countryInput.setCustomValidity("This country is not in shipping zone. Check for typos and try again");
			} else {
				countryInput.setCustomValidity("");
			}
		});

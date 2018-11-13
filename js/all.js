UpdateUI();

function UpdateUI() {
	reflectChoiceOnMap(true);
	reflectToUI(GetPreferences(true));
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

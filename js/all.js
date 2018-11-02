function InitialRadioReader() {
	CompileOrderData();
	reflectChoiceOnMap();
}
function CompileOrderData() {
  var orderData = {};
  orderData.orderSize = GetChosenBoxSize();
  orderData.tastePreferences = GetPreferences(true);
  orderData.shippingInfo = GetCountryData();
  orderData.clientName = document.getElementById('name-input').value;
  orderData.clientPhone = document.getElementById('phone-input').value;
  orderData.clientEmail = document.getElementById('email-input').value;
  return orderData;
}
InitialRadioReader();
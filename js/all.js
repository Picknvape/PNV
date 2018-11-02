InitialRadioReader();
function InitialRadioReader() {
	CompileOrderData();
	reflectChoiceOnMap();
}	
function CompileOrderData() {
  var orderData = {};
  orderData.hasAllInfo = true;
  orderData.orderSize = GetChosenBoxSize();
  orderData.tastePreferences = GetPreferences(true);
  orderData.shippingInfo = GetCountryData();
  orderData.clientName = document.getElementById('name-input').value;
  if (orderData.clientName.length<1) {orderData.hasAllInfo = false;}
  orderData.clientPhone = document.getElementById('phone-input').value;
  if (orderData.clientPhone.length<1) {orderData.hasAllInfo = false;}
  orderData.clientEmail = document.getElementById('email-input').value;
  if (orderData.clientEmail.length<1) {orderData.hasAllInfo = false;}
  if (!orderData.hasAllInfo) {console.log('user info incomplete');}
  return orderData;
}

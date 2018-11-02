InitialRadioReader();
function InitialRadioReader() {
	reflectChoiceOnMap();
	reflectToUI(GetPreferences(true));
}	
function CompileOrderData() {
  var orderData = {};
  hasAllInfo = true;
  orderData.orderSize = GetChosenBoxSize();
  orderData.tastePreferences = GetPreferences(true);
  orderData.shippingInfo = GetCountryData();
  orderData.clientName = document.getElementById('name-input').value;
  if (orderData.clientName.length<1) 	{hasAllInfo = false;}
  orderData.clientPhone = document.getElementById('phone-input').value;
  if (orderData.clientPhone.length<1) 	{hasAllInfo = false;}
  orderData.clientEmail = document.getElementById('email-input').value;
  var emailVerified = document.getElementById('email-input').value.toLowerCase() == document.getElementById('email-input-verify').value.toLowerCase();
  if (orderData.clientEmail.length<1 || !emailVerified) {hasAllInfo = false;}
  if (!hasAllInfo) {
	  console.log('user info incomplete');
	  //should light up stuff depending on missing data;
	  
	   if (orderData.clientName.length<1) {
		   document.getElementById('name-input').style.borderBottomColor = "rgba(178,76,76,1)";
	   }
	   if (orderData.clientPhone.length<1) {
		   document.getElementById('phone-input').style.borderBottomColor = "rgba(178,76,76,1)";
	   }
	   if (orderData.clientEmail.length<1) {
		   document.getElementById('email-input').style.borderBottomColor = "rgba(178,76,76,1)";
	   }
	   if (!emailVerified) {
		   document.getElementById('email-input-verify').style.borderBottomColor = "rgba(178,76,76,1)";
	   }
	  return false;
  } else {
	  return orderData;
  }
}

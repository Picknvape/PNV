InitialRadioReader();
function IsEmailVerified() {
	return document.getElementById('email-input').value.toLowerCase() == document.getElementById('email-input-verify').value.toLowerCase();
}
function InitialRadioReader() {
	RandomUISetup(true);
	reflectToUI(GetPreferences(true));
}
function CompileOrderData() {
  var orderData = {};
  hasAllInfo = true;
  orderData.orderSize = GetChosenBoxSize();
  orderData.tastePreferences = GetPreferences(true);
  orderData.shippingInfo = GetCountryData();
  orderData.clientName = document.getElementById('name-input').value;
  orderData.clientPhone = document.getElementById('phone-input').value;
  orderData.clientPhone = orderData.clientPhone.replace(new RegExp('[ ()+-]', 'g'), '');
  orderData.clientEmail = document.getElementById('email-input').value;
  
  if (orderData.clientName.length<1) 	{hasAllInfo = false;}
  if (orderData.clientPhone.length<1) 	{hasAllInfo = false;}
  if (orderData.clientEmail.length<1 || !IsEmailVerified()) {hasAllInfo = false;}
  if (!hasAllInfo) {
	  return false;
  } else {
	  return orderData;
  }
}

function OrderDataIssueHighlighter()
{
	//ktrzhnv TODO: classes for lighting up
	//div to reflect issues with textx
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
	   if (!IsEmailVerified()) {
		   document.getElementById('email-input-verify').style.borderBottomColor = "rgba(178,76,76,1)";
	   }
}

document.getElementById('send-order-button').addEventListener('click', CompileOrderData);

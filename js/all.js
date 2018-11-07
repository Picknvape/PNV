InitialRadioReader();
function IsEmailVerified() {
	return document.getElementById('email-input').value.toLowerCase() == document.getElementById('email-input-verify').value.toLowerCase();
}
function InitialRadioReader() {
	RandomUISetup(true);
}
function CompileOrderData() {
  var orderData = new Array();
  for (let i=0; i<GetAdditionalFormPointer(); i++) 
  {
	var box = {};
	box.orderSize = GetChosenBoxSize((i==0)?'':i);
	box.tastePreferences = GetPreferences((i==0)?'':i,true);
	box.shippingInfo = GetCountryData();
	box.clientName = document.getElementById('name-input').value;
	box.clientPhone = document.getElementById('phone-input').value;
	box.clientPhone = box.clientPhone.replace(new RegExp('[ ()+-]', 'g'), '');
	box.clientEmail = document.getElementById('email-input').value;
	orderData.push(box);
  } 
  
  return orderData;
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

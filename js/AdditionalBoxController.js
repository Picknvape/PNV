var additionalFormPointer = 1;
function GetAdditionalFormPointer() {return additionalFormPointer;}
var parentNode = document.getElementById('order-form');
document.getElementById('new-box-button').addEventListener('click', function() {AddNewBox()});
document.getElementById('new-box-same-delivery-button').addEventListener('click', function() {AddNewBox(false)});

function AddNewBox(samePerson = false) {
	let tasteData = GetPreferences('',true);
	var newTasteNode =  document.getElementById('order-tastes').cloneNode(true);
	newTasteNode.id+='-additional-'+additionalFormPointer;
	
	var oldRadioValue = GetChosenBoxSize();
	var newSizeNode = document.getElementById('order-size').cloneNode(true);
	newSizeNode.id+='-additional-'+additionalFormPointer;
	
	parentNode.appendChild(newSizeNode);
	newSizeNode.childNodes[3].childNodes[1].childNodes[1].childNodes[1].name += additionalFormPointer;
	newSizeNode.childNodes[3].childNodes[1].childNodes[3].childNodes[1].name += additionalFormPointer;
	newSizeNode.childNodes[3].childNodes[1].childNodes[5].childNodes[1].name += additionalFormPointer;
	
	let orderRadio = document.getElementsByName('boxSize');
	for (let i = 0; i < orderRadio.length; i++) {
		if (orderRadio[i].value == oldRadioValue) {
			orderRadio[i].checked = true;
		}
	}
	
	parentNode.appendChild(newTasteNode);
	newTasteNode.childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[3].childNodes[3].childNodes[1].childNodes[3].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[3].childNodes[3].childNodes[1].childNodes[5].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[3].childNodes[3].childNodes[1].childNodes[7].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[3].childNodes[3].childNodes[1].childNodes[9].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[3].childNodes[3].childNodes[1].childNodes[11].childNodes[1].name+=additionalFormPointer
	
	newTasteNode.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[5].childNodes[3].childNodes[1].childNodes[3].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[5].childNodes[3].childNodes[1].childNodes[5].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[5].childNodes[3].childNodes[1].childNodes[7].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[5].childNodes[3].childNodes[1].childNodes[9].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[5].childNodes[3].childNodes[1].childNodes[11].childNodes[1].name+=additionalFormPointer
	
	newTasteNode.childNodes[7].childNodes[3].childNodes[1].childNodes[1].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[7].childNodes[3].childNodes[1].childNodes[5].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[7].childNodes[3].childNodes[1].childNodes[7].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[7].childNodes[3].childNodes[1].childNodes[9].childNodes[1].name+=additionalFormPointer
	newTasteNode.childNodes[7].childNodes[3].childNodes[1].childNodes[11].childNodes[1].name+=additionalFormPointer
	
		
	var mintSelection		= document.getElementsByName('mint');
	var dessertsSelection 	= document.getElementsByName('desserts');
	var exoticSelection 	= document.getElementsByName('exotic');
	var fruitsSelection 	= document.getElementsByName('fruits');
	var tobaccoSelection 	= document.getElementsByName('tobacco');
	var berriesSelection 	= document.getElementsByName('berries');
	
	mintSelection.forEach(function (element) {
		if (tasteData.mint == element.value) {element.checked = true;}
	});
		dessertsSelection.forEach(function (element) {
		if (tasteData.desserts == element.value) {element.checked = true;}
	});
		exoticSelection.forEach(function (element) {
		if (tasteData.exotic == element.value) {element.checked = true;}
	});
		fruitsSelection.forEach(function (element) {
		if (tasteData.fruits == element.value) {element.checked = true;}
	});
		tobaccoSelection.forEach(function (element) {
		if (tasteData.tobacco == element.value) {element.checked = true;}
	});
		berriesSelection.forEach(function (element) {
		if (tasteData.berries == element.value) {element.checked = true;}
	});
	
	if (!samePerson) 
	{
		var newAddressNode = document.getElementById('order-delivery').cloneNode(true);
		newAddressNode.id+='-additional-'+additionalFormPointer;
		
		var newContactsNode = document.getElementById('order-contacts').cloneNode(true);
		newContactsNode.id+='-additional-'+additionalFormPointer;
		parentNode.appendChild(newAddressNode);
		
		newAddressNode.childNodes[5].childNodes[1].childNodes[3].childNodes[1].id+=additionalFormPointer;
		console.log(newAddressNode.childNodes[5].childNodes[1].childNodes[3].childNodes[1].id);
		newAddressNode.childNodes[5].childNodes[1].childNodes[5].childNodes[1].id+=additionalFormPointer;
		newAddressNode.childNodes[5].childNodes[1].childNodes[7].childNodes[1].id+=additionalFormPointer;
		newAddressNode.childNodes[5].childNodes[1].childNodes[1].remove();
		let countryInput = document.getElementById('country-input'+additionalFormPointer);
		countryInput.addEventListener("input",function (event) {
			if (!CountryInList(countryInput.value)) {
				countryInput.setCustomValidity("This country is not in shipping zone. Check for typos and try again");
			} else {
				countryInput.setCustomValidity("");				 
			}			
		}); 
		
		parentNode.appendChild(newContactsNode);
		newContactsNode.childNodes[3].childNodes[1].childNodes[1].childNodes[1].id+=additionalFormPointer; //3 5 7
		newContactsNode.childNodes[3].childNodes[1].childNodes[3].childNodes[1].id+=additionalFormPointer; //3 5 7
		newContactsNode.childNodes[3].childNodes[1].childNodes[5].childNodes[1].id+=additionalFormPointer; //3 5 7
		newContactsNode.childNodes[3].childNodes[1].childNodes[7].childNodes[1].id+=additionalFormPointer; //3 5 7
		
		let additionalEmailInput = document.getElementById('email-input-verify'+additionalFormPointer);
		additionalEmailInput.addEventListener('input', function (event) {
			let isEmailTheSame = additionalEmailInput.value.toLowerCase()== document.getElementById('email-input'+additionalFormPointer).value.toLowerCase();
			if (!isEmailTheSame) {
				additionalEmailInput.setCustomValidity("Email addresses differ. Check them for typos and try again");
			} else {
				additionalEmailInput.setCustomValidity("");				 
			}			
		});

	}
	additionalFormPointer++;
}
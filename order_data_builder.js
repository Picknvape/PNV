function composePreferences() {
	var mintSelection		= document.getElementsByName('mint');
	var dessertsSelection 	= document.getElementsByName('desserts');
	var exoticSelection 	= document.getElementsByName('exotic');
	var fruitsSelection 	= document.getElementsByName('fruits');
	var tobaccoSelection 	= document.getElementsByName('tobacco');
	var berriesSelection 	= document.getElementsByName('berries');
	
	var preferences = new Array();
	for (var i = 0, length = mintSelection.length; i < length; i++)
	{
		if (mintSelection[i].checked)
		{
			preferences.push(i);
			break;
		}
	}
	
	for (var i = 0, length = dessertsSelection.length; i < length; i++)
	{
		if (dessertsSelection[i].checked)
		{
			preferences.push(i);
			break;
		}
	}
	
	for (var i = 0, length = exoticSelection.length; i < length; i++)
	{
		if (exoticSelection[i].checked)
		{
			preferences.push(i);
			break;
		}
	}
	
	for (var i = 0, length = fruitsSelection.length; i < length; i++)
	{
		if (fruitsSelection[i].checked)
		{
			preferences.push(i);
			break;
		}
	}
	
	for (var i = 0, length = tobaccoSelection.length; i < length; i++)
	{
		if (tobaccoSelection[i].checked)
		{
			preferences.push(i);
			break;
		}
	}
	
	for (var i = 0, length = berriesSelection.length; i < length; i++)
	{
		if (berriesSelection[i].checked)
		{
			preferences.push(i);
			break;
		}
	}
	reflectToUI(preferences);
	return preferences;
}
var juiceContainerClassString = 'changer-tastes';
function reflectToUI(preferences) {
	juiceContainerClassString = 'changer-tastes';
	getIcons('tobacco',preferences);
	getIcons('mint',preferences);
	getIcons('desserts',preferences);
	getIcons('fruits',preferences);
	getIcons('berries',preferences);
	getIcons('exotic',preferences);
}

function getIcons(juiceType, iconDataArray)
{
	var pointer = -1;
	switch(juiceType)
	{
		case 'mint':
			pointer = 0;
			break
		case 'desserts':
			pointer = 1;
			break
		case 'exotic':
			pointer = 2;
			break
		case 'fruits':
			pointer = 3;
			break
		case 'tobacco':
			pointer = 4;
			break
		case 'berries':
			pointer = 5;
			break
		default:
			pointer = -1;
			break
	}
	
	var juiceContainer = document.getElementById('changer-tastes');
	
	if (iconDataArray[pointer]==0) {
		juiceContainerClassString += ' '+juiceType+'-negative';
		console.log('juice: '+juiceType+" meh");
	}
	if (iconDataArray[pointer]==1) {
		juiceContainerClassString += ' '+juiceType+'-neutral';
		console.log('juice: '+juiceType+" ok");
	}
	if (iconDataArray[pointer]==2) {
		juiceContainerClassString += ' '+juiceType+'-positive';
		console.log('juice: '+juiceType+" yay");
	}
	
	juiceContainer.className = juiceContainerClassString;
	
}
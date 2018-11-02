function GetPreferences(doReturn = false) {
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
	if (doReturn) {return preferences;}
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
	}
	if (iconDataArray[pointer]==1) {
		juiceContainerClassString += ' '+juiceType+'-neutral';
	}
	if (iconDataArray[pointer]==2) {
		juiceContainerClassString += ' '+juiceType+'-positive';
	}
	
	juiceContainer.className = juiceContainerClassString;
}

var prev = [1, 1, 1, 1, 1, 1];
ApplyListener('mint');
ApplyListener('desserts');
ApplyListener('exotic');
ApplyListener('fruits');
ApplyListener('tobacco');
ApplyListener('berries');


function ApplyListener(tasteType) {
  let pointer;
  let radioButtons = null;
  radioButtons = document.getElementsByName(tasteType);
  switch (tasteType) {
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
      radioButtons = null;
      break;
  }
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].onclick = function() {
      if (this !== prev[pointer]) {
        GetPreferences();
      }
    };
  }
}

function GetPreferences(doReturn = false) {
	var mintSelection		= document.getElementsByName('mint');
	var dessertsSelection 	= document.getElementsByName('desserts');
	var exoticSelection 	= document.getElementsByName('exotic');
	var fruitsSelection 	= document.getElementsByName('fruits');
	var tobaccoSelection 	= document.getElementsByName('tobacco');
	var berriesSelection 	= document.getElementsByName('berries');
	var tasteData = {};
	
	exoticSelection.forEach(function(element) {
		if (element.checked) {tasteData.exotic = element.value;}
	});
	dessertsSelection.forEach(function(element) {
		if (element.checked) {tasteData.desserts = element.value;}
	});
	fruitsSelection.forEach(function(element) {
		if (element.checked) {tasteData.fruits = element.value;}
	});
	mintSelection.forEach(function(element) {
		if (element.checked) {tasteData.mint = element.value;}
	});
	tobaccoSelection.forEach(function(element) {
		if (element.checked) {tasteData.tobacco = element.value;}
	});
	berriesSelection.forEach(function(element) {
		if (element.checked) {tasteData.berries = element.value;}
	});
	
	reflectToUI(tasteData);
	if (doReturn) {return tasteData;}
}
var juiceContainerClassString = 'changer-tastes';
function reflectToUI(tasteData) {
	juiceContainerClassString = 'changer-tastes';
	getIcons(tasteData.tobacco, 'tobacco');
	getIcons(tasteData.mint, 'mint');
	getIcons(tasteData.desserts, 'desserts');
	getIcons(tasteData.exotic, 'exotic');
	getIcons(tasteData.berries, 'berries');
	getIcons(tasteData.fruits, 'fruits');
}

function getIcons(data, objectName)
{
	var juiceContainer = document.getElementById('changer-tastes');
	if (data == 'negative') {juiceContainerClassString += ' '+objectName+'-negative';}
	if (data == 'positive') {juiceContainerClassString += ' '+objectName+'-positive';}
	if (data == 'neutral')  {juiceContainerClassString += ' '+objectName+'-neutral';}
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

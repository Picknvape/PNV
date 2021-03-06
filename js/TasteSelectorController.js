function GetPreferences(pointer, doReturn = false) {
	var mintSelection		= document.getElementsByName('mint'+pointer);
	var dessertsSelection 	= document.getElementsByName('desserts'+pointer);
	var exoticSelection 	= document.getElementsByName('exotic'+pointer);
	var fruitsSelection 	= document.getElementsByName('fruits'+pointer);
	var tobaccoSelection 	= document.getElementsByName('tobacco'+pointer);
	var berriesSelection 	= document.getElementsByName('berries'+pointer);
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
	if (doReturn) {return tasteData;}
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

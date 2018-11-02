//separate function for box size management

function GetChosenBoxSize() 
{
	let orderRadio = document.getElementsByName('boxSize');
	for (let i = 0; i < orderRadio.length; i++) {
		if (orderRadio[i].checked) {
			return orderRadio[i].value;
		}
	}
}

var sizeSelector = document.getElementById('size-selector');
var sizeSelectorInputs = sizeSelector.getElementsByTagName('input');
var sizeChanger = document.getElementById('changer-size');
var sizeChangerDefaultClasses = sizeChanger.className.replace('large', '');

for (i = 0; i < sizeSelectorInputs.length; i++) {
  sizeSelectorInputs[i].addEventListener('change', function() {
    sizeChanger.className = sizeChangerDefaultClasses + ' ' + this.value;
  });
}
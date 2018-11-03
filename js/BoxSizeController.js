function GetChosenBoxSize() 
{
	let orderRadio = document.getElementsByName('boxSize');
	for (let i = 0; i < orderRadio.length; i++) {
		if (orderRadio[i].checked) {
			return orderRadio[i].value;
		}
	}
}
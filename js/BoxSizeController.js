function GetChosenBoxSize(pointer = '') 
{
	let orderRadio = document.getElementsByName('boxSize'+pointer);
	for (let i = 0; i < orderRadio.length; i++) {
		if (orderRadio[i].checked) {
			return orderRadio[i].value;
		}
	}
}
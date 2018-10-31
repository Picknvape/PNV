// Набиратель заголовка

var heading = document.getElementById('typing-heading');
var possibleWords = ['new', 'selected for your taste', 'handpicked', ''];
var keywordPointer = 0;
var currentKeyword = possibleWords[keywordPointer];
var keyword = '';
var typing = false;
var onTimeout = false;

function ReverseTyping() {
  typing = !typing;
  onTimeout = false;
}

function KeywordTyper() {
  if (!onTimeout) {
    if (typing) {
      if (keyword.length < currentKeyword.length) {
        keyword += currentKeyword.charAt(keyword.length);
      } else {
        onTimeout = true;
        setTimeout(ReverseTyping, speed * 20);
      }
    } else {
      if (keyword.length > 0) {
        keyword = keyword.slice(0, -1);
      } else {
        currentKeyword = possibleWords[keywordPointer < possibleWords.length ? keywordPointer++ : (keywordPointer = 0, keywordPointer++)];
        onTimeout = true;
        setTimeout(ReverseTyping, speed * 5);
      }
    }
  }
  heading.textContent = keyword;
}

var speed = 50 + Math.random() * 100;
timer();

function timer() {
  speed = 50 + Math.random() * 100;
  window.setTimeout(timer, speed);
  KeywordTyper();
}

// Менятель размеров
/*
var sizeSelector = document.getElementById('selector-size');
var sizeChanger = document.getElementById('changer-size');
var oldClasses = Array.from(sizeChanger.classList);

for (let i = 0; i < sizeSelector.getElementsByTagName('input').length; i++) {
  sizeSelector.getElementsByTagName('input')[i].addEventListener('change', function() {
    if (this.checked) {
      sizeChanger.className = oldClasses + ' ' + this.value;
    }
  })
}
*/

// Рандомайзер бонусов

var bonusRotator = document.getElementById('bonus-rotator');
var bonusRotatorChildren = bonusRotator.getElementsByClassName('bonus-rotator-item');

for (let i = bonusRotatorChildren.length; i >= 0; i--) {
  bonusRotator.appendChild(bonusRotatorChildren[Math.random() * i | 0]);
}



// Появлялка-убиралка бонусов по ховеру на описание

var bonusesHighlightenedDescriptions = document.getElementsByClassName('bonuses-description-highlighted');

for (let i = 0; i < bonusesHighlightenedDescriptions.length; i++) {
  let oldClasses = bonusRotator.className;
  let newClass = oldClasses + ' highlight ' + bonusesHighlightenedDescriptions[i].classList[1];

  bonusesHighlightenedDescriptions[i].addEventListener('click', function() {
    bonusRotator.className = newClass;
  })
}



// Вращатель бонусов

document.getElementById('get-bonus-button').addEventListener('click', DoPseudoRandomAnimationCycle);
var randomStep = 34;
function DoPseudoRandomAnimationCycle() {
	if (randomStep == 0) {randomStep = 34; bonusRotator.classList.toggle('animation-finished');}
	var animationStep = function() {
		if (--randomStep > 0){
			if (randomStep!=33) {
				document.getElementById('random-item-'+(randomStep+1)).classList.remove('checked');
			}
			document.getElementById('random-item-'+randomStep).classList.add('checked');
			console.log('inc timeout: '+750*(1+(randomStep-34)/34));
			window.setTimeout(animationStep, 750*(1+(randomStep-34)/34));
		} else {
			document.getElementById('random-item-1').classList.remove('checked');
			bonusRotator.classList.toggle('animation-finished');
		}
	}
	animationStep();
}


var prev = [1,1,1,1,1,1];
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
	switch(tasteType)
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
			radioButtons = null;
			break
	}
	    for(var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].onclick = function() {
            (prev[pointer])? console.log(prev[pointer].value):null;
            if(this !== prev[pointer]) {
               composePreferences();
            }
            console.log(this.value)
        };
    }
}


var addressButtons = document.getElementsByName('country');
var previous = null;
for(var i = 0; i < addressButtons.length; i++) {
        addressButtons[i].onclick = function() {
        (previous)? console.log(previous.value):null;
        if(this !== previous) {
             previous = this;
			 reflectChoiceOnMap();
        }
        console.log(this.value)
    };
}

function CompileOrderData() {
	var orderData = {};
	let orderSizeData = null;
	orderRadio = document.getElementsByName('box');
	for (let i=0; i<orderRadio.length; i++) {
		console.log(orderRadio[i].value+" is "+orderRadio[i].checked);
		if (orderRadio[i].checked) {orderSizeData=orderRadio[i].value;}
	}
	orderData.orderSize = orderSizeData;
	orderData.tastePreferences = composePreferences();
	orderData.shippingInfo = GetCountryData();
	orderData.clientName = document.getElementById('name-input').value;
	orderData.clientPhone = document.getElementById('phone-input').value;
	orderData.clientEmail = document.getElementById('email-input').value;
	//figure out something with countrycodes
	console.log(orderData);
}

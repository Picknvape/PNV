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



// Появлялка-убиралка бонусов по ховеру на описание
var randomItemsContainerBaseClass = document.getElementById('bonus-rotator').className;
function RandomUISetup(firstInit=false) {
	var randomItemsContainer = document.getElementById('bonus-rotator');
	var randomItemsContainerChildren = randomItemsContainer.getElementsByClassName('bonus-rotator-item');
	var bonusesHighlightenedDescriptions = document.getElementsByClassName('bonuses-description-highlighted');
	if (firstInit) {
		firstInit = false;
		for (let i = 0; i < bonusesHighlightenedDescriptions.length; i++) {
			let oldClasses = randomItemsContainer.className;
			let newClass = oldClasses + ' highlight ' + bonusesHighlightenedDescriptions[i].classList[1];
			bonusesHighlightenedDescriptions[i].addEventListener('click', function() {
				randomItemsContainer.className = newClass;
			});	
		}
	}
	for (let i = randomItemsContainerChildren.length; i >= 0; i--) {
		randomItemsContainer.appendChild(randomItemsContainerChildren[Math.random() * i | 0]);
	}
}
RandomUISetup(true);

document.getElementById('get-bonus-button').addEventListener('click', DoPseudoRandomAnimationCycle);
var maxStep = document.getElementById('bonus-rotator').children.length; //changeable, use as public editable variable to adjust amount of steps in animation according to baked elements count
var randomStep = maxStep;
var frameTime = 750;

function DoPseudoRandomAnimationCycle() {
	let randomItemsContainer = document.getElementById('bonus-rotator');
	randomItemsContainer.className = randomItemsContainerBaseClass;
	if (randomStep == 0) {
		randomItemsContainer.className = randomItemsContainerBaseClass;
		RandomUISetup();
		randomStep = maxStep;	
	}
  var animationStep = function() {
    if (--randomStep > 0) {
      if (randomStep != maxStep-1) {
        document.getElementById('random-item-' + (randomStep+1)).classList.remove('checked');
      }
      document.getElementById('random-item-' + randomStep).classList.add('checked');
	  let powMod = 2;
	  let intMod = maxStep;
	  var newFrameTime = frameTime*((-(Math.pow((randomStep-intMod),powMod) / Math.pow(intMod,powMod)))+0.95);
	  console.log("step"+randomStep+" NFT:"+newFrameTime);
      window.setTimeout(animationStep, newFrameTime);
	  if (randomStep == Math.floor(maxStep / 4)) {
		randomItemsContainer.classList.toggle('animation-finished');
	  }
    } else {
      document.getElementById('random-item-1').classList.remove('checked');
    }
  }
  animationStep();
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
      break
  }
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].onclick = function() {
      (prev[pointer]) ? console.log(prev[pointer].value): null;
      if (this !== prev[pointer]) {
        composePreferences();
      }
      console.log(this.value)
    };
  }
}


var addressButtons = document.getElementsByName('country');
var previous = null;
for (var i = 0; i < addressButtons.length; i++) {
  addressButtons[i].onclick = function() {
    (previous) ? console.log(previous.value): null;
    if (this !== previous) {
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
  for (let i = 0; i < orderRadio.length; i++) {
    console.log(orderRadio[i].value + " is " + orderRadio[i].checked);
    if (orderRadio[i].checked) {
      orderSizeData = orderRadio[i].value;
    }
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



// Менятель размеров коробки

var sizeSelector = document.getElementById('size-selector');
var sizeSelectorInputs = sizeSelector.getElementsByTagName('input');

var sizeChanger = document.getElementById('changer-size');
// Алярм - если в индексе поменять checked на другой инпут, всё сломается
var sizeChangerDefaultClasses = sizeChanger.className.replace('large', '');

for (i = 0; i < sizeSelectorInputs.length; i++) {
  sizeSelectorInputs[i].addEventListener('change', function() {
    sizeChanger.className = sizeChangerDefaultClasses + ' ' + this.value;
  });
}

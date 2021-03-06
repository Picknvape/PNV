var randomItemsContainerBaseClass = document.getElementById('bonus-rotator').className;
document.getElementById('get-bonus-button').addEventListener('click', DoPseudoRandomAnimationCycle);
var maxStep = document.getElementById('bonus-rotator').children.length;
var randomStep = maxStep;
var frameTime = 200;
var randomItemsContainer = document.getElementById('bonus-rotator');
var allRandomItems = [].slice.call(randomItemsContainer.getElementsByClassName('bonus-rotator-item'));
var randomOrderNextBacklog = [-1];

function RandomUISetup(firstInit = false) {
  var bonusesHighlightenedDescriptions = document.getElementsByClassName('bonuses-description-highlighted');
  if (firstInit) {
    for (let i = 0; i < bonusesHighlightenedDescriptions.length; i++) {
      let oldClasses = randomItemsContainer.className;
      let newClass = oldClasses + ' highlight ' + bonusesHighlightenedDescriptions[i].classList[1];
      bonusesHighlightenedDescriptions[i].addEventListener('click', function() {
        randomItemsContainer.className = newClass;
      });
    }
  }
  for (let i = 0; i<maxStep; i++) {
	  allRandomItems[i].id = allRandomItems[i].id+'-'+i;
  }
  for (let i = 0; i < allRandomItems.length; i++) {
    randomItemsContainer.appendChild(allRandomItems[Math.floor(Math.random() * i)])
  }

}

function LightDownAllRandomItems() {
	allRandomItems.forEach(function (element) {element.classList.remove('checked');});
}
var previousPointers = new Array();

function GetNextPointer() {
let nextPointer = Math.floor(Math.random()*maxStep);
		while (previousPointers.includes(nextPointer)) {
			nextPointer = Math.floor(Math.random()*maxStep);
		}
	previousPointers.push(nextPointer);
	return nextPointer;
}

function DoPseudoRandomAnimationCycle() {
  document.getElementById('get-bonus-button').removeEventListener('click', DoPseudoRandomAnimationCycle);
  let randomItemsContainer = document.getElementById('bonus-rotator');
  randomItemsContainer.className = randomItemsContainerBaseClass;
  if (randomStep == 0) {
	previousPointers = new Array();
    randomItemsContainer.className = randomItemsContainerBaseClass;
    RandomUISetup();
    randomStep = maxStep;
  }
  var animationStep = function() {
    if (--randomStep > 0) {
      if (randomStep != maxStep - 1) {
        LightDownAllRandomItems();
      }
	  LightDownAllRandomItems();
      allRandomItems[GetNextPointer()].classList.add('checked');
	  
      let powMod = 2;
      var newFrameTime = (-Math.pow((randomStep - maxStep / 2), powMod) / Math.pow(maxStep / 2, powMod) + 1.75) * frameTime;
      window.setTimeout(animationStep, newFrameTime);
      if (randomStep == Math.floor(maxStep / 6)) {
        randomItemsContainer.classList.toggle('animation-finished');
      }
    } else {
      document.getElementById('get-bonus-button').addEventListener('click', DoPseudoRandomAnimationCycle);
      LightDownAllRandomItems();
    }
  }
  animationStep();
}

var randomItemsContainerBaseClass = document.getElementById('bonus-rotator').className;

function RandomUISetup(firstInit = false) {
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
var frameTime = 200;

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
      if (randomStep != maxStep - 1) {
        document.getElementById('random-item-' + (randomStep + 1)).classList.remove('checked');
      }
      document.getElementById('random-item-' + randomStep).classList.add('checked');
      let powMod = 2;
      var newFrameTime = (-Math.pow((randomStep - maxStep / 2), powMod) / Math.pow(maxStep / 2, powMod) + 1.75) * frameTime;
      // Math.round((Math.pow((i - iterations / 2), multiplier) / Math.pow(iterations / 2, multiplier) + .25) * frameDurarionMs);
      window.setTimeout(animationStep, newFrameTime);
      if (randomStep == Math.floor(maxStep / 6)) {
        randomItemsContainer.classList.toggle('animation-finished');
      }
    } else {
      document.getElementById('random-item-1').classList.remove('checked');
    }
  }
  animationStep();
}


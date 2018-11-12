var heading = document.getElementById('typing-heading');
var possibleWords = [' new ', ' personalised ', ' handpicked '];
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

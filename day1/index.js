function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop the function from running all together
  //console.log(audio.currentTime);
  if (audio.currentTime > 0 && audio.currentTime < 0.01) // fix bug with keyrepeat
    return ;
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
  //setTimeout((function(key){ return function() { key.classList.remove("playing")};})(key),150);
}


function removeTransition(e){
  if (e.propertyName !== "transform") return; // skip it if not transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener('keydown', playSound);

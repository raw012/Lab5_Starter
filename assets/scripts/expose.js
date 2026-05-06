// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const volumeControl = document.getElementById('volume-controls');
  const volume = document.getElementById('volume');
  const audio = document.querySelector('.hidden');
  const volumeIcon = volumeControl.querySelector('img');
  const button = document.querySelector('button');
  const image = document.getElementById('expose').querySelector('img');
  hornSelect.addEventListener('change', function() {
    image.src = `assets/images/${hornSelect.value}.svg`;
    audio.src = `assets/audio/${hornSelect.value}.mp3`;
  });
  button.addEventListener('click', function(){
    if(hornSelect.value !== 'select'){
      audio.play();
      if(hornSelect.value=="party-horn"){
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }
    }
  });
  volume.addEventListener('input', function(){
    audio.volume=(volume.value)/100;
    if(audio.volume>0.67){
      volumeIcon.src='assets/icons/volume-level-3.svg';
    }
    else if(audio.volume>0.33){
      volumeIcon.src='assets/icons/volume-level-2.svg';
    }
    else if(audio.volume>0.01){
      volumeIcon.src='assets/icons/volume-level-1.svg';
    }
    else{
      volumeIcon.src='assets/icons/volume-level-0.svg';
    }
  });
}
// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const image = document.querySelector('img');
  let voices = [];

  speechSynthesis.addEventListener('voiceschanged', function(){
    voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const voiceOption = document.createElement('option');
      voiceOption.textContent = voices[i].name;
      voiceSelect.appendChild(voiceOption);
    }
  });

  button.addEventListener('click', function(){
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = textArea.value;
    utterance.voice = voices.find(v => v.name === voiceSelect.value);
    
    utterance.addEventListener('start', function(){
      image.src = 'assets/images/smiling-open.png';
    });
    utterance.addEventListener('end', () => {
      image.src = 'assets/images/smiling.png';
    }); 
    speechSynthesis.speak(utterance);
  });
}


function keycodeOutput(e) {
    const keyAction = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audioAction = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    keyAction.classList.add('playing');
    audioAction.play();
    
    console.log(keyAction);
    console.log(audioAction);

 }

window.addEventListener('keydown', keycodeOutput);


function keycodeRemove(e) {
    const keyAction = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audioAction = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    keyAction.classList.remove('playing');
    audioAction.pause();

    console.log(keyAction);
    console.log(audioAction);

}

window.addEventListener('keyup', keycodeRemove);
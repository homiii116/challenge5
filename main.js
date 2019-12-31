// playingクラスを追加
function getAction() {
    const getClass = document.getElementsByClassName('key');
    for (let key of getClass) {
        key.classList.add('playing');　　　
    }　

}

window.addEventListener('keydown', getAction);

// dataを取得
function keycodeOutput(e) {
    const keyAction = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audioAction = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(keyAction);
    console.log(audioAction);
    
    function playSound() {
        audio.play();
    }
}

window.addEventListener('keydown', keycodeOutput);




// // playingクラスを削除
// function classRemove() {
//     const rmClass = document.getElementsByClassName('key');
//     for (let key of rmClass) {
//         key.classList.remove('playing');
//     }
// }

// classRemove();

function getAction() {
    // playingクラスを追加
    const getClass = document.getElementsByClassName('key');
    for (let key of getClass) {
        key.classList.add('playing');　　　
    }　

}

getAction();

    // dataを取得
    const keyAction = document.querySelectorAll('[data-key="playing"]');
    console.log(keyAction.dataset);






// // playingクラスを削除
// function classRemove() {
//     const rmClass = document.getElementsByClassName('key');
//     for (let key of rmClass) {
//         key.classList.remove('playing');
//     }
// }

// classRemove();

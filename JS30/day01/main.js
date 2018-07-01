function playSound(e) {
    // console.log("the keycode is: " + e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    // console.log(key);
    if (!audio) return; // return and stop the function altogether
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add("playing");
}

function playSoundOnClick(letter) {
    console.log("the keycode is: " + letter.charCodeAt(0)); // ================== IMP ========== letter.charCodeAt(0) gives the keycode of the letter
    // alert("hi click : " + letter);
    const audio = document.querySelector(
        `audio[data-key="${letter.charCodeAt(0)}"]`
    );
    const key = document.querySelector(
        `.key[data-key="${letter.charCodeAt(0)}"]`
    );
    // console.log(audio);
    // console.log(key);
    if (!audio) return; // return and stop the function altogether
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== "transform") return; // skip it if not a transform
    // console.log(e.propertyName);
    this.classList.remove("playing");
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    const keys = document.querySelectorAll(".key"); // gives us an array of elements
    // console.log(keys);
    keys.forEach(key =>
        key.addEventListener("transitionend", removeTransition)
    );
    // can't do keys.addeventlistener as it is an array, so doing for each
});

window.addEventListener("keydown", playSound);

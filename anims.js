const anim1 = document.getElementById("anim1");
const anim2 = document.getElementById("anim2");
const anim3 = document.getElementById("anim3");
const anim4 = document.getElementById("anim4");
const anim5 = document.getElementById("anim5");
const anim6 = document.getElementById("anim6");
const anim7 = document.getElementById("anim7");
const anim8 = document.getElementById("anim8");
const anim9 = document.getElementById("anim9");
const anim10 = document.getElementById("anim10");

let isDown = false;

const jsmethods = ["if","else","for","while","function", "NaN", "substring()","parseInt()", "onkeydown", "indexOf()", "Math.pow()", "parseFloat()", "trim()", "typeof", "let", "var", "const", "onmousedown", "async", "then", "try", "throw", "return", "undefined", "toUpperCase()", "endsWith()", "startsWith()", "${i}", "isNaN()", "concat()", "join()", "find()", "slice()", "console.log()", "alert()", "prompt()", "document", "require()", "() => {}"];

function randomIndex() {
    const randomnum = Math.floor(Math.random() * jsmethods.length);
    return randomnum;
}
anim1.addEventListener("animationiteration", () => {
    anim1.innerHTML = jsmethods[randomIndex()];
})
anim2.addEventListener("animationiteration", () => {
    anim2.innerHTML = jsmethods[randomIndex()];
})
anim3.addEventListener("animationiteration", () => {
    anim3.innerHTML = jsmethods[randomIndex()];
})
anim4.addEventListener("animationiteration", () => {
    anim4.innerHTML = jsmethods[randomIndex()];
})
anim5.addEventListener("animationiteration", () => {
    anim5.innerHTML = jsmethods[randomIndex()];
})
anim6.addEventListener("animationiteration", () => {
    anim6.innerHTML = jsmethods[randomIndex()];
})
anim7.addEventListener("animationiteration", () => {
    anim7.innerHTML = jsmethods[randomIndex()];
})
anim8.addEventListener("animationiteration", () => {
    anim8.innerHTML = jsmethods[randomIndex()];
})
anim9.addEventListener("animationiteration", () => {
    anim9.innerHTML = jsmethods[randomIndex()];
})
anim10.addEventListener("animationiteration", () => {
    anim10.innerHTML = jsmethods[randomIndex()];
})

// window.addEventListener("scroll", (event) => {
//     let scroll = this.scrollY;
//     if(scroll >= 700){
//         isDown = true;
//     }else{
//         isDown = false;
//     }
//     console.log(isDown);
// });


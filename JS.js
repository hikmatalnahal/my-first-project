

/*  1 */
var buttom = document.getElementById("top");
window.onscroll = function () {

    if (window.pageYOffset >= 1700) {
        buttom.style.display = 'block';
    } else {
        buttom.style.display = 'none';
    }
};
buttom.onclick = function () {

    window.scrollTo(0, 0);
};
/*  2 */
const text = "Back End developer With Php Laravel";
let j = 0;
function print() {
    document.querySelector(".am").innerHTML += text.charAt(j);
    j++;
}
setInterval(print, 100);

/*  الصور */
function changeImaage() {
    const images = [
        'url("web1111.jpg")',
        'url("web99.jpg")',
        'url("web88.jpg")',
    ];
    const s = document.querySelector(".super-sec");
    const bg = images[Math.floor(Math.random() * images.length)];

    s.style.backgroundImage = bg;

};
setInterval(changeImaage, 3000);


/*  3  */

window.addEventListener('load', () => {
    let progressHtml = document.querySelector('.outAnamtion');
    let progressCss = document.querySelector('.outAnamtionCss');
    let progressJava = document.querySelector('.outAnamtionJava');
    progressHtml.style.width = '80%';
    progressCss.style.width = '60%';
    progressJava.style.width = '100%';
});
document.body.style.fontFamily = 'Arial';

let paragraphs = document.querySelectorAll('p');

if (paragraphs.length > 0) {
    paragraphs[0].style.cssText = "color: orange; background-color: yellow; font-size: 16px; text-align: center; padding: 5px;";
}
if (paragraphs.length > 1) {
    paragraphs[1].style.cssText = "color: blue; background-color: lightblue; font-size: 14px; text-align: right; padding: 5px;";
}
if (paragraphs.length > 2) {
    paragraphs[2].style.cssText = "color: white; background-color: red; font-size: 12px; text-align: left; padding: 5px;";
}

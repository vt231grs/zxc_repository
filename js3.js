let text = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque
debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!;
//1
let newS = text[12] + text[6] + text[18] + text[25];
console.log(newS);
//2
let low = text.toLowerCase();
console.log(low);
//3
let repeat = [];
let rep = text.indexOf("in");
while (rep !== -1)
{
    repeat.push(rep);
    rep = text.indexOf("in", rep + 1);
}
console.log(repeat);
//4
let array = text.split(' ');
console.log(array);
//5
let rev = text.split('').reverse().join('');
console.log(rev);
//6
function ucFirst(txt) {
    let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
    return newTxt;
}
console.log(ucFirst("some text"));
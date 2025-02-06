let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;


let newS = (text[12] || '') + (text[6] || '') + (text[18] || '') + (text[25] || '');
console.log(newS);


let low = text.toLowerCase();
console.log(low);


let repeat = [...text.matchAll(/in/g)].map(match => match.index);
console.log(repeat);


let array = text.split(/\s+/);
console.log(array);


let rev = text.split('').reverse().join('');
console.log(rev);


function ucFirst(txt) {
    if (!txt) return '';
    return txt.charAt(0).toUpperCase() + txt.slice(1);
}

console.log(ucFirst("some text"));
console.log(ucFirst(""));

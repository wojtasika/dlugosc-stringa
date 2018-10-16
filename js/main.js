let text1 = 'Uwielbiam Java Script';
let text2 = 'Jestem świetnym programistą';


console.log(text1.length);
console.log(text2.length);

function longerText(text1, text2) {
    if (text1 > text2) {
        console.log(text2)
} else {
    console.log(text1)
}
}
longerText(text1, text2);
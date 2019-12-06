let truesum = 0;
let truesumdiv = document.querySelector('.trueres');
let falsesum = 0;
let falsesumdiv = document.querySelector('.falseres');

document.querySelector('#choose').addEventListener('click', runRes);
generator();

function generator() {
numb1 = Math.ceil(Math.random()*3);
let lis = document.getElementsByTagName('h1');
val1 = Math.ceil(Math.random()*8);
val2 = Math.ceil(Math.random()*9);
val = val1 * val2; 
lis[0].textContent = `${val1} x ${val2} = ?`;
let numbers = [];
while (numbers.length < 4) {
    rndnumber = Math.ceil(Math.random() * 99);
    if(rndnumber !== val){
        if (numbers.indexOf(rndnumber) == -1) {     
            numbers.push(rndnumber);  
        }
    }
 }
 
const items = document.getElementsByClassName('box');

for(let i = 0; i < 4; i++) {
    if(i !== numb1){ 
        items[i].textContent = numbers[i];
    } else { 
           items[i].textContent = val;
           items[i].classList.add('answer');
    }
}
}

function runRes(e){
    if(e.target.classList.contains('answer')){
        truesum++;
        truesumdiv.textContent = `Верных ответов: ${truesum}`;
    }
    else {
        falsesum++;
        falsesumdiv.textContent = `Неверных ответов: ${falsesum}`;
    }
    document.querySelector('.answer').classList.remove('answer');
    generator();
}

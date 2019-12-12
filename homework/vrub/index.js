//============homework2===============

//============task1===============

let x = 0;
for (let i = 1; i < 101; i++) {
    x = i;
    if (x % 5 == 0 && x % 3 == 0){
        x = 'FizzBuzz';
    }
    else if (x % 5 == 0) {
        x = 'Buzz';
    }
    else if (x % 3 == 0) {
        x = 'Fizz';
    }
    console.log(x);
}

//============task2===============
console.log('\n Palindrom task');

var str = 12321;

var arr1 = [];
var arr2 = [];
var tmp = [];

str = str.toString();
str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
    arr1.push(str[i]);
    tmp.push(str[i]);
}

for (let i = 0; i < arr1.length; i++) {
    let lastSymbol = tmp.pop();
    arr2.push(lastSymbol);
}

if (arr1.toString() === arr2.toString()){
    console.log(`${str} is palindrom`);
}
else {
    console.log(`${str} is not palindrom`);
}

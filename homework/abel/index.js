//regular task
for (let i = 1; i <= 100; i++){
    if((i % 3 === 0) & (i % 5 === 0)){
        console.log('FizzBuzz');
    }
    else if(i % 3 === 0){
        console.log('Fizz');
    }
    else if(i % 5 === 0){
        console.log('Buzz');
    }
    else {
        console.log(i)
    }
}

//------------------------------------------------------

console.log('');

//------------------------------------------------------

// advanced task
function isPalindrome(element) {
    validate(element);
    if (typeof element === "number") {
        element = element.toString();
    }
    let result = '';

    for (let i = 0; i < element.length; i++) {
        if (element[i] === element[element.length - 1 - i]) {
            result = 'Сравниваемые строки являются палиндромами';
        } else {
            result = 'Сравниваемые строки не являются палиндромами';
            return result;
        }
    }
    return result;
}

function validate(element) {
    if (element === null || element === undefined) {
        throw new Error('Ошибка валидации');
    }
}

test1 = isPalindrome('потоп');
test2 = isPalindrome('кот');
test3 = isPalindrome(1584);
test4 = isPalindrome(1551);
test5 = isPalindrome(' Aa ');

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);

try {
    isPalindrome(null);
} catch (e) {
    console.log(e.message + ": null не является разрешенным типом");
}
try {
    isPalindrome(undefined);
} catch (e) {
    console.log(e.message + ": undefined не является разрешенным типом");
}
try {
    isPalindrome();
} catch (e) {
    console.log(e.message + ": вызов без аргументов не является разрешенным");
}
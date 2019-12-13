// regular task
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

//-----------------------------------------------------

console.log('');

//-----------------------------------------------------

// advanced task
function isPalindrome(str) {
    let newStrLength = str.length;
    let result = '';
    for (let i = 0; i < newStrLength; i++) {
        if (str[i] === str[newStrLength - 1 - i]) {
            result = 'Сравниваемые строки являются палиндромами';
        } else {
            result = 'Сравниваемые строки не являются палиндромами';
            return result;
        }
    }
    return result;
}

test1 = isPalindrome('потоп');
test2 = isPalindrome('кот');
test3 = isPalindrome('1584');
test4 = isPalindrome('751157');

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
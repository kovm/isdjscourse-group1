let arr = new Array(100);
for (let i in arr) {

    arr[i] = i;
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else console.log(arr[i]);
}


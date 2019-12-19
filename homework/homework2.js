for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    alert ('FizzBuzz');
  } else if (i % 3 === 0) {
    alert ('Fizz');
  } else if (i % 5 === 0){
    alert('Buzz');
  } else {
    alert(i);
  }
}
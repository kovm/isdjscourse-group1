let counter = 0
while (counter <= 100) {
  if (!(counter % 3) && !(counter % 5)) {
    console.log('FizzBuzz')
  } else if (!(counter % 5)) {
    console.log('Buzz')
  } else if (!(counter % 3)) {
    console.log('Fizz')
  } else {
    console.log(counter)
  }
  counter++
}

// Task 2
function isPallindrome (message) {
  const messareError = 'Incorrect date entered'
  const typeMessage = typeof (message)
  if (typeMessage !== 'number' && typeMessage !== 'string') {
    console.log(messareError)
    return
  }

  if (typeMessage === 'string') {
    const msg = message.replace(/[\s]+/g, '').toLowerCase()
    for (let i = 0; i < msg.length / 2; i++) {
      if (msg[i] !== msg[msg.length - 1 - i]) {
        return false
      }
    }
    return true
  } else {
    let num = message
    let rev = 0
    if (num < 0) {
      num = -num
      message = -message
    }
    while (message > 0) {
      const dig = message % 10
      rev = rev * 10 + dig
      message = Math.floor(message / 10)
    }
    return num === rev
  }
}

isPallindrome(1441)

// magic 8 ball
let i = Math.floor(Math.random() * 6);
let answer;
switch(i){
  case 0:
    answer = 'Signs point to yes.';
    break;
  case 1:
    answer = 'Most likely.';
    break;
  case 2:
    answer = 'Definitely yes!';
    break;
  case 3:
    answer = 'My reply is "No".';
    break;
  case 4:
    answer = 'Reply hazy, try again.';
    break;
  case 5:
    answer = 'Don’t count on it.';
    break;
  default:
    answer = 'Outlook not so good.';
};
console.log(`The Ball says: ${answer}`);


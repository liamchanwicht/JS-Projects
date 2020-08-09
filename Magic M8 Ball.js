var userName='Roose Bolton'

userName ? console.log(`Hello, ${userName}`) : console.log('Hello!') 

var userQuestion = 'Can I flay my enemies?'
userName ? console.log(`${userName} asks '${userQuestion}'`) : console.log(userQuestion)

var randomNumber = Math.floor(Math.random()*8);
var eightBall = ''

switch (randomNumber){
  case 0:
   eightBall = 'Yeah nah probs not, hey'
  case 1:
   eightBall = 'Yeah, I reckon'
   break
  case 2:
   eightBall = 'Fuck yeah adlay'
   break
  case 3:
   eightBall = 'Give it another go, cobber'
   break
  case 4:
   eightBall = 'Down the servo, try again'
   break
  case 5:
   eightBall = 'Doesn\'t sound too great, mate'
   break
  case 6:
   eightBall = 'Chuck a U-ey'
   break
  case 7:
  eightBall = 'Do a sickcunt ya burnout'
   break
  case 8:
   eightBall = 'Nah, looks pretty sketch'
   break
  default:
   eightBall = 'Answer uncertain, try again later'
   break
}

console.log(eightBall);
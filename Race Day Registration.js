let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegisteredEarly = true;
let runnerAge = 24;

if (runnerAge > 18 && runnerRegisteredEarly){
  raceNumber += 1000;
  console.log(`You will race at 9:30am. Your Race Number is: ${raceNumber}`)
} else if (runnerAge > 18 && !runnerRegisteredEarly){
  console.log(`You will race at 11:00am. Your Race Number is: ${raceNumber}`)
} else if (runnerAge < 18){
  console.log(`Youth registrants will run at 12:30pm (regardless of registration). Your Race Number is: ${raceNumber}`)
} else {
  console.log('Please see the registration desk')
  }

const  getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 9;
  } else if (day === 'wednesday'){
    return 5;
  } else if (day === 'thursday'){
    return 7;
  } else if (day === 'friday'){
    return 9;
  } else if (day === 'saturday'){
    return 12;
  } else if (day === 'sunday'){
    return 10;
  } else {
    return 'Invalid input. Please select a day of the week.'
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

const getIdealSleepHours = () => {
  var idealHours = 9
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  var calculateSleepDebt = '';
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours){
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed! Nice!');
  } else {
    console.log('Get some rest, lil homie. You got ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have!');
  }
}

calculateSleepDebt();
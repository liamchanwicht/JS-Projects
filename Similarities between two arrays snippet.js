//FINDING SIMILARITIES BETWEEN TWO ARRAYS

//Initializing both arrays with similarities -- imagine this being hundreds long
const bobsFollowers = ['Tiny', 'Teeth', 'Bobert', 'Bobathan'];
const tinasFollowers = ['Tiny', 'Teeth', 'Tiara'];

//Initializing empty array to accept the mutual friends
const mutualFollowers=[];

//Nested for loop to loop through both arrays.
for(let i=0; i < bobsFollowers.length; i++){
  for(let j=0; j < tinasFollowers.length; j++){
    //if they match, push it to mutualFollowers variable
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

//Check your work
console.log(mutualFollowers)
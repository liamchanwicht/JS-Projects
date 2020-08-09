


//The value of kelvin will stay constant
const kelvin = 293;
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin. 
const celsius = kelvin-273;
//Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;
let newton = celsius * (33/100);

//When you convert from Celsius to Fahrenheit, you often get a decimal number. Math floor rounds to an integer.
fahrenheit = Math.floor(fahrenheit); 
newton = Math.floor(newton);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
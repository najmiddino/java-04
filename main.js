let randpm_number = Math.floor(Math.random()*100)


if (randpm_number % 15 == 0) {  
    alert(`${randpm_number}: FizzBuzz`);
} else if (randpm_number % 5 == 0) {
    alert(`${randpm_number}: Buzz`);
} else if (randpm_number % 3 == 0) {
    alert(`${randpm_number}: Fizz`);
} else {
    alert(`${randpm_number}: bu son Fizz, Buzz va FizzBuzz ham emas`);
}

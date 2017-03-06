//Write a function that accepts a number as an argument and check the number is prime or not.

function isPrime2(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}
isPrime2();

isPrime2(6);
isPrime2(5);



//isPrime2(6); --> false

//isPrime2(5); ---> true
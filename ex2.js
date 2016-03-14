// SUM NUMBERS GIVEN AS ARGUMENTS
var soma = 0;
var numbers = process.argv;
for(i = 2; i < numbers.length; i++) {
    soma += Number(numbers[i]);
};
console.log(soma);

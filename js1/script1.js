var number = prompt('Put in number');
var power = prompt('Put in power');
var result = 1;
for (i=1; i <= power; i++) {
  result *= number;
}
console.log(result);

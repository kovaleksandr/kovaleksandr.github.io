var number = prompt('Put in number');
var power = prompt('Put in power');

var result = 1;
if (power !== null && number !== null) {

  switch (power >= 0) {
      case true:
        for (i=1; i <= power; i++) {
          result *= number;
        }
        break;

        case false:
        power = -power;
        for (i=1; i <= power; i++) {
          result /= number;
        }
        break;
}
console.log(result);
}
else {
  console.log('You should put in number');
}

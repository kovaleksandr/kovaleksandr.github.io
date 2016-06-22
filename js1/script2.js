var myArray = new Array;
var i = 0;
var j = 0;
var bool = true;
var nameComparison;

for (; i < 5; i++) {
  myArray[i] = prompt('Put in name # ' + (i + 1));
}

var userName = prompt('Put in user name');

for (; j < myArray.length; j++){
  nameComparison = myArray[j];
  if (nameComparison == userName) {
    alert(userName + ' вы вошли');
    bool = false;
    break;
  }
}

if (bool) {
  alert('Error!');
}

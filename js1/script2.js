var myArray = new Array;
var i = 0;
var j = 0;
var k = 0;
var bool = true;
var nameComparison;
var nullCheck;

for (; i < 5; i++) {
  myArray[i] = prompt('Put in name # ' + (i + 1));
}

var userName = prompt('Put in user name');

for (; k < myArray.length; k++){
  nullCheck = myArray[k];
  if (nullCheck == null || nullCheck == '') {
    break;
  }
}
if (nullCheck != null && nullCheck != '' && userName != null && userName != '') {

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

}
else {
  alert('Put in correct names!');
}

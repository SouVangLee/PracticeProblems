/*
Write a method that takes a string as input. 
It should return true if the input is a valid IPv4 address 
(ie. anything between 0.0.0.0 and 255.255.255.255 is valid)
*/

const validIP = function(str) {
  let strArr = str.split("");
  if (strArr.length !== 4) return false;
  for (let i = 0; i < strArr.length; i++) {
    if (Number(strArr[i]) < 0 || Number(strArr[i]) > 255) {
      return false;
    }
  }

  return true;
}
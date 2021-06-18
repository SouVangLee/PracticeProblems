//Implement the Array.prototype.map function in JavasCript

Array.prototype.myMap = function(fn) {
  result = [];
  this.forEach(el => result.push(fn(el)));
  return result;
}
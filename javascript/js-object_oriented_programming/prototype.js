function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}
// 한 번만 실행
Person.prototype.sum = function () {
  return 'prototype: ' + (this.first + this.second + this.third);
}
var kim = new Person('kim', 10, 20, 30);
// kim에 있는 sum 메소드만 다르게 동작하게 하고 싶다면?
kim.sum = function () {
  return 'this: ' + (this.first + this.second + this.third);
}
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
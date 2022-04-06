//------------------------------------Example 1:--------------------------------
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1.displayName); // undefined
console.log(p1.distance);    // undefined
console.log(p2.displayName); // undefined
console.log(p2.distance);    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2));


//-----------------------------------Example 2:--------------------------------
class Animal3 {
  speak() {
      console.log("Iam inside Speak method");
    return this;
  }
  static eat() {
      console.log("Iam inside eat method");
    return this;
  }
}

let obj = new Animal3();
obj.speak(); // the Animal object
let speak = obj.speak;
speak(); // undefined

Animal3.eat() // class Animal
let eat = Animal3.eat;
eat();
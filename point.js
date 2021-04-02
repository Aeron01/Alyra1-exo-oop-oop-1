// Définit d'une classe Point
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false
  }
  distance(point) {
    return console.log(Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)).toFixed(2))
  }
}
// p1 est une instance de Point
const p1 = new Point(1, 2)
// p2 est une autre instance de Point
const p2 = new Point(10, 11)

// OK
p1.isEqual(p2) // return false
p2.show() // print '(10, 11)'
p1.show() // print '(1, 2)'
p1.distance(p2) // return 12.727922061357855
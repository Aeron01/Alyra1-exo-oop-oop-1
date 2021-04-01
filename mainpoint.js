const { Point } = require('./pointcls')

// p1 est une instance de Point
const p1 = new Point(1, 2)
// p2 est une autre instance de Point
const p2 = new Point(10, 11)

// OK
p1.isEqual(p2) // return false
p2.show() // print '(10, 11)'
p1.show() // print '(1, 2)'
p2.distance(p1) // return 12.727922061357855
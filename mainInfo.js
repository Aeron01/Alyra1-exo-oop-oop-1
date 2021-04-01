const { Human } = require('./class')

const alice = new Human('Alice', 'Liddell', 28, ['html', 'Java Scrypt', 'Phyton', 'C#'])

const bob = new Human('Bob', 'Lemon', 30, ['Basic', 'Java', 'Java Scrypt', 'Phyton', 'C++', 'C#', 'Ruby', 'QuakeC'])

const charlie = new Human('Charlie', 'Charlot', 8, ['Phyton', 'C#', 'Ruby'])


alice.printInfo()
bob.printInfo()
charlie.printInfo()
console.log('\n')
alice.canVote()
console.log('\n')
bob.canVote()
console.log('\n')
charlie.canVote()
console.log('\n')
alice.mostSkilledDev(charlie)
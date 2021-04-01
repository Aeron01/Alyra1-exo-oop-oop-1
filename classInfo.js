let countryMaj = 18
class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }


  printInfo() {

    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`age: ${this.age}`)
    console.log(`language: `)
    this.language.forEach((elem) => {
      console.log(`\t - ${elem}`)
    })
    console.log('\n')
    //console.log(`is dev: ${person.isDev}`)
  }

  canVote() {
    const majo = 18// countryMaj
    return this.age < majo ? console.log(this.firstName, false) : console.log(this.firstName, true)
  }


  mostSkilledDev(human) {
    if (this.language.length === human.language.length) {
      return console.log('Draw')
    } else if (this.language.length > human.language.length) {
      return console.log(this.firstName)
    } else {
      return console.log(human.firstName)
    }

  }

}


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
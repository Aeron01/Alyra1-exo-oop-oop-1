const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['html', 'Java Scrypt', 'Phyton', 'C#'],
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['Basic', 'Java', 'Java Scrypt', 'Phyton', 'C++', 'C#', 'Ruby', 'QuakeC'],
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Phyton', 'C#', 'Ruby'],
}

const canVote = (person) => {
  const majo = 18
  return person.age < majo ? false : true
}


const mostSkilledDev = (persona, personb) => {
  if (persona.language.length === personb.language.length) {
    return 'Draw'
  } else if (persona.language.length > personb.language.length) {
    return persona.firstName
  } else {
    return personb.firstName
  }

}



console.log(canVote(alice))
console.log(canVote(bob))
console.log(canVote(charlie))

console.log(mostSkilledDev(alice, bob))

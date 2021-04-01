const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
}

const canVote = (person) => {
  const majo = 18
  return person.age < majo ? false : true
}

console.log(canVote(alice))
console.log(canVote(bob))
console.log(canVote(charlie))
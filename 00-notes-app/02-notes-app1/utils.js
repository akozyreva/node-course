console.log('utils execution')

const name = 'Anton'

const add = (a, b) => a + b

const getNotes = () => 'Your notes....'

// we define, how we can export our module. Every file has its own scope
// in our case, we export name variable
module.exports = {
  add,
  getNotes
}

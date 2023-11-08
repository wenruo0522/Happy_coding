
// const StackArray = require('../')

const { StackArray } = PacketDataStructuresAlgorithms

const stack = new StackArray()

console.log('stack.isEmpty() => ', stack.isEmpty()) // true

stack.push(5)
stack.push(8)

console.log('stack after push 5 and 8 => ', stack.toString()) // '5,8'
console.log('stack.peek() => ', stack.peek()) // 8

stack.push(11)

console.log('stack.size() after push 11 => ', stack.size()) // 3
console.log('stack.isEmpty() => ', stack.isEmpty()) // false

stack.push(15)

stack.pop()
stack.pop()

console.log('stack.size() after push 15 and pop twice => ', stack.size()) // 2


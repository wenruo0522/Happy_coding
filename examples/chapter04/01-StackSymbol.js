
// const _items = Symbol('stackItems')
const _items = Symbol()
class Stack {
    constructor() {
        this[_items] = []
    }

    push(element) {
        this[_items].push(element)
    }

    pop() {
        return this[_items].pop()
    }

    peek() {
        const stackLength = this[_items].length
        return this[_items][stackLength - 1]
    }

    isEmpty() {
        return this[_items].length === 0
    }

    size() {
        return this[_items].length
    }

    clear() {
        this[_items] = []
    }

    print() {
        console.log(this.toString())
    }

    toString() {
        return this[_items].toString()
    }

}

const stack = new Stack()
const objectSymbols = Object.getOwnPropertySymbols(stack)
console.log("objectSymbols.length => ", objectSymbols.length) //  1
console.log("objectSymbols => ", objectSymbols) //  [Symbol()]
console.log("objectSymbols[0] => ", objectSymbols[0]) //  Symbol()
stack.push(5)
stack.push(8)
stack[objectSymbols[0]].push(1)
stack.print() //  "5,8,1"


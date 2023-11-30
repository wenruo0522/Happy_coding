import Deque from "../data-structures/deque.js"

export function palindromeChecker(aString) {
    if (aString === undefined || aString === null || aString.length === 0) {
        return false
    }

    const deque = new Deque()
    const lowestString = aString.toLocaleLowerCase().split(' ').join('')
    let firstChar
    let lastChar

    for (let i = 0; i < lowestString.length; i++) {
        deque.addBack(lowestString.charAt(i))
    }

    while (deque.size() > 1) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar) {
            return false
        }
    }

    return true
}
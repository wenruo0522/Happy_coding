const { LinkedList } = PacketDataStructuresAlgorithms

const list = new LinkedList()

console.log("push element 15")
list.push(15)

console.log("list.indexOf(15) => ", list.indexOf(15)) // 0

console.log("push element 10")
list.push(10)

console.log("list.toString() => ", list.toString()) // "15,10"
console.log("list.indexOf(10) => ", list.indexOf(10)) // 1

console.log("push element 13")
list.push(13)

console.log("list.toString() => ", list.toString()) // "15,10,13
console.log("list.indexOf(13) => ", list.indexOf(13)) // 2
console.log('list.indexOf(10) => ', list.indexOf(10)) // 1

console.log('push elements 11 and 12')
list.push(11)
list.push(12)

console.log('list.toString() => ', list.toString())  // "15,10,13,11,12"
console.log('list.removeAt(1) => ', list.removeAt(1))  //  10
console.log('list.toString() => ', list.toString())  // "15,13,11,12"
console.log('list.removeAt(3) => ', list.removeAt(3))   // 12
console.log('list.toString() => ', list.toString())  // "15,13,11"

console.log('push element 14')
list.push(14)

console.log('list.toString() => ', list.toString())  // "15,13,11,14"
console.log('insert element 16 pos 0 => ', list.insert(16, 0))  //  true
console.log('list.toString() => ', list.toString()) // "16,15,13,11,14"
console.log('insert element 17 pos 1 => ', list.insert(17, 1)) //  true
console.log('list.toString() => ', list.toString()) // "16,17,15,13,11,14"
console.log('insert element 18 pos list.size() => ', list.insert(18, list.size())) // true
console.log('list.toString() => ', list.toString()) // "16,17,15,13,11,14,18"
console.log('remove element 16 => ', list.remove(16)) //  16
console.log('list.toString() => ', list.toString()) // "17,15,13,11,14,18"
console.log('remove element 11 => ', list.remove(11)) // 11
console.log('list.toString() => ', list.toString()) // "17,15,13,14,18"
console.log('remove element 18 => ', list.remove(18)) // 18
console.log('list.toString() => ', list.toString()) // "17,15,13,14"

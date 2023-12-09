
const { Set } = PacketDataStructuresAlgorithms

const set = new Set()

set.add(1)
console.log("set.values => ", set.values()) // [1]
console.log("set.has(1) => ", set.has(1)) // true
console.log("set.size() => ", set.size()) // 1

set.add(2)
console.log("set.values => ", set.values()) // [1,2]
console.log("set.has(2) => ", set.has(2)) // true
console.log("set.size() => ", set.size()) // 2

set.delete(1)
console.log("set.values => ", set.values()) // [2]

set.delete(2)
console.log("set.values => ", set.values()) // []
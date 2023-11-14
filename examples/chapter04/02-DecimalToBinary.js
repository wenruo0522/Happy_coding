const { decimalToBinary } = PacketDataStructuresAlgorithms
const { baseConverter } = PacketDataStructuresAlgorithms

console.log("decimalToBinary(233) => ", decimalToBinary(233)) // 11101001
console.log("decimalToBinary(10) => ", decimalToBinary(10)) // 1010
console.log("decimalToBinary(1000) => ", decimalToBinary(1000)) // 1111101000

console.log("baseConverter(100345, 2) => ", baseConverter(100345, 2)) // 11000011111111001
console.log("baseConverter(100345, 8) => ", baseConverter(100345, 8)) // 303771
console.log("baseConverter(100345, 16) => ", baseConverter(100345, 16)) // 187F9
console.log("baseConverter(100345, 35) => ", baseConverter(100345, 35)) // 2BW0


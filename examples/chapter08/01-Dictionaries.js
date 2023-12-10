
const { Dictionary } = PacketDataStructuresAlgorithms

const dictionary = new Dictionary()

dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

console.log("dictionary.hasKey('Gandalf') => ", dictionary.hasKey('Gandalf')) // true
console.log("dictionary.size() => ", dictionary.size()) // 3

console.log("dictionary.keys() => ", dictionary.keys()) //  ["Gandalf", "John", "Tyrion"]
console.log("dictionary.values() => ", dictionary.values()) // ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log("dictionary.get('Tyrion') => ", dictionary.get('Tyrion'))  // tyrion@email.com

dictionary.remove('John')

console.log("dictionary.keys() => ", dictionary.keys())  // ["Gandalf", "Tyrion"]
console.log("dictionary.values() => ", dictionary.values())  // ["gandalf@email.com", "tyrion@email.com"]

console.log("dictionary.keyValues() => ", dictionary.keyValues()) //  [{key: "Gandalf", value: "gandalf@email.com"}, {key: "Tyrion", value: "tyrion@email.com"}]
console.log("dictionary.toString() => ", dictionary.toString()) //  [#Gandalf: gandalf@email.com],[#Tyrion: tyrion@email.com]

dictionary.forEach((k, v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`)
})
// forEach:  key: Gandalf, value: gandalf@email.com
// forEach:  key: Tyrion, value: tyrion@email.com
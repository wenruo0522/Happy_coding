
const { HashTableSeparateChaining } = PacketDataStructuresAlgorithms

const hashTable = new HashTableSeparateChaining()

hashTable.put('Ygritte', 'ygritte@email.com')
hashTable.put('Jonathan', 'jonathan@email.com')
hashTable.put('Jamie', 'jamie@email.com')
hashTable.put('Jack', 'jack@email.com')
hashTable.put('Jasmine', 'jasmine@email.com')
hashTable.put('Jake', 'jake@email.com')
hashTable.put('Nathan', 'nathan@email.com')
hashTable.put('Athelstan', 'athelstan@email.com')
hashTable.put('Sue', 'sue@email.com')
hashTable.put('Aethelwulf', 'aethelwulf@email.com')
hashTable.put('Sargeras', 'sargeras@email.com')

console.log('**** Printing Hash **** ')

console.log(hashTable.toString())

console.log('**** Get **** ')

console.log(hashTable.get('Jamie')) // jamie@email.com
console.log(hashTable.get('Sue')) // sue@email.com
console.log(hashTable.get('Jonathan')) // jonathan@email.com
console.log(hashTable.get('Loiane')) // undefined

console.log('**** Remove **** ')

console.log(hashTable.remove('Ygritte')) // true
console.log(hashTable.get('Ygritte')) // undefined
console.log(hashTable.toString())

console.log(hashTable.remove('Sue')) // true
console.log(hashTable.toString())

console.log(hashTable.remove('Jamie')) // true
console.log(hashTable.toString())

console.log(hashTable.remove('Aethelwulf')) // true
console.log(hashTable.toString())
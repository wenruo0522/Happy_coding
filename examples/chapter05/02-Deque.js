const { Deque } = PacketDataStructuresAlgorithms

const deque = new Deque()
console.log("deque is empty => ", deque.isEmpty()) // true

deque.addBack('John')
deque.addBack('Jack')
console.log("deque to string => ", deque.toString()) // John,Jack

deque.addBack('Camila')
console.log("deque to string => ", deque.toString()) // John,Jack,Camila
console.log("deque size => ", deque.size()) // 3
console.log("deque is empty => ", deque.isEmpty()) // false

deque.removeFront()
console.log("deque to string => ", deque.toString()) // Jack,Camila

deque.removeBack()
console.log("deque to string => ", deque.toString()) // Jack

deque.addFront('John')
console.log("deque to string => ", deque.toString()) // John,Jack
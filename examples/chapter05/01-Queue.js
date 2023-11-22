const { Queue } = PacketDataStructuresAlgorithms

const queue = new Queue()
console.log("queue is empty => ", queue.isEmpty()) // true
queue.enqueue('John')
queue.enqueue('Jack')
console.log("queue to string => ", queue.toString()) // John,Jack

queue.enqueue('Camila')
console.log("queue to string => ", queue.toString()) // John,Jack,Camila
console.log("queue size => ", queue.size()) // 3
console.log("queue is empty => ", queue.isEmpty()) // false
queue.dequeue()
queue.dequeue()
console.log("queue to string => ", queue.toString()) // Camila



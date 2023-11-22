const { parenthesesChecker } = PacketDataStructuresAlgorithms

console.log('{([])} => ', parenthesesChecker('{([])}')); // true
console.log('{{([][])}()} => ', parenthesesChecker('{{([][])}()}')); // true
console.log('[{()] => ', parenthesesChecker('[{()]')); // false

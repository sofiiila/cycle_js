function testCycle(a, b) {
    var x;
    var c = [];    
for (let i = a; i <= b; i++) {
   c.push(i);
}
    return c.join(' ');
}
function testCycle(n) {
    var fibs = [1, 1];
    for (var i = 2; i < n; i++)
        fibs.push(fibs[i - 1] + fibs[i - 2]);
    return fibs[n - 1];  
}
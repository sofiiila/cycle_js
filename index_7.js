function testCycle(n) {
    var sum = 0;
    var result = " ";
    for (let i = 1; i <= n; i++) {
    sum += (2 * i - 1);
    result += sum + " ";
}
return result;
}
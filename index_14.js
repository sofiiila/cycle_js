function testCycle(n) {
    let binary = '';
    while (n > 0) {
    let remainder = n % 2;
    binary = String(remainder) + binary;
    n = Math.floor(n / 2);
}

return binary;
}
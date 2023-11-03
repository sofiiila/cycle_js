function testCycle(n) {
    let x = 1;
  while (n > 1) {
    x *= n;
    n -= 2;
  }
    return x;
}
function testCycle(n) {
    var x='Простое число';
   for (let i = 1; i < n; i++) {
      if (i != 1 & i != n & (n % i == 0)) {
         x = 'Составное число';
         break;
      }
   }  
    return x;
}
function testCycle(n) {
    var x;
      x = 0;
      var i;
      for (i = 1;i <= n ; i = i + 0.5) {
         x += i;
     }
     return x;
 }
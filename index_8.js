function testCycle(n) {
    var x;
      x = 0;
      var i;
      for (i = 1;i <= n ; i = i + 0.5) {
         x += i;
     }
     return x;
 }

//Функция testCycle вычисляет сумму чисел от 1 до n с шагом 0.5.
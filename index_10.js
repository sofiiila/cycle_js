function testCycle(a, b) {
    var x = 0;
   while(a != 0 && b != 0){
       if(a>b){
           a = a % b;
       }else{
           b = b % a;
       }
   }
   x = a + b;
   return x;
}
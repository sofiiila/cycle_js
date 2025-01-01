function testCycle(a, b) {
    var x="";
    for(var i=a;i<=b;i++)
        
     { x+=" "+i;}
   
    for(var y=b;y<=a;y++)
  
     { x+=" "+y;}
    if (a==b)
    {x=a;}
    return x;
}

//Функция testCycle создает строку, содержащую последовательность чисел от a до b (включительно) и обратно.
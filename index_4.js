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
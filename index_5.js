function testCycle(a, b) {
    var x="";
     if (a>b) {
        x=a;
        for (var i = a-1; i>=b; i--)
        {
            x+=" " + i;
        }
    } else if (b>a) {
        x=b;
        for (var i = b-1; i>=a; i--)
        {
            x+=" " + i;
        }
    } else {
        x=a;
    }
    return x;
}
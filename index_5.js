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

//Функция testCycle создает строку, содержащую последовательность чисел от большего к меньшему в диапазоне от a до b (включительно).
//Если a и b равны, функция возвращает строку, содержащую одно это число.
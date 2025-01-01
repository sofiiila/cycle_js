function testCycle(a, b) {
    var x;
    var c = [];    
for (let i = a; i <= b; i++) {
   c.push(i);
}
    return c.join(' ');
}

//Функция testCycle создает строку,
//содержащую последовательность чисел от a до b (включительно), разделенных пробелами.
function testCycle(n) {   
    let sum = 0;
    while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
}
    return sum;
}

//Функция testCycle вычисляет сумму цифр десятичного числа n.
function testCycle(a, b) {
    let x=0;
    for(i = Math.min(a, b); i <= Math.max(a, b); i++){
        x += i ** 2;
    }
    return x;
}
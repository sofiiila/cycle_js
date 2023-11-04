function testCycle(n) {
    const primes = new Array(n).fill(true);
    primes[0] = false; 
    primes[1] = false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (primes[i]) {
        for (let j = i * i; j <= n; j += i) {
          primes[j] = false;
        }
      }
    }
    let result = '';
    for (let i = 0; i <= n; i++) {
      if (primes[i]) {
        result += i + ' ';
      }
    }
    
    return result.trim();
  }
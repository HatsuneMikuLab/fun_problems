const calcFibonacci = n => { 
    let i = 0;
    const sequence = [0n, 1n];
    while (!sequence[n]) {
        sequence.push(sequence[i] + sequence[++i])
    } 
    return sequence[n]
}

[1, 2, 3, 4, 5, 6, 250, 1000, 10000].forEach((n, i) => {
    console.time('PERFOMANCE ');
    console.log('TEST CASE %d; FIBONACCI N = %d; RESULT = %d.', i + 1, n, calcFibonacci(n));
    console.timeEnd('PERFOMANCE ');
})
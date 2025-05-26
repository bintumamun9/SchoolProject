function fibonacci(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1, c;
    while (c = a + b, ++a === c || ++b === c);
    return a;
}

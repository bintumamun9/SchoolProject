function fibonacci(n: number): number {
  if (n <= 1) return n;
  let a = 0, b = 1, c = 0;

  while (c < n) {
    [a, b] = [b, a + b];
    c++;
  }

  return b;
}

console.log(fibonacci(10));

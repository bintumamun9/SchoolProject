function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function sumOfDigits(num: number): number {
    let result = 0;
    while (num > 0) {
        result += Math.floor(num % 10);
        num /= 10;
    }
    return result;
}

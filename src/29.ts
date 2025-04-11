function calculateGCD(a: number, b: number): number {
    while(b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLargestMultiple(n: number, d: number): number {
    for(let i = n; i >= d; i /= d) {
        if(i % d === 0) {
            return i;
        }
    }
    throw new Error("No such multiple found.");
}

function getRandomNumber(min: number = 0, max: number = 100): number {
    const range: number = max - min + 1;
    let randomNumber: number = Math.floor(Math.random() * range) + min;
    return randomNumber;
}

function getRandomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const randomColor = getRandomColor();
console.log(`The randomly generated color is ${randomColor}`);


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  
  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[getRandomInt(16)];
    }
    return color;
  };
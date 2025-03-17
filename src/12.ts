const generateRandomCode = () => {
  const codeLength = 8;
  let code = '';
  for (let i = 0; i < codeLength; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}

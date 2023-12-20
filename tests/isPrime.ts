export const isPrime = (inputNumber: number) => {
  if (inputNumber <= 1) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(inputNumber); i++) {
    if (inputNumber % i === 0)
      return false;
  }

  return true;
}

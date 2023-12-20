export const validateZip = (inputZip: string): boolean => {
  const zipPattern = /^\d{5}$/
  return zipPattern.test(inputZip)
}

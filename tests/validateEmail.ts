export const validateEmail = (inputEmail: string): boolean => {
  const emailPattern = /^\S+@\S+\.\S+$/
  return emailPattern.test(inputEmail)
}

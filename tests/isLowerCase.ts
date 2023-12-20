export const isLowerCase = (inputText: string) => {
  const lowerCaseInputText = inputText.toLocaleLowerCase()
  return inputText === lowerCaseInputText
}

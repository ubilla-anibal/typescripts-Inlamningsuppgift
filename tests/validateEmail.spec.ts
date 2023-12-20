import { validateEmail } from "./validateEmail"

describe ("validateEmail.ts", () => {
  it("should return true if input is 'jonatan@gmail.com'", () => {
    const inputEmail = "jonatan@gmail.com"
    const actualResult = validateEmail(inputEmail)
    const expectedResult = true
    expect(actualResult).toBe(expectedResult)
  })

  it("should return false if input is 'jonatan@gmail'", () => {
    const inputEmail = "jonatan@gmail"
    const actualResult = validateEmail(inputEmail)
    const expectedResult = false
    expect(actualResult).toBe(expectedResult)
  })

  it("should return false if input is 'jonatan.com'", () => {
    const inputEmail = "jonatan.com"
    const actualResult = validateEmail(inputEmail)
    const expectedResult = false
    expect(actualResult).toBe(expectedResult)
  })
})

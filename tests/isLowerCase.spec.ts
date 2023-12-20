import { isLowerCase } from "./isLowerCase"

describe("isLowerCase.ts", () => {
  it("should return true if input is lowercased", () => {
    const inputString = "abcdefg"
    const actualResult = isLowerCase(inputString)
    const expectedResult = true
    expect(actualResult).toBe(expectedResult)
  })

  it("should return false if input is not lowercased", () => {
    const inputString = "ABCDEFG"
    const actualResult = isLowerCase(inputString)
    const expectedResult = false
    expect(actualResult).toBe(expectedResult)
  })

  it("should return false if input is not lowercased", () => {
    const inputString = "Abcdefg"
    const actualResult = isLowerCase(inputString)
    const expectedResult = false
    expect(actualResult).toBe(expectedResult)
  })
})

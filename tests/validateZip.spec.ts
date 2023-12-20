import { validateZip } from "./validateZip"

describe("inputZip.ts", () => {
  it("should return true if input is '12345'", () => {
    const inputZip = "12345"
    const actualResult = validateZip(inputZip)
    const expectedResult = true
    expect(actualResult).toBe(expectedResult)
  })

  it("should return false if input is '1234'", () => {
    const inputZip = "1234"
    const actualResult = validateZip(inputZip)
    const expectedResult = false
    expect(actualResult).toBe(expectedResult)
  })

  it("should return false if input is '123456'", () => {
    const inputZip = "123456"
    const actualResult = validateZip(inputZip)
    const expectedResult = false
    expect(actualResult).toBe(expectedResult)
  })

  it("should return false if input is 'abcde'", () => {
    const inputZip = "abcde"
    const actualResult = validateZip(inputZip)
    const expectedResult = false
    expect(actualResult).toBe(expectedResult)
  })
})

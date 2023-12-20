import { isPrime } from "./isPrime"

describe("isPrime.ts", () => {
  it("should return true, if input is Prime", () => {
    const actualResult = isPrime(5)
    const expectedResult = true
    expect(actualResult).toBe(expectedResult)
  })
  it("should return false, if input is not Prime", () => {
    const actualResult = isPrime(1)
    const expectedResult = false
    expect(actualResult).toBe(expectedResult)
  })
})

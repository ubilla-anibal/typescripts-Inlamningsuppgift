import { makeHeading } from "./makeHeading"

describe ("makeHeading.ts", () => {
  it("should return <h1>Hello</h1>", () => {
    const expectedResult = "<h1>Hello</h1>"
    const actualResult = makeHeading("Hello", 1)
    expect(actualResult).toBe(expectedResult)
  })

  it("should return <h2>Next Level</h2>", () => {
    const expectedResult = "<h2>Next Level</h2>"
    const actualResult = makeHeading("Next Level", 2)
    expect(actualResult).toBe(expectedResult)
  })

})

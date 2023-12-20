import { toGenitive } from "./toGenitive"

describe("toGenitive.ts", () => {
  it("should return Jonatans if input is Jonatan", () => {
    const actualResult = toGenitive("Jonatan")
    const expectedResult = "Jonatans"
    expect(actualResult).toBe(expectedResult)
  })

  it("should return Annas if input is Anna", () => {
    const actualResult = toGenitive("Anna")
    const expectedResult = "Annas"
    expect(actualResult).toBe(expectedResult)
  })

  it("should return Claes if input is Claes", () => {
    const actualResult = toGenitive("Claes")
    const expectedResult = "Claes"
    expect(actualResult).toBe(expectedResult)
  })

  it("should return Hampus if input is Hampus", () => {
    const actualResult = toGenitive("Hampus")
    const expectedResult = "Hampus"
    expect(actualResult).toBe(expectedResult)
  })

  it("should return Johannas if input is Johanna", () => {
    const actualResult = toGenitive("Johanna")
    const expectedResult = "Johannas"
    expect(actualResult).toBe(expectedResult)
  })
})

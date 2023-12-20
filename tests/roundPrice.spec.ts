import { roundPrice } from "./roundPrice"

describe ("roundPrice", () => {
  it("it should return '232.11 SEK' when '232.10542' is inputed", () => {
    const expectedResult = "232.11 SEK"
    const actualResult = roundPrice(232.10542)
    expect(actualResult).toBe(expectedResult)
  })

  it("it should return '14.00 SEK' when '14' is inputed", () => {
    const expectedResult = "14.00 SEK"
    const actualResult = roundPrice(14)
    expect(actualResult).toBe(expectedResult)
  })

  it("it should return '1024.20 SEK' when '1024.2048' is inputed", () => {
    const expectedResult = "1024.20 SEK"
    const actualResult = roundPrice(1024.2048)
    expect(actualResult).toBe(expectedResult)
  })

  it("it should return '232.11 kr' when '232.10542' and '%PRICE% kr' is inputed", () => {
    const expectedResult = "232.11 kr"
    const actualResult = roundPrice(232.10542, "%PRICE% kr")
    expect(actualResult).toBe(expectedResult)
  })

  it("it should return '$14.00' when '14.00', '$%PRICE%' is inputed", () => {
    const expectedResult = "$14.00"
    const actualResult = roundPrice(14.00, "$%PRICE%")
    expect(actualResult).toBe(expectedResult)
  })

  /*uppgiften säger att den borde vara "USD 1024.20 SEK" jag tror att SEK delen e fel?
  Annars jag kan göra om den här delen. */
  it("it should return 'USD 1024.20' when '1024.2048', 'USD %PRICE%' is inputed", () => {
    const expectedResult = "USD 1024.20"
    const actualResult = roundPrice(1024.2048, "USD %PRICE%")
    expect(actualResult).toBe(expectedResult)
  })
})

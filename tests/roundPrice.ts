export const roundPrice = (price: number, pattern?: string) => {
  const roundedPrice = price.toFixed(2)

  if (pattern?.includes("%PRICE%")) {
    const result = pattern.replace("%PRICE%", roundedPrice)
    return result
  } else {
    return price.toFixed(2) + " SEK"
  }
}

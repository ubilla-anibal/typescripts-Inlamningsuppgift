export const toGenitive = (name: string) => {
  if (name.endsWith("s")) {
    return name
  } else {
    return name+"s"
  }
}

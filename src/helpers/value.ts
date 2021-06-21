export const getOr =
  <T>(defaultVal: T) =>
  (val: T | undefined): T =>
    val || defaultVal

export const getOrElse = <T>(val: T | undefined, defaultVal: T): T =>
  getOr(defaultVal)(val)

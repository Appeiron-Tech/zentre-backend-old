export function removeUndefinedKeys(obj: any): any {
  Object.keys(obj).forEach((key) => (obj[key] === undefined ? delete obj[key] : {}))
  return obj
}

export function isEmptyObj(obj: any): boolean {
  for (const i in obj) return false
  return true
}

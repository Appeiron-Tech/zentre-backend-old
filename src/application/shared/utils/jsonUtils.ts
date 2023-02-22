export function removeUndefinedKeys(obj: any): any {
  console.log('in fun')
  console.log(obj)
  Object.keys(obj).forEach((key) => (obj[key] === undefined ? delete obj[key] : {}))
  return obj
}

export default function persistMiddleware() {
  return (next: any) => (action: any) => {
    const returnValue = next(action)
    return returnValue
  }
}

export default function authMiddleware() {
  return (next: any) => (action: any) => {
    const returnValue = next(action)
    return returnValue
  }
}

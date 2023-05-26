interface Screen {
  name: string
  component: any
}

declare module '@utils' {
  export default any
}

declare module '@utils/const' {
  export default any
}

declare module '@utils/helper' {
  export const sizeReal: (size: number) => number
  export const currencyFormat: (num: number) => number
  export const currencyFormatLength: (num: number, value: string) => number,
    string
  export const currency: (num: number) => number
}

declare module '@utils/urls' {
  export default any
}

import { Dimensions, Platform } from 'react-native'
// import { t } from 'i18next'

// import { useTranslation } from 'react-i18next'
// const { t } = useTranslation()
const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

export function sizeReal(size: number): number {
  let { width } = Dimensions.get('window')
  return (width / 375) * size
}

export const AppScale = (phone: number, tablet: number) => {
  const isTablet = false
  if (isTablet) {
    return tablet || phone + phone * 0.25
  } else {
    return phone
  }
}

export const currencyFormat = (num: number) => {
  return `Rp. ${num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}

export const currencyFormatLength = (num: number, value: string) => {
  if (value?.length < 15) {
    return `Rp. ${num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
  } else {
    // if (num == null) {
    //   return `Rp. ${num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
    // }
    if (num == 0) {
      return `Rp. ${num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
    }
    var unitlist = ['', 'rb', ' jt', 'M', 'T']
    let sign = Math.sign(num)
    let unit = 0

    var xxx = Math.abs(num)
    if (xxx < 1000) {
      return xxx.toFixed(2)
    }

    while (Math.abs(num) >= 1000) {
      unit = unit + 1
      num = Math.floor(Math.abs(num) / 100) / 10
    }
    return `Rp. ` + (sign * Math.abs(num) + unitlist[unit])
  }
}

export const convertDaysIndo = (a: any, b: any) => {
  const days = a.diff(b, 'days')
  const hours = a.subtract(days, 'days').diff(b, 'hours')
  const minutes = a.subtract(hours, 'hours').diff(b, 'minutes')
  const seconds = a.subtract(minutes, 'minutes').diff(b, 'seconds')
  const res =
    days !== 0
      ? `${days} hari`
      : hours !== 0
      ? `${hours} jam`
      : minutes !== 0
      ? `${minutes} mnt`
      : seconds !== 0
      ? `${seconds} dtk`
      : ''
  return res
}

export const convertDiffTime = (a: any, b: any) => {
  const days = a.diff(b, 'days')
  const hours = a.subtract(days, 'days').diff(b, 'hours')
  const minutes = a.subtract(hours, 'hours').diff(b, 'minutes')
  const seconds = a.subtract(minutes, 'minutes').diff(b, 'seconds')
  if (seconds < 10) {
    return `${minutes}:0${seconds}`
  }
  return `${minutes}:${seconds}`
}

export const currency = (num: number) =>
  `${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`

export const DateFormat = (date) => {
  const dd = date.split('/')[2]
  const mm = date.split('/')[1]
  const yyyy = date.split('/')[0]
  if (dd.length === 1) {
    dd
  }
  const res = `${dd.length === 1 ? `0${dd}` : dd}/${
    mm.length === 1 ? `0${mm}` : mm
  }/${yyyy}`
  return res
}

export const DateFormatDMY = (date: any) => {
  const d = date.getDate()
  const m = date.getMonth() + 1
  const y = date.getFullYear()
  return `${d < 10 ? `0${d}` : d}/${m < 10 ? `0${m}` : m}/${y}`
}

export const isIphoneWithNotch = () =>
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTV &&
  (windowHeight === 780 ||
    windowWidth === 780 ||
    windowHeight === 812 ||
    windowWidth === 812 ||
    windowHeight === 844 ||
    windowWidth === 844 ||
    windowHeight === 896 ||
    windowWidth === 896 ||
    windowHeight === 926 ||
    windowWidth === 926)

// export const convertDays = (a, b) => {
//   const days = a.diff(b, 'days')
//   const hours = a.subtract(days, 'days').diff(b, 'hours')
//   const minutes = a.subtract(hours, 'hours').diff(b, 'minutes')
//   const res =
//     days !== 0
//       ? `${days} ${t('dayAgo')}`
//       : hours !== 0
//       ? `${hours} ${t('hoursAgo')}`
//       : minutes !== 0
//       ? `${minutes} ${t('minuteAgo')}`
//       : ''
//   return res
// }

export const getNewHeight = (
  newWidth: number,
  oldWidth: number,
  oldHeight: number
) => (newWidth / oldWidth) * oldHeight

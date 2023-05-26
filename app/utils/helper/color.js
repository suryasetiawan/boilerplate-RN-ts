import stc from 'string-to-color'
import { ratio } from '@opendevtools/wcag-color'
import { colors } from 'app/theme'

const chatColors = {}
const definedColors = {}

export const getColorStr = (str, bgColor = '#fff', increment = 0) => {
  let color = stc(increment ? `${str}${increment}` : str)
  if (bgColor && definedColors?.[bgColor]?.[str]) {
    return definedColors[bgColor][str]
  } else if (!bgColor && chatColors[str]) {
    return chatColors[str]
  } else {
    if (bgColor) {
      let invalid1 = true
      let numtry1 = 1
      while (invalid1) {
        const colRat = ratio(color, bgColor)
        if (colRat < 2) {
          color = stc(`${str}${numtry1}`)
        } else {
          invalid1 = false
        }
        numtry1++
      }

      if (!definedColors[bgColor]) {
        definedColors[bgColor] = {}
      }
      definedColors[bgColor][str] = color
    } else {
      let invalid = true
      let numtry = 1
      while (invalid) {
        const colRat = [
          ratio(color, colors.white) > 2,
          ratio(color, colors.greyCheeseLight) > 2,
          ratio(color, colors.greyCheeseLightest) > 2,
          ratio(color, colors.primary) > 3,
          ratio(color, colors.greenTeaDarker) > 3
        ]
        if (colRat.findIndex((row) => !row) >= 0) {
          color = stc(`${str}${numtry}`)
        } else {
          invalid = false
        }

        // const colRat = [
        //   ratio(color, colors.greyLighter4),
        //   ratio(color, colors.primary2),
        //   ratio(color, colors.greyLighter6),
        //   ratio(color, colors.greenDarker3),
        //   ratio(color, colors.white),
        // ];
        // if (colRat.find((row) => row < 4.5)) {
        //   color = stc(`${str}${numtry}`);
        // } else {
        //   invalid = false;
        // }
        numtry += 1
      }

      chatColors[str] = color
    }
  }
  return color
}

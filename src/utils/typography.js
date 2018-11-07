import Typography from 'typography'
import Parnassus from 'typography-theme-parnassus'
import Const from '~/src/const'
const {
  Size
} = Const

Parnassus.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    'boxShadow': 'none'
  },
  'h1, h2': {
    'margin': '1.5rem 0 1.0rem'
  },
  'h3, h4, h5, h6': {
    'margin': '1.5rem 0'
  },
  'h1': {
    'font-size': `${Size.FONT.LARGE}px`
  },
  'h2': {
    'font-size': `${Size.FONT.X_BASE}px`
  },
  'h3': {
    'font-size': `${Size.FONT.BASE}px`
  },
  'p': {
    'margin-bottom': `1.5rem`,
    'font-size': `${Size.FONT.BASE}px`
  },
  'li': {
    'margin-bottom': `0.3em`,
    'font-size': `${Size.FONT.BASE}px`
  }
})

delete Parnassus.googleFonts

const typography = new Typography(Parnassus)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

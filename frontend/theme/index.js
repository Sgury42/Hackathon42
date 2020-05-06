import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import overrides from './overrides'
import Color from 'color'

const defaultTheme = createMuiTheme()
let theme = {}

theme.breakpoints = {
  values: {
    ...defaultTheme.breakpoints.values,
    lg: 1100
  }
}
// palette
theme.palette = {
  primary: {
    dark: Color('#4b92fd').darken(0.15).hex(),
    main: '#4b92fd',
    light: Color('#4b92fd').lighten(0.2).hex(),
    extraLight: Color('#4b92fd').lighten(0.46).hex(),
    contrastText: '#fff'
  },
  secondary: {
    dark: Color('#1bb978').darken(0.1).hex(),
    main: '#1bb978',
    light: Color('#1bb978').lighten(0.7).hex(),
    extraLight: Color('#1bb978').lighten(1.2).hex(),
    contrastText: '#fff'
  },
  tertiary: {
    main: '#ffb822',
    extraLight: Color('#ffb822').lighten(0.65).hex(),
  },
  warning: {
    dark: Color('#ff9800').darken(0.1).hex(),
    main: '#ff9800',
    light: Color('#ff9800').lighten(0.4).hex(),
    extraLight: Color('#ff9800').lighten(0.8).hex(),
  },
  success: {
    dark: Color('#66bb6a').darken(0.15).hex(),
    main: '#66bb6a',
    light: Color('#66bb6a').lighten(0.3).hex(),
    extraLight: Color('#66bb6a').lighten(0.5).hex(),
    contrastText: '#fff'
  },
  info: {
    dark: Color('#6278ec').darken(0.2).hex(),
    main: '#6278ec',
    light: Color('#6278ec').lighten(0.3).hex(),
    extraLight: Color('#6278ec').lighten(0.5).hex(),
  },
  error: {
    dark: Color('#f44336').darken(0.2).hex(),
    main: '#f44336',
    light: Color('#f44336').lighten(0.2).hex(),
    extraLight: Color('#f44336').lighten(0.5).hex(),
  },
  background: {
    default: '#f9f9f9',
    paper: '#fff'
  },
  text: {
    primary: 'rgba(0, 0, 0, .8)',
    secondary: 'rgba(0, 0, 0, .54)',
    tertiary: 'rgba(0 ,0 ,0, .4)'
  },
  contrast: {
    high: 'rgba(0, 0, 0, .1)',
    medium: 'rgba(0, 0, 0, .05)',
    low: 'rgba(0, 0, 0, .03)',
    extraLow: 'rgba(0, 0, 0, .02)'
  },
  action: {
    hover: 'rgba(0, 0, 0, .03)',
    hoverOpacity: .03,
    selected: 'rgba(0, 0, 0, .05)',
    selectedOpacity: .05,
    focus: 'rgba(0, 0, 0, .08)',
    focusOpacity: .08,
    activatedOpacity: .08
  }
}

// typo
theme.typography = {
  fontFamily: ['Nunito', 'Arial', 'sans-serif'].join(', '),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontWeightRegularTitle: 400,
  fontWeightMediumTitle: 500,
  fontWeightBoldTitle: 600,
  h1: {
    fontFamily: ['Work Sans', 'Nunito', 'Arial', 'sans-serif'].join(', '),
    fontSize: '3.75rem',
    fontWeight: 400,
  },
  h2: {
    fontFamily: ['Work Sans', 'Nunito', 'Arial', 'sans-serif'].join(', '),
    fontSize: '2.2rem',
    fontWeight: 400,
  },
  h3: {
    fontFamily: ['Work Sans', 'Nunito', 'Arial', 'sans-serif'].join(', '),
    fontSize: '2rem',
    fontWeight: 400,
  },
  h4: {
    fontFamily: ['Work Sans', 'Nunito', 'Arial', 'sans-serif'].join(', '),
    fontSize: '1.8rem',
    fontWeight: 400,
  },
  h5: {
    fontFamily: ['Work Sans', 'Nunito', 'Arial', 'sans-serif'].join(', '),
    fontSize: '1.5rem',
    fontWeight: 400,
  },
  h6: {
    fontFamily: ['Work Sans', 'Nunito', 'Arial', 'sans-serif'].join(', '),
    fontWeight: 400,
  },
}

// other
theme.shape = {
  borderRadius: 4,
  borderSize: 2
}
theme.cardSpacing = 3
theme.topSpace = defaultTheme.spacing(5)

// default props
theme.props = {
  MuiContainer: {
    maxWidth: "lg",
    //disableGutters: true
  },
  MuiInput: {
    disableUnderline: true
  },
  // MuiFilledInput: {
  //   disableUnderline: true
  // },
  // MuiFormControl: {
  //   variant: 'filled'
  // },
  // MuiTextField: {
  //   variant: 'filled'
  // },
  MuiInputLabel: {
    //shrink: true
  }
}

// breakpoints
theme.breakpoints = {
  ...defaultTheme.breakpoints,
}

// shadows
theme.shadows = defaultTheme.shadows
//-1px -1px 0 rgba(0, 0, 0, .02)
theme.shadows[0] = '3px 3px 7px rgba(0, 0, 0, .16)'
theme.shadows[1] = '6px 6px 13px rgba(0, 0, 0, .16)'
theme.insetShadows = [
  '3px 3px 6px rgba(0, 0, 0, .14) inset',
  '7px 7px 13px rgba(0, 0, 0, .14) inset'
]


// overrides
theme.overrides = overrides(createMuiTheme(theme))


export default responsiveFontSizes(createMuiTheme(theme))
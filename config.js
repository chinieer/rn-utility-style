const config = {
  baseFontSize: 16,
  fontFamily: {
    primary: {
      regular : "Roboto",
    },
    secondary: {
      regular : "Roboto"
    }
  },
  fontSize: {
    'xs'   : 0.75,
    'sm'   : 0.875,
    'base' : 1,
    'lg'   : 1.125,
    'xl'   : 1.25,
    '2xl'  : 1.5,
    '3xl'  : 1.875,
    '4xl'  : 2.25,
    '5xl'  : 3,
    '6xl'  : 4,
  },
  fontWeight: {
    hairline  : '100',
    thin      : '200',
    light     : '300',
    normal    : '400',
    medium    : '500',
    semibold  : '600',
    bold      : '700',
    extrabold : '800',
    black     : '900',
  },
  letterSpacing: {
    tighter : -0.05,
    tight   : -0.025,
    normal  : 0,
    wide    : 0.025,
    wider   : 0.05,
    widest  : 0.1,
  },
  lineHeight: {
    none    : 1,
    tight   : 1.25,
    snug    : 1.375,
    normal  : 1.5,
    relaxed : 1.625,
    loose   : 2,
    '3'     : .75,
    '4'     : 1,
    '5'     : 1.25,
    '6'     : 1.5,
    '7'     : 1.75,
    '8'     : 2,
    '9'     : 2.25,
    '10'    : 2.5,
  },
  screens: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  colors: {
    transparent : 'transparent',
    black       : '#000',
    white       : '#fff',

    gray: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },
    red: {
      100: '#fff5f5',
      200: '#fed7d7',
      300: '#feb2b2',
      400: '#fc8181',
      500: '#f56565',
      600: '#e53e3e',
      700: '#c53030',
      800: '#9b2c2c',
      900: '#742a2a',
    },
    orange: {
      100: '#fffaf0',
      200: '#feebc8',
      300: '#fbd38d',
      400: '#f6ad55',
      500: '#ed8936',
      600: '#dd6b20',
      700: '#c05621',
      800: '#9c4221',
      900: '#7b341e',
    },
    yellow: {
      100: '#fffff0',
      200: '#fefcbf',
      300: '#faf089',
      400: '#f6e05e',
      500: '#ecc94b',
      600: '#d69e2e',
      700: '#b7791f',
      800: '#975a16',
      900: '#744210',
    },
    green: {
      100: '#f0fff4',
      200: '#c6f6d5',
      300: '#9ae6b4',
      400: '#68d391',
      500: '#48bb78',
      600: '#38a169',
      700: '#2f855a',
      800: '#276749',
      900: '#22543d',
    },
    teal: {
      100: '#e6fffa',
      200: '#b2f5ea',
      300: '#81e6d9',
      400: '#4fd1c5',
      500: '#38b2ac',
      600: '#319795',
      700: '#2c7a7b',
      800: '#285e61',
      900: '#234e52',
    },
    blue: {
      100: '#ebf8ff',
      200: '#bee3f8',
      300: '#90cdf4',
      400: '#63b3ed',
      500: '#4299e1',
      600: '#3182ce',
      700: '#2b6cb0',
      800: '#2c5282',
      900: '#2a4365',
    },
    indigo: {
      100: '#ebf4ff',
      200: '#c3dafe',
      300: '#a3bffa',
      400: '#7f9cf5',
      500: '#667eea',
      600: '#5a67d8',
      700: '#4c51bf',
      800: '#434190',
      900: '#3c366b',
    },
    purple: {
      100: '#faf5ff',
      200: '#e9d8fd',
      300: '#d6bcfa',
      400: '#b794f4',
      500: '#9f7aea',
      600: '#805ad5',
      700: '#6b46c1',
      800: '#553c9a',
      900: '#44337a',
    },
    pink: {
      100: '#fff5f7',
      200: '#fed7e2',
      300: '#fbb6ce',
      400: '#f687b3',
      500: '#ed64a6',
      600: '#d53f8c',
      700: '#b83280',
      800: '#97266d',
      900: '#702459',
    },
  },
  spacing: {
    // Scale factor, equivalent to rem and based on baseFontSize
    '0'  : 0,
    '1'  : 0.25,
    '2'  : 0.5,
    '3'  : 0.75,
    '4'  : 1,
    '5'  : 1.25,
    '6'  : 1.5,
    '8'  : 2,
    '10' : 2.5,
    '12' : 3,
    '16' : 4,
    '20' : 5,
    '24' : 6,
    '32' : 8,
    '40' : 10,
    '48' : 12,
    '56' : 14,
    '64' : 16,
  },
  borderRadius: {
    none    : 0,
    sm      : 0.125,
    default : 0.25,
    md      : 0.375,
    lg      : 0.5,
    full    : 9999,
  },
  borderWidth: {
    '0': 0,
    '1': 1,
    '2': 2,
    '4': 4,
    '8': 8,
  },
  width: {
    "px"    : 1,
    "1/2"   : "50%",
    "1/3"   : "33.333333%",
    "2/3"   : "66.666667%",
    "1/4"   : "25%",
    "2/4"   : "50%",
    "3/4"   : "75%",
    "1/5"   : "20%",
    "2/5"   : "40%",
    "3/5"   : "60%",
    "4/5"   : "80%",
    "1/6"   : "16.666667%",
    "2/6"   : "33.333333%",
    "3/6"   : "50%",
    "4/6"   : "66.666667%",
    "5/6"   : "83.333333%",
    "1/12"  : "8.333333%",
    "2/12"  : "16.666667%",
    "3/12"  : "25%",
    "4/12"  : "33.333333%",
    "5/12"  : "41.666667%",
    "6/12"  : "50%",
    "7/12"  : "58.333333%",
    "8/12"  : "66.666667%",
    "9/12"  : "75%",
    "10/12" : "83.333333%",
    "11/12" : "91.666667%",
    "full"  : "100%",
  },
  opacity: {
    '0'   : 0,
    '25'  : 0.25,
    '50'  : 0.5,
    '75'  : 0.75,
    '100' : 1,
  },
  scale: {
    '0'   : 0,
    '50'  : 0.5,
    '75'  : 0.75,
    '90'  : 0.9,
    '95'  : 0.95,
    '100' : 1,
    '105' : 1.05,
    '110' : 1.1,
    '125' : 1.25,
    '150' : 1.5,
  },
  rotate: {
    '0': '0deg',
    '15': '15deg',
    '45': '45deg',
    '90': '90deg',
    '180': '180deg',
  },
  translate: {},
  size: {
    '5': 5,
    '10': 10,
    '16': 16,
    '32': 32,
    '48': 48,
    '64': 64,
  },
  aspectRatio: {
    '1/1': 1,
    '1/2': 0.5,
    '3/4': 0.75,
    '4/3': 1.3,
    '3/2': 1.5,
    '16/9': 1.78
  }
}

export default config
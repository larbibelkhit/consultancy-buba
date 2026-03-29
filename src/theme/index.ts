import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    black:     '#0e0d0c',
    deep:      '#141210',
    panel:     '#1c1a17',
    border:    '#2e2b24',
    gold:      '#b87333',
    goldLight: '#cc8c4a',
    ivory:     '#f0ebe0',
    muted:     '#857d6e',
    smMuted:   '#504a3f',
  },
  fonts: {
    heading: "'Cormorant Garant', Georgia, serif",
    body:    "'Inter', system-ui, sans-serif",
  },
  fontWeights: {
    light:   300,
    normal:  400,
    medium:  500,
  },
  styles: {
    global: {
      'html': { scrollBehavior: 'smooth' },
      'body': {
        bg:     '#0e0d0c',
        color:  '#f0ebe0',
        fontWeight: 300,
        WebkitFontSmoothing: 'antialiased',
      },
      '::selection': {
        bg: '#b87333',
        color: '#0e0d0c',
      },
    },
  },
  components: {
    Button: {
      baseStyle: { borderRadius: 0 },
    },
    Input: {
      variants: {
        buba: {
          field: {
            bg: '#1c1a17',
            border: '1px solid',
            borderColor: '#2e2b24',
            borderRadius: 0,
            color: '#f0ebe0',
            fontWeight: 300,
            _placeholder: { color: '#504a3f' },
            _focus: { borderColor: '#b87333', boxShadow: 'none' },
          },
        },
      },
      defaultProps: { variant: 'buba' },
    },
    Textarea: {
      variants: {
        buba: {
          bg: '#1c1a17',
          border: '1px solid',
          borderColor: '#2e2b24',
          borderRadius: 0,
          color: '#f0ebe0',
          fontWeight: 300,
          _placeholder: { color: '#504a3f' },
          _focus: { borderColor: '#b87333', boxShadow: 'none' },
        },
      },
      defaultProps: { variant: 'buba' },
    },
    Select: {
      variants: {
        buba: {
          field: {
            bg: '#1c1a17',
            border: '1px solid',
            borderColor: '#2e2b24',
            borderRadius: 0,
            color: '#f0ebe0',
            fontWeight: 300,
            _focus: { borderColor: '#b87333', boxShadow: 'none' },
          },
          icon: { color: '#857d6e' },
        },
      },
      defaultProps: { variant: 'buba' },
    },
  },
})

export default theme

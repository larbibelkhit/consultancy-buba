'use client'

import { CacheProvider } from '@emotion/react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import createCache from '@emotion/cache'
import theme from '@/theme'

const emotionCache = createCache({ key: 'css' })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme} resetCSS>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}

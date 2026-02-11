'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import useColorStore from '@/hooks/use-color-store'
export function ColorProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { theme } = useTheme()
  const { color, updateCssVariables } = useColorStore(theme)
  React.useEffect(() => {
    updateCssVariables()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, color])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// =================================================   true

// 'use client' 

// import * as React from 'react'
// import { useTheme } from 'next-themes'
// import useColorStore from '@/hooks/use-color-store'

// export function ColorProvider({children }: { children: React.ReactNode }) {
  
//   const { theme } = useTheme()
//   const { updateCssVariables } = useColorStore(theme)

//   React.useEffect(() => {
//     if (!theme) return
//     updateCssVariables()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [theme])

//   return <>{children}</>
// }


//==================================================================

// 'use client' 

// import { useTheme } from 'next-themes'
// import { useEffect } from 'react'
// import useColorStore from '@/hooks/use-color-store'


// export function ColorProvider({ children }: { children: React.ReactNode }) {
//   const { theme } = useTheme()
//   const applyColors = useColorStore((s) => s.applyColors)


//   useEffect(() => {
//     if (!theme) return
//     applyColors(theme as 'light' | 'dark')
// /// eslint-disable-next-line react-hooks/exhaustive-deps

//   }, [theme , applyColors])

//   return <>{children}</>
// }

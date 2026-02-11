'use client'

import { ChevronDownIcon, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import useColorStore from '@/hooks/use-color-store'
import useIsMounted from '@/hooks/use-is-mounted'
import { useTranslations } from 'next-intl'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const { availableColors, color, setColor } = useColorStore(theme)
  const t = useTranslations('Header')
  const changeTheme = (value: string) => {
    setTheme(value)
  }
  const isMounted = useIsMounted()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='header-button h-[45px]'>
        {theme === 'dark' && isMounted ? (
          <div className='flex items-center gap-1 '>
            <Moon className='h-10 w-10' /> {t('Dark')} <ChevronDownIcon />
          </div>
        ) : (
          <div className='flex items-center gap-1'>
            <Sun className='h-10 w-10' /> {t('Light')} <ChevronDownIcon />
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 bg-header dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-md shadow-md'>
        <DropdownMenuLabel className='bg-gray-800 text-md'>Theme</DropdownMenuLabel>

        <DropdownMenuRadioGroup value={theme} onValueChange={changeTheme}>
          <DropdownMenuRadioItem value='dark' className='text-md'>
            <Moon className='h-4 w-4 mr-1 ' /> {t('Dark')}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='light' className='text-md'>
            <Sun className='h-4 w-4 mr-1' /> {t('Light')}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className='bg-gray-800 text-md'>{t('Color')}</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          value={color.name}
          onValueChange={(value: string) => setColor(value, true)}
        >
          {availableColors.map((c) => (
            <DropdownMenuRadioItem key={c.name} value={c.name}>
              <div
                style={{ backgroundColor: c.name }}
                className='h-4 w-4 mr-1 rounded-full'
              ></div>

              {t(c.name)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

//==================================================================

// 'use client'

// import { ChevronDownIcon, Moon, Sun } from 'lucide-react'
// import { useTheme } from 'next-themes'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { useTranslations } from 'next-intl'
// import useColorStore from '@/hooks/use-color-store'
// import useIsMounted from '@/hooks/use-is-mounted'

// export default function ThemeSwitcher() {
//   const { theme, setTheme } = useTheme()
//   const isMounted = useIsMounted()
//   const t = useTranslations('Header')

//   // ✅ نجيب القيم صح من zustand
//   const availableColors = useColorStore((s) => s.availableColors)
//   const setColor = useColorStore((s) => s.setColor )
//   const currentColor = useColorStore((s) => s.userColor ?? s.defaultColor)
  

//   if (!isMounted) return null

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className='header-button h-[41px] '>
//         {theme === 'dark' ? (
//           <div className='flex items-center gap-1 '>
//             <Moon className='h-4 w-4' /> {t('Dark')} <ChevronDownIcon />
//           </div>
//         ) : (
//           <div className='flex items-center gap-1 '>
//             <Sun className='h-4 w-4' /> {t('Light')} <ChevronDownIcon />
//           </div>
//         )}
//       </DropdownMenuTrigger>

//       <DropdownMenuContent className='w-56 bg-header'>
//         <DropdownMenuLabel className='bg-gray-800'>Theme</DropdownMenuLabel>

//         <DropdownMenuRadioGroup value={theme} onValueChange={ (value) => setTheme(value)}>
//           <DropdownMenuRadioItem value='dark'>
//             <Moon className='h-4 w-4 mr-1' /> {t('Dark')}
//           </DropdownMenuRadioItem>
//           <DropdownMenuRadioItem value='light'>
//             <Sun className='h-4 w-4 mr-1' /> {t('Light')}
//           </DropdownMenuRadioItem>
//         </DropdownMenuRadioGroup>

//         <DropdownMenuSeparator />

//         <DropdownMenuLabel className='bg-gray-800'>{t('Color')}</DropdownMenuLabel>

//         <DropdownMenuRadioGroup
//           value={currentColor}
//           onValueChange={(value) => setColor(value)}
//         >
//           {availableColors.map((c) => (
//             <DropdownMenuRadioItem key={c.name} value={c.name}>
//               <div className='h-4 w-4 mr-1 rounded-full border'
//                 style={{
//                   backgroundColor: `hsl(${c.root['--primary']})`,
//                 }} />
//               {t(c.name)}
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
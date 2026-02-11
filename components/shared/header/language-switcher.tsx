'use client'

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

import { useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import useSettingStore from '@/hooks/use-setting-store'
import { i18n } from '@/i18n-config'
import { setCurrencyOnServer } from '@/lib/actions/setting.actions'
import { ChevronDownIcon } from 'lucide-react'

export default function LanguageSwitcher() {
  const { locales } = i18n
  const locale = useLocale()
  const pathname = usePathname()

  const {
    setting: { availableCurrencies, currency },
    setCurrency,
  } = useSettingStore()
  const handleCurrencyChange = async (newCurrency: string) => {
    await setCurrencyOnServer(newCurrency)
    setCurrency(newCurrency)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='header-button h-[41px]'>
        <div className='flex items-center gap-1'>
          <span className='text-2xl'>
            {locales.find((l) => l.code === locale)?.icon}
          </span>
          {locale.toUpperCase().slice(0, 2)}
          <ChevronDownIcon className='h-8 w-8' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 bg-header dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-md shadow-md'>
        <DropdownMenuLabel className='bg-gray-800 text-md'>Language</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={locale}>
          {locales.map((c) => (
            <DropdownMenuRadioItem key={c.name} value={c.code}>
              <Link
                className='w-full flex items-center gap-1 '
                href={pathname}
                locale={c.code}
              >
                <span className='text-lg'>{c.icon}</span> {c.name}
              </Link>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator/>

        <DropdownMenuLabel className='bg-gray-800 text-md' >Currency</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={currency}
          onValueChange={handleCurrencyChange}
        >
          {availableCurrencies.map((c) => (
            <DropdownMenuRadioItem key={c.name} value={c.code}>
              {c.symbol} {c.code}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

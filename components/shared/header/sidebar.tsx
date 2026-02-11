import * as React from 'react'
import Link from 'next/link'
import { X, ChevronRight, UserCircle, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SignOut } from '@/lib/actions/user.actions'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { auth } from '@/auth'
import { getLocale, getTranslations } from 'next-intl/server'
import { getDirection } from '@/i18n-config'

export default async function Sidebar({
  categories,
}: {
  categories: string[]
}) {
  const session = await auth()

  const locale = await getLocale()

  const t = await getTranslations()
  return (
    <Drawer direction={getDirection(locale) === 'rtl' ? 'right' : 'left'}>
      <DrawerTrigger className='header-button flex items-center !p-2  '>
        <MenuIcon className='h-15 w-15 mr-1  ' />
        {t('Header.All')}
      </DrawerTrigger>
      <DrawerContent className='w-[400px] mt-0 top-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-md shadow-md'>
        <div className='flex flex-col h-full'>
          {/* User Sign In Section */}
          <div className='bg-header text-foreground flex items-center justify-between  '>
            <DrawerHeader>
              <DrawerTitle className='flex items-center'>
                <UserCircle className='h-6 w-6 mr-2' />
                {session ? (
                  <DrawerClose asChild>
                    <Link href='/account' >
                      <span className='text-2xl font-semibold '>
                        {t('Header.Hello')}, {session.user.name}
                      </span>
                    </Link>
                  </DrawerClose>
                ) : (
                  <DrawerClose asChild>
                    <Link href='/sign-in'>
                      <span className='text-2xl font-semibold '>
                        {t('Header.Hello')}, {t('Header.sign in')}
                      </span>
                    </Link>
                  </DrawerClose>
                )}
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <DrawerClose asChild>
              <Button variant='ghost' size='icon' className='mr-2'>
                <X className='h-5 w-5 ' />
                <span className='sr-only'>Close</span>
              </Button>
            </DrawerClose>
          </div>

          {/* Shop By Category */}
          <div className='flex-1 overflow-y-auto bg-header'>
            <div className='p-4 border-b bg-gray-800'>
              <h2 className='text-2xl font-semibold'>
                {t('Header.Shop By Department')}
              </h2>
            </div>
            <nav className='flex flex-col text-2xl'>
              {categories.map((category) => (
                <DrawerClose asChild key={category}>
                  <Link
                    href={`/search?category=${category}`}
                    className={`flex items-center justify-between item-button`}
                  >
                    <span>{category}</span>
                    <ChevronRight className='h-4 w-4' />
                  </Link>
                </DrawerClose>
              ))}
            </nav>
          </div>

          {/* Setting and Help */}
          <div className='border-t flex flex-col bg-header'>
            <div className='p-4 bg-gray-800'>
              <h2 className='text-2xl font-semibold'>
                {t('Header.Help & Settings')}
              </h2>
            </div>
            <DrawerClose asChild>
              <Link href='/account' className='item-button text-2xl'>
                {t('Header.Your account')}
              </Link>
            </DrawerClose>{' '}
            <DrawerClose asChild>
              <Link href='/page/customer-service' className='item-button text-2xl'>
                {t('Header.Customer Service')}
              </Link>
            </DrawerClose>
            {session ? (
              <form action={SignOut} className='w-full '>
                <Button
                  className='w-full justify-start item-button text-2xl '
                  variant='ghost'
                >
                  {t('Header.Sign out')}
                </Button>
              </form>
            ) : (
              <Link href='/sign-in' className='item-button text-2xl'>
                {t('Header.Sign in')}
              </Link>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

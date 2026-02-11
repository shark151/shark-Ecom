import { auth } from '@/auth'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SignOut } from '@/lib/actions/user.actions'
import { cn } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function UserButton() {
  const t = await getTranslations()
  const session = await auth()
  return (
    <div className='flex gap-2 items-center '>
      <DropdownMenu>
        <DropdownMenuTrigger className='header-button ' asChild>
          <div className='flex items-center '>
            <div className='flex flex-col text-md text-left '>
              <span >
                {t('Header.Hello')},{' '}
                {session ? session.user.name : t('Header.sign in')}
              </span>
              <span className='font-bold text-lg'>{t('Header.Account & Orders')}</span>
            </div>
            <ChevronDownIcon />
          </div>
        </DropdownMenuTrigger>
        {session ? (
          <DropdownMenuContent className='w-56 bg-header dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-md shadow-md' align='end' forceMount >
            <DropdownMenuLabel className='font-normal bg-gray-800'>
              <div className='flex flex-col space-y-1 '>
                <p className='text-md font-medium leading-none '>
                  {session.user.name}
                </p>
                <p className='text-md leading-none text-muted-foreground'>
                  {session.user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <Link className='w-full text-2xl' href='/account'>
                <DropdownMenuItem className='text-xl'>{t('Header.Your account')}</DropdownMenuItem>
              </Link>
              <Link className='w-full text-2xl' href='/account/orders'>
                <DropdownMenuItem className='text-xl'>{t('Header.Your orders')}</DropdownMenuItem>
              </Link>

              {session.user.role === 'Admin' && (
                <Link className='w-full ' href='/admin/overview'>
                  <DropdownMenuItem className='text-xl'>{t('Header.Admin')}</DropdownMenuItem>
                </Link>
              )}
            </DropdownMenuGroup>
            <DropdownMenuItem className='p-0 mb-1 '>
              <form action={SignOut} className='w-full '>
                <Button
                  className='w-full py-4 px-2 h-4 justify-start text-xl'
                  variant='ghost'
                >
                  {t('Header.Sign out')}
                </Button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent className='w-56 bg-header dark:bg-neutral-900 border border-gray-900 dark:border-neutral-800 rounded-md shadow-md' align='end' forceMount>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  className={cn(buttonVariants(), 'w-full text-xl')}
                  href='/sign-in'
                >
                  {t('Header.Sign in')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuLabel>
              <div className='font-boldse text-lg'>
                {t('Header.New Customer')}?{' '}
                <Link href='/sign-up'>{t('Header.Sign up')}</Link>
              </div>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  )
}

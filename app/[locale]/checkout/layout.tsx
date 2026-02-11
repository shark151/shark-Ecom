import { HelpCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='p-4 bg-header'>
      <header className='bg-black mb-4 border-b'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <Link href='/'>
            <Image
              src='/icons/img-1.png'
              alt='logo'
              width={80}
              height={80}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Link>
          <div>
            <h1 className='text-3xl'>Checkout</h1>
          </div>
          <div>
            <Link href='/page/help'>
              <HelpCircle className='w-6 h-6' />
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}

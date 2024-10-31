import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-5 py-0 flex justify-between items-center border shadow-sm'>
        <Image src={'/logo-money.png'} 
        alt='Logo'
        width={160}
        height={80}
        />
        <Button>Get Started</Button>
    </div>
  )
}

export default Header
import { Banana, LucideProps } from 'lucide-react'
import React from 'react'

export default function Compost(props:LucideProps) {
  return (
    <div className='flex flex-col items-center'>
      <Banana {...props} />
      <p>Compost</p>
    </div>
  )
}

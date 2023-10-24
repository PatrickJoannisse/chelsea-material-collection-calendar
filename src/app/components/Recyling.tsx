import { LucideProps, Recycle } from 'lucide-react'
import React from 'react'

export default function Recycling(props: LucideProps) {
  return (
    <div className='flex flex-col items-center'>
      <Recycle {...props} />
      <p>Recycling</p>
    </div>
  )
}

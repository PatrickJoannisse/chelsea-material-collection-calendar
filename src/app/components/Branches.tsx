import { Axe, LucideProps } from 'lucide-react'
import React from 'react'

export default function Branches(props: LucideProps) {
  return (
    <div className='flex flex-col items-center'>
      <Axe {...props} />
      <p>Branches</p>
    </div>
  )
}

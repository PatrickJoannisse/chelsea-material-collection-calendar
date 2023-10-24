import { LucideProps, Trash2 } from 'lucide-react'
import React from 'react'

export default function Garbage(props: LucideProps) {
  return (
    <div className='flex flex-col items-center'>
      <Trash2 {...props} />
      <p>Trash</p>
    </div>
  )
}

import { LucideProps, Redo } from 'lucide-react'
import React from 'react'

export default function Next(props: LucideProps) {
  return (
    <div className='flex flex-col items-center'>
    <Redo {...props} />
    <p>Postponed next day</p>
  </div>
  )
}

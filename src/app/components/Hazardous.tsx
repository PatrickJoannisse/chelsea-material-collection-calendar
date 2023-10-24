import { LucideProps, PaintBucket } from 'lucide-react'
import React from 'react'

export default function Hazardous(props: LucideProps) {
  return (
    <div className='flex flex-col items-center'>
      <PaintBucket {...props} />
      <p>Hazardous</p>
    </div>
  )
}

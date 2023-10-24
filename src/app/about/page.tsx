import { Coffee, Home} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-20'>
      <Link href='/' className='absolute right-0 top-0 mt-5 mr-5'>
        <Home size={40} />
        <span className='sr-only'>Home</span>
      </Link>
      <main className='text-center space-y-4'>
        <h1 className='text-3xl font-extrabold'>About</h1>
        <p className='text-lg py-8'>This is an unofficial scheduling web app for the municipality of Chelsea, Quebec. I made this for fun in one night because I didn&apos;t want to use a PDF or print a calendar.</p>
      </main>
      <footer className='text-center'>
        <p className=''>Made with <Coffee className='inline' /> by <br />Patrick Joannisse</p>
      </footer>
    </div>
  )
}
